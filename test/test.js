describe('Checking Valid JSONs of different depth', function() {

    it('Valid and Immutable (Frozen)', function() {

        let immutableObj = createImmutableObjectFromJson(`{
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
        }`);
    
        assert.frozen(immutableObj);  
    });

    it('Valid and Immutable (Can`t change existing properties)', function() {

        let immutableObj = createImmutableObjectFromJson(`{
            "someProp":"Correct",
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
        }`);

        immutableObj.someProp = 'Wrong';
            
        assert.equal(immutableObj.someProp, 'Correct');
    });

    it('Valid and Immutable (Can`t change existing properties)', function() {

        let immutableObj = createImmutableObjectFromJson(`{
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
        }`);

        immutableObj.users[0].age = 'Wrong';
     
        assert.equal(immutableObj.users[0].age, '31');
    });

    it('Valid and Immutable (Can`t change existing properties)', function() {

        let immutableObj = createImmutableObjectFromJson(`{
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
        }`);

        immutableObj.users[1].groups[1].name = 'Wrong';

        assert.equal(immutableObj.users[1].groups[1].name, 'Moderators');
    });

    it('Valid and Immutable (Can`t add new properties)', function() {

        let immutableObj = createImmutableObjectFromJson(`{
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
        }`);

        immutableObj.wrong = 'Wrong';

        assert.equal(immutableObj.wrong, undefined);
    });

    it('Valid and Immutable (Can`t add new properties)', function() {

        let immutableObj = createImmutableObjectFromJson(`{
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
        }`);

        immutableObj.users[1].groups[1].wrong = 'Wrong';

        assert.equal(immutableObj.users[1].groups[1].wrong, undefined);
    });

    it('Valid and Immutable (Can`t delete any properties)', function() {

        let immutableObj = createImmutableObjectFromJson(`{
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
        }`);

        delete immutableObj.users[0].name;
            
        assert.equal(immutableObj.users[0].name, 'Vasya');
    });

    it('Valid and Immutable (Can`t delete any properties)', function() {

        let immutableObj = createImmutableObjectFromJson(`{
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
        }`);

        delete immutableObj.users[1].groups[1].name;
     
        assert.equal(immutableObj.users[1].groups[1].name, 'Moderators');
    });
    
});

describe('Checking Invalid JSONs', function() {

    it('Invalid (Number instead of JSON)', function() {        
        assert.throws(() => createImmutableObjectFromJson(123), Error);
        
    });

    it('Invalid (JSON equals null / null instead of JSON)', function() {        
        assert.throws(() => createImmutableObjectFromJson('null'), Error);
        
    });

    it('Invalid JSON (SyntaxError)', function() {
        const check = () => {
            createImmutableObjectFromJson(`{
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
                            {asd
                            "name":"Users"
                            },
                            {
                            "name":"Moderators"
                            }
                        ],
                        "age":25
                    }
                ]
            }`);
        }

        assert.throws(check, SyntaxError);
    });
    
    it('Invalid JSON (SyntaxError)', function() {
        const check = () => {
            createImmutableObjectFromJson(`{
                "users":[
                    {
                        "name":"Vasya",
                        "groups":[
                            
                            "name"fs:"Users"
                            }
                            ,
                            {
                            "name"sdf:"Administrators"
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
            }`);
        }

        assert.throws(check, SyntaxError);
    });

    it('Invalid JSON (SyntaxError)', function() {
        const check = () => {
            createImmutableObjectFromJson(`{
                "users"[]{}{]{}:[
                    {
                        "name":"Vasya",
                        "groups":[
                            {
                            "name":"Users"
            }`);
        }

        assert.throws(check, SyntaxError);
    });
   
});