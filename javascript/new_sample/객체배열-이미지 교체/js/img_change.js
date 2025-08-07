$(document).ready(function () {
	var characters = [
		{
			name: "Link",
			information:
				"They are chosen by the Golden Goddesses to protect the land from evil whenever deemed necessary 인성 개빻은놈.",
			imgsrc: "char01_x2.png",
			link: "./sub1_1.html",
		},
		{
			name: "Mike Wazowski",
			information:
				"Sulley`s scare assistant, best friend, and roommate doesn`t want any interruptions in his life—especially in his relationships.넌 하는게 뭐야 ",
			imgsrc: "char02_x2.png",
			link: "./sub1_2.html",
		},
		{
			name: "Boo",
			information:
				"Boo has a vocabulary of about three words, but that doesn`t stop this curious human girl from stealing Sulley`s heart and overcoming her fear of Randall.",
			imgsrc: "char03_x2.png",
			link: "./sub1_3.html",
		},
		{
			name: "Randall Boggs",
			information:
				"Able to scare even his co-workers with his chameleon abilities, Randall is one of the most wicked monsters in Monstropolis. ",
			imgsrc: "char04_x2.png",
			link: "./sub1_4.html",
		},
		{
			name: "Henry J",
			information:
				"Monsters, Inc. has been in the Waternoose family for generations, and Henry J. Waternoose III will do anything to beat the scream shortage and make his company profitable again.",
			imgsrc: "char05_x2.png",
			link: "./sub1_5.html",
		},
		{
			name: "Celia",
			information:
				"The factory`s one-eyed, snake-haired receptionist must put her birthday celebration on hold as she gets caught in the middle of Sulley and Mike`s crazy predicament. Luckily.",
			imgsrc: "char06_x2.png",
			link: "./sub1_6.html",
		},
	];

	$(".characters .charbox img")
		.attr("src", characters.imgsrc)
		.hide()
		.fadeIn("fast");
	$(".gallery-thumbs .title").html(characters.name);
	$(".gallery-thumbs .main_t").html(characters.information);
	$(this).css("filter", "grayscale(0)");
	$(".characters .gallery-thumbs .more").attr("hfer", characters.link);

	$(".characters .gallery-thumbs ul a").click(function (e) {
		e.preventDefault();

		var ind = $(this).index(".characters .gallery-thumbs ul a");

		$(".characters .charbox img").attr(
			"src",
			"./images/char0" + (ind + 1) + "_x2.png"
		);

		$(".gallery-thumbs .title").html(characters[ind].name);
		$(".gallery-thumbs .main_t").html(characters[ind].information);
		$(".characters .gallery-thumbs .more").attr("hfer", characters[ind].link);

		$(".characters .gallery-thumbs ul li a").css("filter", "grayscale(100%)");
		$(this).css("filter", "grayscale(0)");
	});
});
