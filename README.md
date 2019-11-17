# :page_facing_up: Welcome to my online CV repo

#### > See it online [here](https://cv.johannchopin.fr/)


----
### npm CLI:
* `npm run dev` : build project in `/build/dev` folder and open it on server `http://localhost:1234` (**Warning**: all links are absolute)
* `npm run devLocal` : build project with relative links in `/build/devLocal` folder
* `npm run prod` : build project with relative links and minify code in `/build/prod/{appVersion}` folder


----
### Installation:

1. Edit `app-settings.json` in `root` directory with yours settings
    ```json
    {
        "name": "my-cv-2019",
        "version": "<version>",
        "api_to_use": "<local || server>",
        "api": {
            "local": "<link/to/api>",
            "server": "https://api.johannchopin.fr/common/src/api/"
        }
    }
    ```