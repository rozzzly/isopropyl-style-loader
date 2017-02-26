Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var loader_utils_1 = require("loader-utils");
var constants_1 = require("./constants");
var entrypoint = function (source) { };
module.exports = entrypoint;
module.exports.pitch = function (remainingRequest) {
    var cfgOptions = loader_utils_1.getOptions(this);
    if (this.cacheable)
        this.cacheable();
    var remainingRequestRequirePath = loader_utils_1.stringifyRequest(this, "!!" + remainingRequest);
    var registryRequirePath = loader_utils_1.stringifyRequest(this, "!" + path.join(__dirname, './registry'));
    return "\n        var content = undefined;\n        var register = require(" + registryRequirePath + ").register;\n\n        function load() {\n            content = require(" + remainingRequestRequirePath + ");\n\n            if (typeof content === 'string') {\n                content = [[module.id, content, '']];\n            }\n\n            module.exports = content.locals || {};\n            module.exports." + constants_1.ImportID + " = {\n                moduleID: content[0][0],\n                css: " + (cfgOptions.inline ? 'content[0][1]' : 'false') + "\n            }\n\n            register(content[0][0], content[0][1]);\n        }\n\n        if (module.hot && typeof window !== 'undefined' && !!window.document) {\n            module.hot.accept(" + remainingRequestRequirePath + ", load)\n        }\n\n        load();\n    ";
};
// required export format. Webpack won't be expecting a default export.
module.exports = entrypoint;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDJCQUE2QjtBQUU3Qiw2Q0FBNEQ7QUFDNUQseUNBQXVDO0FBR3ZDLElBQU0sVUFBVSxHQUEwQixVQUFTLE1BQWMsSUFBVSxDQUFDLENBQUM7QUFDN0UsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7QUFFNUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsVUFBNkMsZ0JBQXdCO0lBQ3hGLElBQU0sVUFBVSxHQUFHLHlCQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFcEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUVyQyxJQUFNLDJCQUEyQixHQUFXLCtCQUFnQixDQUFDLElBQUksRUFBRSxPQUFLLGdCQUFrQixDQUFDLENBQUM7SUFDNUYsSUFBTSxtQkFBbUIsR0FBVywrQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsTUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUcsQ0FBQyxDQUFDO0lBQ3JHLE1BQU0sQ0FBQyx3RUFFc0IsbUJBQW1CLGdGQUdwQiwyQkFBMkIscU5BTzlCLG9CQUFRLDhFQUVkLFVBQVUsQ0FBQyxNQUFNLEdBQUcsZUFBZSxHQUFHLE9BQU8sNk1BT3BDLDJCQUEyQixnREFJdEQsQ0FBQztBQUNOLENBQUMsQ0FBQztBQUVGLHVFQUF1RTtBQUN2RSxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyB3ZWJwYWNrIGZyb20gJ3dlYnBhY2snO1xuaW1wb3J0IHsgc3RyaW5naWZ5UmVxdWVzdCwgZ2V0T3B0aW9ucyB9IGZyb20gJ2xvYWRlci11dGlscyc7XG5pbXBvcnQgeyBJbXBvcnRJRCB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuXG5jb25zdCBlbnRyeXBvaW50OiB3ZWJwYWNrLmxvYWRlci5Mb2FkZXIgPSBmdW5jdGlvbihzb3VyY2U6IHN0cmluZyk6IHZvaWQgeyB9O1xubW9kdWxlLmV4cG9ydHMgPSBlbnRyeXBvaW50O1xuXG5tb2R1bGUuZXhwb3J0cy5waXRjaCA9IGZ1bmN0aW9uKHRoaXM6IHdlYnBhY2subG9hZGVyLkxvYWRlckNvbnRleHQsIHJlbWFpbmluZ1JlcXVlc3Q6IHN0cmluZyk6IGFueSB8IHVuZGVmaW5lZCB7XG4gICAgY29uc3QgY2ZnT3B0aW9ucyA9IGdldE9wdGlvbnModGhpcyk7XG5cbiAgICBpZiAodGhpcy5jYWNoZWFibGUpIHRoaXMuY2FjaGVhYmxlKCk7XG5cbiAgICBjb25zdCByZW1haW5pbmdSZXF1ZXN0UmVxdWlyZVBhdGg6IHN0cmluZyA9IHN0cmluZ2lmeVJlcXVlc3QodGhpcywgYCEhJHtyZW1haW5pbmdSZXF1ZXN0fWApO1xuICAgIGNvbnN0IHJlZ2lzdHJ5UmVxdWlyZVBhdGg6IHN0cmluZyA9IHN0cmluZ2lmeVJlcXVlc3QodGhpcywgYCEke3BhdGguam9pbihfX2Rpcm5hbWUsICcuL3JlZ2lzdHJ5Jyl9YCk7XG4gICAgcmV0dXJuIGBcbiAgICAgICAgdmFyIGNvbnRlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHZhciByZWdpc3RlciA9IHJlcXVpcmUoJHtyZWdpc3RyeVJlcXVpcmVQYXRofSkucmVnaXN0ZXI7XG5cbiAgICAgICAgZnVuY3Rpb24gbG9hZCgpIHtcbiAgICAgICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKCR7cmVtYWluaW5nUmVxdWVzdFJlcXVpcmVQYXRofSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cy4ke0ltcG9ydElEfSA9IHtcbiAgICAgICAgICAgICAgICBtb2R1bGVJRDogY29udGVudFswXVswXSxcbiAgICAgICAgICAgICAgICBjc3M6ICR7Y2ZnT3B0aW9ucy5pbmxpbmUgPyAnY29udGVudFswXVsxXScgOiAnZmFsc2UnfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZWdpc3Rlcihjb250ZW50WzBdWzBdLCBjb250ZW50WzBdWzFdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICEhd2luZG93LmRvY3VtZW50KSB7XG4gICAgICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgke3JlbWFpbmluZ1JlcXVlc3RSZXF1aXJlUGF0aH0sIGxvYWQpXG4gICAgICAgIH1cblxuICAgICAgICBsb2FkKCk7XG4gICAgYDtcbn07XG5cbi8vIHJlcXVpcmVkIGV4cG9ydCBmb3JtYXQuIFdlYnBhY2sgd29uJ3QgYmUgZXhwZWN0aW5nIGEgZGVmYXVsdCBleHBvcnQuXG5tb2R1bGUuZXhwb3J0cyA9IGVudHJ5cG9pbnQ7XG4iXX0=