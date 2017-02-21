#Immutable-Objects-Assignment-TeamDev-TestTask

Immutable Objects Assignment

Summary
Implement a function transforming the JSON string into an immutable JavaScript object.

Input data
JSON object as string. Typical example:

{
    "users":[
        {
            "name":"Vasya",
            "groups":[
                {
                "name":"Users"
                }
                ,
                {
                "name":"Administrators"
                }
            ],
            "age":31
        },
        {
            "name":"Petya",
            "groups":[
                {
                "name":"Users"
                },
                {
                "name":"Moderators"
                }
            ],
            "age":25
        }
    ]
}

The JSON tree may have any depth.
The JSON string may be invalid or improperly formatted.

Returning value
The immutable JavaScript object.
For a resulting value, it must not be possible to modify, append or remove any property of any
object in the tree. I.e. immutability should be provided not only for the top-level properties of the
target object, but for all the properties present in the object structure.
In case the input string does not represent a valid JSON object, the exception with the error
message should be thrown. The error message should clearly explain why it is not possible to
turn the JSON string into an immutable object.

Technical Requirements
● The JS function should take a single argument, returning a single value.
● No usage of 3rd-party frameworks is allowed.
● The code must be compliant with ECMAScript 5.1.
● The performance of the implementation should be as good as possible (memory
consumption, CPU consumption).
● Unit tests should be created for the solution covering the typical cases.
● Target runtime for tests is the latest Google Chrome.