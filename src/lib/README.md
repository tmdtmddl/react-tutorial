# firebase 사용법

1.initialize(초기세팅)를 해야함 firebase.ts 를 만들어서 모든내용 때려박음

```javascript
import firebase from "firebase/compat/app";
//파이어베이스가져오기
import "firebase/compat/firestore";
//firestore가져오기
import "firebase/compat/auth";
//auth가져오기
```

초기세팅 하는 법
firebase.initializeApp(firevaseSonfig)
모든 값들은 환경변수에 저장하여서 사용
**외부에 노출되면 안되는 중요한 비밀번호**
.env.local 환경변수 파일에 저장하여서 사용
무조건 영어 대문자로 사용 띄워쓰기 대신에 \_ 사용

**vite환경에서는 무조건 환경변수 앞에 VITE\_ 붙여서 사용**

파이어스토어, 파이어스토어서비스, 인증, 인증서비스, 파이어베이스 그자체

```javascript
const db = firebase.firestore;
//firestore 그자체
const dbService = firebase.firestore();
//?
const auth = firebase.auth;
//?
const authService = firebase.auth();
//?

export { firebase, db, dbService, auth, authService };
```

2.  리액트에서 firebace CRUD 하기

    1. ref 하는 어떤컬렉션을 사용하는지 정의 해둔변수를 사용함

    ```javascript
    const ref = dbService.collection("컬렉션이름");
    ```

    2.리액트에서 READ 데이터 가져오는 법

        1. useState , useEffect 사용

            가져올 데이터를 담을 컨테이넌를  useState로 만듬
            useEffect로 실시간반응 코들르 짬

            ```javascript
            const [items,setItem ]=useState<Item[]>([])

            useEffect(
                ()=>{
                    //subscribeItem라고 하는 변수명을 사용하는 패턴적용
                    const subscribeItem= ref.onSnapshot(
                        (snap)=>{
                            const data=snap.docs.map(
                                (doc)=>({...doc.data(),id:doc.id})
                            )
                            setItem(data as Item[])
                        }
                    )


                    //! eslint에러가 발생하면 해당 기능을 off로 변경하면됨
                    //Todo:  "@typescript-eslint/no-unused-expressions": "off",
                    subscribeItem



                    return subscribeItem
                },[]
            )
            ```

    **아래의 모든코드는 비동기함수로 작성해야함**

    ```javascript
    const asyncFn =async ()=>{
        try{
            await database와신호교환(성공메세지)
            alert ()
        }catch(error:any){
            return alert(error.message)
        }
    }

    ```

    **비동기함수로 안하면**?

    3. CREATE 데이터 베이스에 자료추가하기

    ref.add(데이터) //!아이디를 자동으로 생성

    uuid를 사용해서 추가해도됨

    ref.doc(uuid)set({...데이터,id:uuid})
    /// sub => doc=>({...doc.data(),id:doc.id}) 아이디 안받아와도 됨

    //최종코드

    doc=>({...doc.data() as Item})

    **데이터는 객체로 넣어야함**

    4. DELETE 데이터베이스에 자료삭제하기

    내가 지우고자하는 아이템의 아이디가 필수

    ref.doc(아이디).delete()

    5. UPDATE 데이터 베이스에 내가원하는 자료 수정하기

    내가 수정할 대상의 아이템이 필수

    ref.doc(아이디)

    수정할 내용 =>update함수를 사용

    객체를 넣어야함

    객체에 넣어야하는 값이 이미 있는 값이라면 해당 내용을 변경??
