cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "com.example.hello.hello",
        "file": "plugins/com.example.hello/www/hello.js",
        "pluginId": "com.example.hello",
        "clobbers": [
            "hello"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.example.hello": "0.7.0",
    "cordova-plugin-whitelist": "1.3.2"
};
// BOTTOM OF METADATA
});