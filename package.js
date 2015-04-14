Package.describe({
  name: 'dhtmlx:gantt',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'dhtmlxGantt is an Gantt chart that helps you visualize a project schedule in a nice-looking chart.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/DHTMLX/meteor-gantt.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
    api.addFiles(
        [
            "dhtmlx_gantt/codebase/dhtmlxgantt.js",
            "dhtmlx_gantt/codebase/dhtmlxgantt.css"
        ],
        "client"
    );
    api.export("gantt", "client");
});
