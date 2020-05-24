var fs = require('fs');
var readlineSync = require('readline-sync');
var { exec } = require('child_process');

var appSettings = require('../app-settings.json');

var absolutePathToProject = 'C:/UwAmp/www/mycv-2019';
var apiToUse = appSettings['api_to_use'];
var appVersion = appSettings['version'];
var pathToBuild = absolutePathToProject + '/build/prod/' + appVersion;

var asciiScriptTitle = `
__       __  ___        __                           __
\\ \\     /  |/  /__  ___/ /__       ___  _______  ___/ /
 > >   / /|_/ / _ \\/ _  / -_)     / _ \\/ __/ _ \\/ _  / 
/_/   /_/  /_/\\___/\\_,_/\\__/     / .__/_/  \\___/\\_,_/  
                                /_/                    
`;


function main() {
    console.log(asciiScriptTitle + '\n');

    executeAfterCheckout(buildApp);
}


function executeAfterCheckout(fctToExecuteOnSuccess) {
    if (apiToUse !== 'server') {
        onApiToUseNotSetToServer();
    }

    if (isAppAllreadyBuildOnCurrentVersion()) {
        onAppAlreadyBuild()
    }

    fctToExecuteOnSuccess();
}


function isAppAllreadyBuildOnCurrentVersion() {
    return fs.existsSync(pathToBuild);
}


function buildApp() {
    var parcelJsBuildCmd = `parcel build ${absolutePathToProject}/src/index.html --out-dir ${pathToBuild} --public-url ./`;

    deleteFolder(pathToBuild);
    exec(parcelJsBuildCmd, function (err, stdout, stderr) {
        if (err) {
            console.error(err)
        } else {
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
        }
    });
}


function onAppAlreadyBuild() {

    var userResponse = readlineSync.question(`>>> App is allready build on version [${appVersion}]. Do you want to build it again? Yes/No: `);

    if (userResponse !== "Yes") {
        process.exit(1);
    }
}


function onApiToUseNotSetToServer() {
    console.log('"api_to_use" parameter is not set to "server" in your "app-settings.json"\n');
    console.log(`> "api_to_use" : "${apiToUse}"`);
    console.log(`                  ${('^').repeat(apiToUse.length)}\n\n`);

    var userResponse = readlineSync.question(">>> Do you want to continue anyway? Yes/No: ");

    if (userResponse !== "Yes") {
        process.exit(1);
    }
}


function deleteFolder(path) {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function (file, index) {
            var curPath = path + "/" + file;
            if (fs.lstatSync(curPath).isDirectory()) {
                deleteFolder(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });

        fs.rmdirSync(path);
    }
};


main();