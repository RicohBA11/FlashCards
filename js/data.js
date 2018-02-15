function lesson(name, file, category, convertToYtping, linkToDictionary) {
	this.name=name;
	this.file=file;
	this.category = category;
	this.convertToYtping = convertToYtping;
	this.linkToDictionary = linkToDictionary;
}

var lessonFiles = new Array();
lessonFiles[0] = new lesson("Test", "test.txt", "TestCategory", false, true);
lessonFiles[lessonFiles.length] = new lesson("LESSON 1: 8-Oct-2013", "http://lateignition.net/cantonese/C4.L1.Dan.Jyutping.txt", "Cantonese 4", true, true);
lessonFiles[lessonFiles.length] = new lesson("LESSON 2: 15-Oct-2013", "http://lateignition.net/cantonese/C4.L2.Dan.Jyutping.txt", "Cantonese 4", true, true);
lessonFiles[lessonFiles.length] = new lesson("LESSON 3: 21-Oct-2013", "http://lateignition.net/cantonese/C4.L3.Dan.Jyutping.txt", "Cantonese 4", true, true);
lessonFiles[lessonFiles.length] = new lesson("LESSON 4: 19-Nov-2013", "http://lateignition.net/cantonese/C4.L4.Dan.Jyutping.txt", "Cantonese 4", true, true);
lessonFiles[lessonFiles.length] = new lesson("LESSON 8: 04-Dec-2013", "http://lateignition.net/cantonese/C4.L8.Dan.Jyutping.txt", "Cantonese 4", true, true);
lessonFiles[lessonFiles.length] = new lesson("Video Worksheet 1", "http://lateignition.net/cantonese/C4.L3.Video1.Dan.Jyutping.txt", "Cantonese 4", true, true);
lessonFiles[lessonFiles.length] = new lesson("Video Worksheet 2", "http://lateignition.net/cantonese/C4.L3.Video2.Dan.Jyutping.txt", "Cantonese 4", true, true);
lessonFiles[lessonFiles.length] = new lesson("LESSON 1: 28-Jan-2014", "http://lateignition.net/cantonese/C5.L1.txt", "Cantonese 5", true, true);
lessonFiles[lessonFiles.length] = new lesson("LESSON 1: 8-Oct-2013", "http://lateignition.net/cantonese/C4.L1.Dan.Jyutping.txt", "Cantonese 4 (Jyutping)", false, true);
lessonFiles[lessonFiles.length] = new lesson("LESSON 2: 15-Oct-2013", "http://lateignition.net/cantonese/C4.L2.Dan.Jyutping.txt", "Cantonese 4 (Jyutping)", false, true);
lessonFiles[lessonFiles.length] = new lesson("LESSON 3: 21-Oct-2013", "http://lateignition.net/cantonese/C4.L3.Dan.Jyutping.txt", "Cantonese 4 (Jyutping)", false, true);
lessonFiles[lessonFiles.length] = new lesson("LESSON 4: 19-Nov-2013", "http://lateignition.net/cantonese/C4.L4.Dan.Jyutping.txt", "Cantonese 4 (Jyutping)", false, true);
lessonFiles[lessonFiles.length] = new lesson("LESSON 8: 04-Dec-2013", "http://lateignition.net/cantonese/C4.L8.Dan.Jyutping.txt", "Cantonese 4 (Jyutping)", false, true);
lessonFiles[lessonFiles.length] = new lesson("Video Worksheet 1", "http://lateignition.net/cantonese/C4.L3.Video1.Dan.Jyutping.txt", "Cantonese 4 (Jyutping)", false, true);
lessonFiles[lessonFiles.length] = new lesson("Video Worksheet 2", "http://lateignition.net/cantonese/C4.L3.Video2.Dan.Jyutping.txt", "Cantonese 4 (Jyutping)", false, true);
lessonFiles[lessonFiles.length] = new lesson("LESSON 1: 28-Jan-2014", "http://lateignition.net/cantonese/C5.L1.txt", "Cantonese 5 (Jyutping)", false, true);
lessonFiles[lessonFiles.length] = new lesson("Review List 1: 29-Mar-2013", "http://lateignition.net/cantonese/C1.ReviewList1.txt", "Cantonese 1", true, true);
lessonFiles[lessonFiles.length] = new lesson("Review List 2: 3-May-2013", "http://lateignition.net/cantonese/C1.ReviewList2.txt", "Cantonese 1", true, true);
lessonFiles[lessonFiles.length] = new lesson("Food and drink", "http://lateignition.net/cantonese/CA.food.txt", "Cantonese.ca", true, true);
lessonFiles[lessonFiles.length] = new lesson("Review List 1: 29-Mar-2013", "http://lateignition.net/cantonese/C1.ReviewList1.txt", "Cantonese 1 (Jyutping)", false, true);
lessonFiles[lessonFiles.length] = new lesson("Review List 2: 3-May-2013", "http://lateignition.net/cantonese/C1.ReviewList2.txt", "Cantonese 1 (Jyutping)", false, true);
lessonFiles[lessonFiles.length] = new lesson("Food and drink", "http://lateignition.net/cantonese/CA.food.txt", "Cantonese.ca (Jyutping)", false, true);
lessonFiles[lessonFiles.length] = new lesson("Lesson 1: easy song", "Hebrew.1.txt", "Hebrew", false, false);
lessonFiles[lessonFiles.length] = new lesson("Lesson 2: basic vocabulary", "Hebrew.2.txt", "Hebrew", false, false);
lessonFiles[lessonFiles.length] = new lesson("Lesson 3: alphabet", "Hebrew.3.txt", "Hebrew", false, false);
lessonFiles[lessonFiles.length] = new lesson("Lesson 4: home, office", "Hebrew.4.txt", "Hebrew", false, false);
lessonFiles[lessonFiles.length] = new lesson("Lesson 5: modals", "Hebrew.5.txt", "Hebrew", false, false);
lessonFiles[lessonFiles.length] = new lesson("Lesson 6: consonants", "Hebrew.6.txt", "Hebrew", false, false);
lessonFiles[lessonFiles.length] = new lesson("Lesson 7: vowels", "Hebrew.7.txt", "Hebrew", false, false);
lessonFiles[lessonFiles.length] = new lesson("Lesson 1: setting meetings", "Polish.1.txt", "Polish", false, false);
lessonFiles[lessonFiles.length] = new lesson("Lesson 2: times", "Polish.2.txt", "Polish", false, false);
lessonFiles[lessonFiles.length] = new lesson("Lesson 3: conjunctions", "Polish.3.txt", "Polish", false, false);
lessonFiles[lessonFiles.length] = new lesson("Lesson 4: declensions", "Polish.4.txt", "Polish", false, false);
lessonFiles[lessonFiles.length] = new lesson("Lesson 5: pronouns, conjunctions", "Polish.5.txt", "Polish", false, false);
lessonFiles[lessonFiles.length] = new lesson("Lesson 6: adjectives, conjugation", "Polish.6.txt", "Polish", false, false);
lessonFiles[lessonFiles.length] = new lesson("Lesson 7: idioms", "Polish.7.txt", "Polish", false, false);
lessonFiles[lessonFiles.length] = new lesson("Lesson 8: verbs, flights", "Polish.8.txt", "Polish", false, false);
lessonFiles[lessonFiles.length] = new lesson("Lesson 9: Names", "Polish.9.txt", "Polish", false, false);
lessonFiles[lessonFiles.length] = new lesson("Lesson 1: ser, hablar", "Spanish.1.txt", "Spanish", false, false);
lessonFiles[lessonFiles.length] = new lesson("Lesson 8: letter names", "Hebrew.8.txt", "Hebrew", false, false);
lessonFiles[lessonFiles.length] = new lesson("LESSON 2: 4-Feb-2014", "http://lateignition.net/cantonese/C5.L2.txt", "Cantonese 5", true, true);
lessonFiles[lessonFiles.length] = new lesson("LESSON 2: 4-Feb-2014", "http://lateignition.net/cantonese/C5.L2.txt", "Cantonese 5 (Jyutping)", false, true);
lessonFiles[lessonFiles.length] = new lesson("LESSON 2: class vocabulary", "http://lateignition.net/cantonese/C5.L2.class.txt", "Cantonese 5 (Jyutping)", false, true);
lessonFiles[lessonFiles.length] = new lesson("LESSON 2: class vocabulary", "http://lateignition.net/cantonese/C5.L2.class.txt", "Cantonese 5", true, true);
lessonFiles[lessonFiles.length] = new lesson("LESSON 3: 18-Feb-2014", "http://lateignition.net/cantonese/C5.L3.txt", "Cantonese 5 (Jyutping)", false, true);
lessonFiles[lessonFiles.length] = new lesson("LESSON 3: 18-Feb-2014", "http://lateignition.net/cantonese/C5.L3.txt", "Cantonese 5", true, true);
lessonFiles[lessonFiles.length] = new lesson("LESSON 4: 4-Mar-2014", "http://lateignition.net/cantonese/C5.L4.txt", "Cantonese 5 (Jyutping)", false, true);
lessonFiles[lessonFiles.length] = new lesson("LESSON 4: 4-Mar-2014", "http://lateignition.net/cantonese/C5.L4.txt", "Cantonese 5", true, true);
lessonFiles[lessonFiles.length] = new lesson("LESSON 5: 11-Mar-2014 Video", "http://lateignition.net/cantonese/C5.L5.Video3.txt", "Cantonese 5", true, true);
lessonFiles[lessonFiles.length] = new lesson("LESSON 5: 11-Mar-2014 class", "http://lateignition.net/cantonese/C5.L5.class.txt", "Cantonese 5", true, true);
lessonFiles[lessonFiles.length] = new lesson("LESSON 5: 11-Mar-2014 Video", "http://lateignition.net/cantonese/C5.L5.Video3.txt", "Cantonese 5 (Jyutping)", false, true);
lessonFiles[lessonFiles.length] = new lesson("LESSON 5: 11-Mar-2014 class", "http://lateignition.net/cantonese/C5.L5.class.txt", "Cantonese 5 (Jyutping)", false, true);
lessonFiles[lessonFiles.length] = new lesson("LESSON 6: 18-Mar-2014", "http://lateignition.net/cantonese/C5.L6.txt", "Cantonese 5 (Jyutping)", false, true);
lessonFiles[lessonFiles.length] = new lesson("LESSON 6: 18-Mar-2014 colors", "http://lateignition.net/cantonese/C5.L6.Colors.txt", "Cantonese 5 (Jyutping)", false, true);
lessonFiles[lessonFiles.length] = new lesson("LESSON 6: 18-Mar-2014", "http://lateignition.net/cantonese/C5.L6.txt", "Cantonese 5", true, true);
lessonFiles[lessonFiles.length] = new lesson("LESSON 6: 18-Mar-2014 colors", "http://lateignition.net/cantonese/C5.L6.Colors.txt", "Cantonese 5", true, true);
lessonFiles[lessonFiles.length] = new lesson("LESSON 1: 12-May-2014", "Mandarin.1n.txt", "Mandarin", false, false);
lessonFiles[lessonFiles.length] = new lesson("LESSON 1 (pinyin): 12-May-2014", "Mandarin.1.txt", "Mandarin", false, false);
lessonFiles[lessonFiles.length] = new lesson("LESSON 1.2: 19-May-2014", "Mandarin.1.2n.txt", "Mandarin", false, false);
lessonFiles[lessonFiles.length] = new lesson("LESSON 2.1: 19-May-2014", "Mandarin.2n.txt", "Mandarin", false, false);
lessonFiles[lessonFiles.length] = new lesson("LESSON 2.1: 25-May-2014", "Mandarin.2.1.txt", "Mandarin", false, false);
lessonFiles[lessonFiles.length] = new lesson("LESSON 2.2: 25-May-2014", "Mandarin.2.2.txt", "Mandarin", false, false);
lessonFiles[lessonFiles.length] = new lesson("LESSON 3.1: 03-Jul-2014", "Mandarin.3.1.txt", "Mandarin", false, false);
lessonFiles[lessonFiles.length] = new lesson("LESSON 0: 7-Jul-2014 big list", "http://lateignition.net/cantonese/Cantonese.all.txt", "Cantonese 6 (Jyutping)", false, true);
lessonFiles[lessonFiles.length] = new lesson("LESSON 3.2: 10-Jul-2014", "Mandarin.3.2.txt", "Mandarin", false, false);
lessonFiles[lessonFiles.length] = new lesson("LESSON 1: 8-Jul-2014", "http://lateignition.net/cantonese/C6.L1.txt", "Cantonese 6 (Jyutping)", false, true);
lessonFiles[lessonFiles.length] = new lesson("LESSON 1: 8-Jul-2014 Video 4", "http://lateignition.net/cantonese/C6.L1.Video4.txt", "Cantonese 6 (Jyutping)", false, true);
lessonFiles[lessonFiles.length] = new lesson("LESSON 2: 15-Jul-2014", "http://lateignition.net/cantonese/C6.L2.txt", "Cantonese 6 (Jyutping)", false, true);
lessonFiles[lessonFiles.length] = new lesson("LESSON 4.1: 17-Jul-2014", "Mandarin.4.1.txt", "Mandarin", false, false);
lessonFiles[lessonFiles.length] = new lesson("Test", "test.txt", "TestCategory", false, false);

