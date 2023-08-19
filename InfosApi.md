**\*\*\***CETTE PARTI EST RESERVEE AUX INFORMATION DE L'API**\*\*\***

Important: l'api de la sorte: """localhost:8000/api/login""" ou encore """lhttp://127.0.0.1:8000/api/login"""

\*\*Url:localhost:8000/api

    *****J'utilise **laravel/passport** pour la securité. Pour securiser les id des users, j'utilise uuid. les id des users sont donc uuid. NB: Si un jour un probleme intervient(Peu probable), sachez que pour que j'ai modifier la colonne "oauth_access_tokens" pour qu'elle accepte de prendre uuid (qui etais a l'origine id). Lui seul a ete modifier. Aucune autre modificcation n'a ete apporter sur les tables de **PASSPORT\***. Si le probleme persiste, rammener simplement les "uuid" des users en "id" tout en faisant les autres modification dans les autres autres table si uuid a ete utiliser.*****

-/connexion -> pour la connexion
-/inscription -> pour l'inscription

**UNIVERSITES**
-GET: localhost:8000/api/univeristes            la liste des universite
-POST: localhost:8000/api/univeristes           Ajout d'une universite
-GET: localhost:8000/api/univeristes/uuid       l'univeristé en question
-PUT: localhost:8000/api/univeristes/uuid       Editer d'une universite
-DELETE : localhost:8000/api/univeristes/uuid   Suppression d'une universite

**DEPARTEMENTS**->*en fonction des universites*
-GET: localhost:8000/api/departements/uuidU             la liste des departements
-POST: localhost:8000/api/departements/uuidU            Ajout d'une departement
-GET: localhost:8000/api/departements/uuidU             le departement en question
-PUT: localhost:8000/api/departements/uuidD/uuidU       Editer d'une departement
-DELETE : localhost:8000/api/departements/uuidD/uuidU   Suppression d'un departement

**FILIERES**
-GET: localhost:8000/api/filieres           la liste des filieres
-POST: localhost:8000/api/filieres          Ajout d'une filiere
-GET: localhost:8000/api/filieres/uuid      la filiere en question
-PUT: localhost:8000/api/filieres/uuid      Editer d'une filiere
-DELETE : localhost:8000/api/filieres/uuid  Suppression d'une filiere

**LICENCES**
-GET: localhost:8000/api/licences           la liste des licences
-POST: localhost:8000/api/licences          Ajout d'une licence
-GET: localhost:8000/api/licences/uuid      la licence en question
-PUT: localhost:8000/api/licences/uuid      Editer d'une licence
-DELETE : localhost:8000/api/licences/uuid  Suppression d'une licence


**ANNEES**
-GET: localhost:8000/api/annees             la liste des annees
-POST: localhost:8000/api/annees            Ajout d'une annee
-GET: localhost:8000/api/annees/uuid        l'annee en question
-PUT: localhost:8000/api/annees/uuid        Editer d'une annee
-DELETE : localhost:8000/api/annees/uuid    Suppression d'une annee

**MODULES**
-GET: localhost:8000/api/modules             la liste des modules
-POST: localhost:8000/api/modules            Ajout d'une module
-GET: localhost:8000/api/modules/uuid        le module en question
-PUT: localhost:8000/api/modules/uuid        Editer d'un module
-DELETE : localhost:8000/api/modules/uuid    Suppression d'un module


