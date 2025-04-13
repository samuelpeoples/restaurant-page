export default function () {
	const contentWrapper = document.getElementById("content");
	const background = document.createElement("div");
	background.id = "background-image";
	contentWrapper.appendChild(background);

	const contentContainer = document.createElement("div");
	contentContainer.className = "content-container";
	contentWrapper.appendChild(contentContainer);

	const contentHead = document.createElement("div");
	contentHead.id = "content-head";
	contentContainer.appendChild(contentHead);

	const headText = document.createElement("h2");
	headText.textContent = "Dwarven Cullinary at its finest...";
	contentHead.appendChild(headText);

	contentContainer.appendChild(document.createElement("hr"));

	const eventWrapper = document.createElement("div");
	eventWrapper.id = "event-wrapper";
	contentContainer.appendChild(eventWrapper);

	const eventHeadText = document.createElement("h3");
	eventHeadText.textContent = "Dwarven Cullinary at its finest...";
	eventWrapper.appendChild(eventHeadText);

	const eventContainer = document.createElement("div");
	eventContainer.id = "event-container";
	eventWrapper.appendChild(eventContainer);

	eventContainer.appendChild(
		makeEvent(
			"The Green Drakes Hoard",
			`A grand dwarven feast held in honor of cleverness, cunning, and the thrill of the
		hunt—for, featuring an opulent spread of jewel-toned dishes, emerald-hued ales, and
		glittering decorations. <br>Guests are invited to share tales of wit and compete in games of
		riddles and strategy.`,
			"Ingot 24th"
		)
	);
	eventContainer.appendChild(
		makeEvent(
			"The Elfish Feast",
			`A fine feast inspired by the elfs of Glinterfell, with lucious roast yam and crackling
			pork, with a bevy of vegetables garnished with grand herbs and spices.`,
			"Magentite 5th"
		)
	);
	eventContainer.appendChild(
		makeEvent(
			"Yuletide and All",
			`A classic winter festival filled with warmth, song, and rich comfort foods.
			Gather in our halls lit by ever-burning braziers, share roast meats, spiced meads,
			and enjoy tales of winters past.`,
			"Alloyous 16th"
		)
	);

	const locationWrapper = document.createElement("div");
	locationWrapper.id = "location-wrapper";
	contentContainer.appendChild(locationWrapper);

	const locationHeadText = document.createElement("h3");
	locationHeadText.textContent = "Our Mines";
	locationWrapper.appendChild(locationHeadText);

	const locationContainer = document.createElement("div");
	locationContainer.id = "location-container";
	locationWrapper.appendChild(locationContainer);

	locationContainer.appendChild(
		makeLocation(
			"Heffleheim",
			`Deep in the depths of Heffleheim, with a central waterfall feature delivering a gorgeous
			sauna like experieince, this luxury location is a grand location for all your feasting
			needs.`,
			"78 Emerald Grotto, Heffleheim"
		)
	);
	locationContainer.appendChild(
		makeLocation(
			"Gragan'uur",
			`At the peak of old Gragan an ancient dragon temple lays, showcasing a vista fit for the
								gods. Sink your teeth into flank worthy of the oldest and greatest creatures known, and
								feast with the great lords of old.`,
			"Flight 18, 9 Lords Hall, Gragan"
		)
	);
	locationContainer.appendChild(
		makeLocation(
			"Alasiir",
			`In the obsidian mines of Lord Spaldar lays the original Bear Klaw, the first and
								grandest with shimering gold halls, obsidian glass furnishings and flowing magma
								streams. To those who enjoy a classic dwarven meal and tale there is no better hall than
								this.`,
			"Bear Klaw, Gold District, Alasiir"
		)
	);
}

function makeEvent(name, str, date) {
	const event = document.createElement("div");
	event.className = "event";

	const eventName = document.createElement("h4");
	eventName.innerHTML = name;
	event.appendChild(eventName);

	const eventText = document.createElement("p");
	eventText.className = "event-text";
	eventText.innerHTML = str;
	event.appendChild(eventText);

	const eventDate = document.createElement("p");
	eventDate.className = "event-date";
	eventDate.innerHTML = date;
	event.appendChild(eventDate);

	return event;
}

function makeLocation(name, str, address) {
	const location = document.createElement("div");
	location.className = "location";

	const locationName = document.createElement("h4");
	locationName.innerHTML = name;
	location.appendChild(locationName);

	const locationText = document.createElement("p");
	locationText.className = "location-text";
	locationText.innerHTML = str;
	location.appendChild(locationText);

	const addressContainer = document.createElement("div");
	addressContainer.className = "address-container";
	location.appendChild(addressContainer);

	const locationAddress = document.createElement("span");
	locationAddress.className = "address";
	locationAddress.innerHTML = address;
	addressContainer.appendChild(locationAddress);

	const locationLinkContainer = document.createElement("span");
	addressContainer.appendChild(locationLinkContainer);
	const locationLink = document.createElement("a");
	locationLink.href = "";
	locationLink.textContent = "Find it here";
	locationLink.className = "address-link"
	locationLinkContainer.appendChild(locationLink);

	return location;
}