function populateLessons() {
	var output="<option value=\"0\">Select lesson...</option>\n";
	var groups = [];
	var query = window.location.pathname;
	if (query.search("cantonese")>=0) {
		groups = ["Cantonese 6 (Jyutping)", "Cantonese 5 (Jyutping)", "Cantonese 4 (Jyutping)", "Cantonese 1 (Jyutping)", "Cantonese.ca (Jyutping)", "Cantonese 5", "Cantonese 4", "Cantonese 1", "Cantonese.ca"];
	}
	else if (query.search("hebrew")>=0) {
		groups = [ "Hebrew"];
	}
	else if (query.search("mandarin")>=0) {
		groups = [ "Mandarin"];
	}
	else if (query.search("polish")>=0) {
		groups = [ "Polish"];
	}
	else {
		groups = ["Cantonese 5", "Cantonese 4", "Cantonese 1", "Cantonese.ca", "Cantonese 5 (Jyutping)", "Cantonese 4 (Jyutping)", "Cantonese 1 (Jyutping)", "Cantonese.ca (Jyutping)", "Hebrew", "Polish", "Spanish", "Mandarin"];
	}
	var i;
	for (i=0; i<groups.length; i++) {
		output=output+"<optgroup label=\""+groups[i]+"\">\n";
		var j;
		for (j=0; j<lessonFiles.length; j++) {
			curLesson=lessonFiles[j];
			if (curLesson.category == groups[i]) {
				output=output+"<option value=\""+j+"\">"+curLesson.name+"</option>\n";
			}
		}
		output=output+"</optgroup>";
	}
	$("#lesson")[0].innerHTML=output;
}

var presentYtping = false;
var linkToDictionary = true;
