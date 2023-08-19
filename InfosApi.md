**\*\*\***CETTE PARTI EST RESERVEE AUX INFORMATION DE L'API**\*\*\***

Important: l'api de la sorte: """localhost:8000/api/login""" ou encore """lhttp://127.0.0.1:8000/api/login"""

\*\*Url:localhost:8000/api

    *****J'utilise **laravel/passport** pour la securité. Pour securiser les id des users, j'utilise uuid. les id des users sont donc uuid. NB: Si un jour un probleme intervient(Peu probable), sachez que pour que j'ai modifier la colonne "oauth_access_tokens" pour qu'elle accepte de prendre uuid (qui etais a l'origine id). Lui seul a ete modifier. Aucune autre modificcation n'a ete apporter sur les tables de **PASSPORT\***. Si le probleme persiste, rammener simplement les "uuid" des users en "id" tout en faisant les autres modification dans les autres autres table si uuid a ete utiliser.*****

-/connexion -> pour la connexion
-/inscription -> pour l'inscription

**UNIVERSITES**
-GET: localhost:8000/api/admin/univeristes            la liste des universite
-POST: localhost:8000/api/admin/univeristes           Ajout d'une universite
-GET: localhost:8000/api/admin/univeristes/idU       l'univeristé en question
-PUT: localhost:8000/api/admin/univeristes/idU       Editer d'une universite
-DELETE : localhost:8000/api/admin/univeristes/idU   Suppression d'une universite

**DEPARTEMENTS**->*en fonction des universites*
-GET: localhost:8000/api/admin/departements               touts des departements
-GET: localhost:8000/api/admin/departements/idU               la liste des departements
-POST: localhost:8000/api/admin/departements/ajout/idU              Ajout d'une departement
-GET: localhost:8000/api/admin/departements/detail/idU               le departement en question
-PUT: localhost:8000/api/admin/departements/idU/idD           Editer d'une departement
-DELETE : localhost:8000/api/admin/departements/idU/idD       Suppression d'un departement

**FILIERES**->*en fonction des depaartements*
-GET: localhost:8000/api/admin/filieres/idD                   la liste des filieres
-POST: localhost:8000/api/admin/filieres/idD                  Ajout d'une filiere
-GET: localhost:8000/api/admin/filieres/idD/idF               la filiere en question
-PUT: localhost:8000/api/admin/filieres/idD/idF               Editer d'une filiere
-DELETE : localhost:8000/api/admin/filieres/idD/idF           Suppression d'une filiere

**LICENCES**->*En fonction des filieres*
-GET: localhost:8000/api/admin/licences/idF                   la liste des licences
-POST: localhost:8000/api/admin/licences/idF                  Ajout d'une licence
-GET: localhost:8000/api/admin/licences/idF/idL                la licence en question
-PUT: localhost:8000/api/admin/licences/idF/idL                Editer d'une licence
-DELETE : localhost:8000/api/admin/licences/idF/idL            Suppression d'une licence


**ANNEES**->*En foncetion des licences*
-GET: localhost:8000/api/admin/annees             la liste des annees
-POST: localhost:8000/api/admin/annees            Ajout d'une annee
-GET: localhost:8000/api/admin/annees/id        l'annee en question
-PUT: localhost:8000/api/admin/annees/id        Editer d'une annee
-DELETE : localhost:8000/api/admin/annees/id    Suppression d'une annee

**MODULES**->*En fonction des annees*
-GET: localhost:8000/api/admin/modules             la liste des modules
-POST: localhost:8000/api/admin/modules            Ajout d'une module
-GET: localhost:8000/api/admin/modules/uuid        le module en question
-PUT: localhost:8000/api/admin/modules/uuid        Editer d'un module
-DELETE : localhost:8000/api/admin/modules/uuid    Suppression d'un module


