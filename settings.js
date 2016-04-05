// Settings

var Sections = {
            "Social": [["http://feedly.com","feedly","feeds"],
                        ["http://facebook.com","Facebook","f"],
                        ["http://twitter.com","Twitter","t"],
                        ["http://youtube.com","Youtube", "y"],
                        ["http://flickr.com", "Flickr", "flickr"]],
            "Blogs":[["http://idrilfirebird.net","Own Blog","idi"],
                        ["http://zockworkorange.de","Zockwork"]],
            "Develop":[["http://github.com", 'Github'],
                        ["http://cb.vu/unixtoolbox.xhtml", "UnixToolbox"],
                        ["http://developers.apple.com", "Apple Dev"]]
    
};

var shortcuts = {};

(function() {
    for (section in Sections) {
        
        for (link in Sections[section]) {
            if (Sections[section][link][2]) {
                shortcuts[Sections[section][link][2]] = Sections[section][link][0];    
            }   
        }
        
    }
    return shortcuts;
})();

var Props = {Sections, shortcuts}
