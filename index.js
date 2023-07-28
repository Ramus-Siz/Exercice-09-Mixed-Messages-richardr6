function mixedMessages(){

        let messagesRandom =Math.floor(Math.random() * 4); //For generating an index of the arrayMessage
        let arrayMessages=[ //list of messages
                            'La preuve de la valeur d\'un système informatique est son existence',
                            'Je m\'en fous si ça marche sur votre machine ! Nous ne livrons pas votre machine',
                            'Marcher sur l\'eau et développer un logiciel à partir d\'une spécification sont faciles si les deux sont gelés',
                            'Ajouter des personnes à un projet en retard accroît son retard'
                        ];

        let message = arrayMessages[messagesRandom];
    
        return  message ;      
    }


    console.log(mixedMessages());
    console.log(mixedMessages());
    console.log(mixedMessages());
    console.log(mixedMessages());