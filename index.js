function mixedMessages(){

        let messagesRandom =Math.floor(Math.random() * 6); //For generating an index of the arrayMessage
        let firstArrayMessages=[ //list of messages
                            'La preuve de la valeur d\'un système informatique est son existence',
                            'Je m\'en fous si ça marche sur votre machine ! Nous ne livrons pas votre machine',
                            'Marcher sur l\'eau et développer un logiciel à partir d\'une spécification sont faciles si les deux sont gelés',
                            'Ajouter des personnes à un projet en retard accroît son retard',
                            'Entre le bit, unité de mesure informatique, et les queues de sondage, le circuit imprimé est un peu sexiste',
                            'Quelle prétention de prétendre que l\'informatique est récente : Adam et Eve avaient déjà un Apple !'
                        ];
        let secondArrayMessages=[ //list of messages
                        'Si vous ne pouvez expliquer un concept à un enfant de six ans, c\'est que vous ne le comprenez pas complètement',
                        'Regardez profondément dans la nature, et alors vous comprendrez tout beaucoup mieux',
                        'L\'intelligence n\'est pas la capacité de stocker des informations, mais de savoir où les trouver',
                        'La mesure de l\'intelligence est la capacité de changer',
                        'La vie, c\'est comme une bicyclette, il faut avancer pour ne pas perdre l\'équilibre',
                        'Le monde est dangereux à vivre ! Non pas tant à cause de ceux qui font le mal, mais à cause de ceux qui regardent et laissent faire'
                    ];

        let thirdArrayMessages=[ //list of messages
                    'Il n\'existe que deux choses infinies, l\'univers et la bêtise humaine… mais pour l\'univers, je n\'ai pas de certitude absolue',
                    'Placez votre main sur un poêle une minute et ça vous semble durer une heure. Asseyez vous auprès d\'une jolie fille une heure et ça vous semble',
                    'La valeur d\'un homme tient dans sa capacité à donner et non dans sa capacité à recevoir',
                    'N\'essayez pas de devenir un homme qui a du succès. Essayez de devenir un homme qui a de la valeur',
                    'Le mot progrès n\'aura aucun sens tant qu\'il y aura des enfants malheureux',
                    'Un problème créé ne peut être résolu en réfléchissant de la même manière qu’il a été créé'
                ];

        let firstMessage = firstArrayMessages[messagesRandom];
        let secondMessage = secondArrayMessages[messagesRandom];
        let thirdMessage = thirdArrayMessages[messagesRandom];
    
        return {firstMessage, secondMessage, thirdMessage} ;      
    }

// calling mixedMessages fonction
    console.log(mixedMessages());
   