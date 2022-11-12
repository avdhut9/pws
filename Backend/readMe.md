```javascript
👉🏻 BASE_URL : http://localhost:8080

User AUTHENTICATION LOGIN AND SIGNUP
POST : BASE_URL/auth/signup
POST : BASE_URL/auth/login


TABLE CONTENT

👉🏻 GET : BASE_URL/todo/abc@gmail.com
    - to send all groups related to that user
    - RESPONSE SEND BY BACKEND AND ITS DATA STRUCTURE
    [
        {
            email:"abc@gmail.com",
            groupNumber:2,
            todo:[{status:false,title:"content to be send written on table"}]
        },
        {
            email:"abc@gmail.com",
            groupNumber:1,
            todo:[{status:false,title:"content to be send written on table"}]
        },
           {
            email:"abc@gmail.com",
            groupNumber:3,
            todo:[{status:false,title:"content to be send written on table"}]
        }
    ]

👉🏻 GET :  BASE_URL/todo?groupId="enter the group _id unique"
    - to send only one group like groupNumber -->2,3,1,5
    - RESPONSE SEND BY BACKEND AND ITS DATA STRUCTURE
    {
            email:"abc@gmail.com",
            groupNumber:1,
            groupName:"Enter group title",
            todo:[{status:false,title:"content to be send written on table"}]
    }

👉🏻 POST :BASE_URL/todo
    - Important  things to send it along with body
    - body structure should be ⌄⌄⌄
    - req.body={
                email:abc@gmail.com,
                groupNumber:Number,
                groupName:"Enter group title",
                todo:[{status:boolean,title:string}]

               }

👉🏻 DELETE :BASE_URL/todo/"enter group id"
    - Only of you want to Delete " whole group "
    - group like This example ->{
                                    email:abc@gmail.com,
                                    groupNumber:2,
                                    groupName:"Enter group title",
                                    todo:[{status:true,title:"acbdkjadbcjkabcac"},
                                          {status:true,title:"acbdkjadbcjkabcac"},
                                          {status:true,title:"acbdkjadbcjkabcac"}]
                                }
👉🏻 DELETE : BASE_URL/todo?groupId="group id"&titleId="title id"
    - Delete single todo inside that particular group



👉🏻 PATCH : BASE_URL/todo?groupId="group id"&titleId="title id"
    - Updating the todo status inside particular group


```