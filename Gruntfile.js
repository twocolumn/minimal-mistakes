const fontawesomeSubset = require('fontawesome-subset');

module.exports = function (grunt) {
    grunt.registerTask('export-icons', function () {
        fontawesomeSubset({
                solid: ['calendar-alt', 'rss', 'cat', 'tags', 'language', 'tools', 'book', 'project-diagram'],
                regular: ['clock'],
                brands: ['github', 'linkedin', 'facebook', 'instagram', 'twitter', 'tumblr', 'reddit', 'dev', 'fort-awesome']
            },
            'assets/webfonts'
        );
    });
};

