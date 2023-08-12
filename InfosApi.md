**\*\*\***CETTE PARTI EST RESERVEE AUX INFORMATION DE L'API**\*\*\***

Important: l'api de la sorte: """localhost:8000/api/login""" ou encore """lhttp://127.0.0.1:8000/api/login"""

\*\*Url:localhost:8000/api

    *****J'utilise **laravel/passport** pour la securité. Pour securiser les id des users, j'utilise uuid. les id des users sont donc uuid. NB: Si un jour un probleme intervient(Peu probable), sachez que pour que j'ai modifier la colonne "oauth_access_tokens" pour qu'elle accepte de prendre uuid (qui etais a l'origine id). Lui seul a ete modifier. Aucune autre modificcation n'a ete apporter sur les tables de **PASSPORT\***. Si le probleme persiste, rammener simplement les "uuid" des users en "id" tout en faisant les autres modification dans les autres autres table si uuid a ete utiliser.*****

-/connexion -> pour la connexion
-/inscription -> pour l'inscription
