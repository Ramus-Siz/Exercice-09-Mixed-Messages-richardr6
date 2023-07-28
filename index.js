function mixedMessages(){

        let messagesRandom =Math.floor(Math.random() * 6); //For generating an index of the arrayMessage
        let arrayMessages=[ //list of messages
                            'La preuve de la valeur d\'un système informatique est son existence',
                            'Je m\'en fous si ça marche sur votre machine ! Nous ne livrons pas votre machine',
                            'Marcher sur l\'eau et développer un logiciel à partir d\'une spécification sont faciles si les deux sont gelés',
                            'Ajouter des personnes à un projet en retard accroît son retard',
                            'Entre le bit, unité de mesure informatique, et les queues de sondage, le circuit imprimé est un peu sexiste.',
                            'Quelle prétention de prétendre que l\'informatique est récente : Adam et Eve avaient déjà un Apple !'
                        ];

        let message = arrayMessages[messagesRandom];
    
        return  message ;      
    }

// calling mixedMessages fonction
    console.log(mixedMessages());
   