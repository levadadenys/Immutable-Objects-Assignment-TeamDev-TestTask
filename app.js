const str = `{
    "users":[
        {
            "name":null,
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
}`;



function createImmutableObjectFromJson (json) {
    try {
        const obj = JSON.parse(json);

        // \/ Because if we put numbers into JSON.parse it will parse it as a number and won`t make any crashes \/
        if (typeof(obj) !== 'object') throw new Error ('There is a number instead of a JSON object');
        if (obj === null) throw new Error ('Invalid JSON (Equals null)');
        
        makeInnerObjectsImmutable(obj);
        return obj;
    } 
    catch (e) {
        e.message = `JSON is not valid! Transformation into an immutable JS object is impossible. ${e.name}: ${e.message}`;
        throw e;
    }
};

function makeInnerObjectsImmutable (obj) {
    Object.freeze(obj);
    for (key in obj) {
        if (typeof(obj[key]) === 'object') makeInnerObjectsImmutable(obj[key]);
    }
};

let immutableObject = createImmutableObjectFromJson(str);