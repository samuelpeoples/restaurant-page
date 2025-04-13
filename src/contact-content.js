export default function () {
	const contentWrapper = document.getElementById("content");
	contentWrapper.innerHTML = "";
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
	headText.textContent = "More about us!";
	contentHead.appendChild(headText);

	contentContainer.appendChild(document.createElement("hr"));

	const infoWrapper = document.createElement("div");
	infoWrapper.id = "info-wrapper";
	contentContainer.appendChild(infoWrapper);

	const aboutHeadText = document.createElement("h3");
	aboutHeadText.textContent = "Our Clan";
	infoWrapper.appendChild(aboutHeadText);

	const aboutWrapper = document.createElement("div");
	aboutWrapper.id = "about-wrapper";
	infoWrapper.appendChild(aboutWrapper);

	const aboutContainer = document.createElement("div");
	aboutContainer.id = "about-container";
	aboutWrapper.appendChild(aboutContainer);

	generateMemberCards(aboutContainer);

	const contactWrapper = document.createElement("div");
	contactWrapper.id = "contact-wrapper";
	infoWrapper.appendChild(contactWrapper);

	const contactHeadText = document.createElement("h3");
	contactHeadText.textContent = "Send us a messenger!";
	contactWrapper.appendChild(contactHeadText);

	const contactContainer = document.createElement("div");
	contactContainer.id = "contact-container";
	contactWrapper.appendChild(contactContainer);

	const contactForm = document.createElement("form");
	contactForm.id = "contact-form";
	contactForm.action = "";
	contactForm.method = "post";
	contactContainer.appendChild(contactForm);

	const fieldForms = document.createElement("div");
	fieldForms.id = "field-forms";
	contactForm.appendChild(fieldForms);

	const fieldBox1 = document.createElement("div");
	fieldForms.appendChild(fieldBox1);

	const emailLabel = document.createElement('label');
	emailLabel.for = "email";
	emailLabel.textContent = "Your Mage Network:";
	fieldBox1.appendChild(emailLabel);
	const emailField = document.createElement('input');
	emailField.name = "email";
	emailField.type = "text";
	emailField.placeholder = "example@dwarfnet.com";
	emailField.required = true;
	fieldBox1.appendChild(emailField);

	const fieldBox2 = document.createElement("div");
	fieldForms.appendChild(fieldBox2);

	const subjectLabel = document.createElement('label');
	subjectLabel.for = "subject";
	subjectLabel.textContent = "Subject:";
	fieldBox2.appendChild(subjectLabel);
	const subjectField = document.createElement('input');
	subjectField.name = "subject";
	subjectField.type = "text";
	subjectField.placeholder = "Greetings...";
	subjectField.required = true;
	fieldBox2.appendChild(subjectField);

	const fieldBox3 = document.createElement("div");
	fieldForms.appendChild(fieldBox3);

	const locationLabel = document.createElement('label');
	locationLabel.for = "email";
	locationLabel.textContent = "Location:";
	fieldBox3.appendChild(locationLabel);

	const locationField = document.createElement('select');
	locationField.name = "location";
	locationField.required = true;
	fieldBox3.appendChild(locationField);

	const locationOpt1 = document.createElement('option');
	locationOpt1.value = `alasiir`;
	locationOpt1.textContent = `Alasiir (HO)`;
	locationOpt1.selected = true;
	locationField.appendChild(locationOpt1);

	const locationOpt2 = document.createElement('option');
	locationOpt2.value = `gragan`;
	locationOpt2.textContent = `Gragan'uur`;
	locationField.appendChild(locationOpt2);

	const locationOpt3 = document.createElement('option');
	locationOpt3.value = `heffleheim`;
	locationOpt3.textContent = `Heffleheim`;
	locationField.appendChild(locationOpt3);

	const submitButtonContainer = document.createElement('div');
	fieldForms.appendChild(submitButtonContainer);

	const submitButton = document.createElement('input');
	submitButton.type = 'submit';
	submitButton.value = 'Send';
	submitButton.addEventListener('click', (e) => {
		e.preventDefault()
	});
	submitButtonContainer.appendChild(submitButton);

	const textForms = document.createElement("div");
	textForms.id = "text-forms";
	contactForm.appendChild(textForms);

	const contactText = document.createElement('textarea');
	contactText.id = `subject`;
	contactText.name = `subject`;
	contactText.placeholder = `Your message to us...`;
	textForms.appendChild(contactText);
}

function generateMemberCards(aboutContainer) {
	aboutContainer.appendChild(
		makeMemberCard(
			`Thrain Ironbelly`,
			`https://i.pinimg.com/474x/9d/4a/f5/9d4af5cc016e2f98a88757234b789d45.jpg`,
			`Picture of Thrain Ironbelly (credit unknown)`,
			`Founder & Chief Executive Officer (CEO)`,
			`A former miner turned culinary visionary, Thrain Ironbelly founded Bear Klaw after
		perfecting his grandmother’s legendary stone stew recipe in a lava-vent kitchen.
		Known for his booming voice and bigger heart, Thrain believes food should be as bold
		as a warhammer and as comforting as a warm hearth. His leadership style is
		old-school: loyalty, honesty, and lots of mead-fueled meetings.`,
			`"If your food don’t make your beard sweat, it ain’t worth the plate it’s served
		on!"`
		)
	);

	aboutContainer.appendChild(
		makeMemberCard(
			`Bera Copperkettle`,
			`https://cdn.dribbble.com/userupload/15293961/file/original-6fc8fa13c1cb9a431a07c2dcdc9e0efe.jpg?resize=400x0`,
			`Chief Culinary Officer (CCO)`,
			`Founder & Chief Executive Officer (CEO)`,
			`Bera is a culinary prodigy whose spice rack is the stuff of legend. Raised in the
									Emberforge Mountains, she apprenticed under flame druids before joining Bear Klaw to
									revamp its menu. Her signature "Smoked Basilisk Ribs" turned the restaurant from a
									tavern curiosity into a dwarven dining empire. Don’t challenge her on mushroom
									pairings—you’ll lose.`,
			`"Good food tells a tale. Great food starts a saga."`
		)
	);

	aboutContainer.appendChild(
		makeMemberCard(
			`Durik Stonegold`,
			`https://cdn.masto.host/dicecamp/accounts/avatars/109/806/327/161/936/624/original/1d3bc8e816f58e67.png`,
			`Picture of Durik Stonegold (credit @jmc@dice.camp)`,
			`Chief Financial Officer (CFO)`,
			`Once a gem trader, Durik saw more profit in roasted cave boar than raw diamonds.
									He’s the numbers dwarf behind Bear Klaw’s massive expansion. Calculating but fair,
									Durik always wears a gold-inlaid abacus ring and can recite profit margins faster
									than you can say “ale turnover.” His motto? “If it doesn’t clink, rethink.”`,
			`"Coins come and go, flavor sticks to the ribs."`
		)
	);

	aboutContainer.appendChild(
		makeMemberCard(
			`Frunda Firevoice`,
			`https://snipstock.com/wp-content/uploads/2024/09/0_0-31216-400x400.webp`,
			`Picture of Frunda Firevoice (credit Portia Primsy)`,
			`Head of Marketing & Public Relations`,
			`Frunda used to sing battle songs in the Deephall Choirs, but now he chants slogans
									that keep Bear Klaw in every dwarf’s mouth. He’s behind the iconic catchphrase:
									“Grub so good, you’ll grow a second beard!” Frunda is fiercely passionate about
									brand loyalty and occasionally hosts eating contests while reciting dwarven epics.`,
			`"Bear Klaw, Grub So Good You’ll Roar for More!"`
		)
	);

	aboutContainer.appendChild(
		makeMemberCard(
			`Grumbek Hammerdraft`,
			`https://pbs.twimg.com/profile_images/1456850122587791361/oDFT7vrZ_400x400.jpg`,
			`Picture of Grumbek Hammerdraft (credit @danpurnm)`,
			`Chief Operations Officer (COO)`,
			`A logistics genius who once organized the evacuation of a collapsing salt mine and
									catered it, Grumbek runs day-to-day ops like a well-oiled crossbow. From supply
									chains that span three mountain ranges to ensuring every Bear Klaw location has the
									exact right oven temperature, he’s the backbone of the business. Just don’t move his
									tools.`,
			`"Hot oven. Cold ale. No delays."`
		)
	);
}

function makeMemberCard(name, imgLink, alt, pos, bio, quote) {
	const memberCard = document.createElement("div");
	memberCard.className = "member-card";

	const memberName = document.createElement("h4");
	memberName.innerHTML = name;
	memberCard.appendChild(memberName);

	const memberImage = document.createElement("img");
	memberImage.src = imgLink;
	memberImage.className = "member-img";
	memberImage.alt = alt;
	memberCard.appendChild(memberImage);

	const memberPosition = document.createElement("span");
	memberPosition.className = "member-info";
	memberPosition.innerHTML = pos;
	memberCard.appendChild(memberPosition);

	const memberBio = document.createElement("p");
	memberBio.className = "member-text";
	memberBio.innerHTML = bio;
	memberCard.appendChild(memberBio);

	const memberQuote = document.createElement("i");
	memberQuote.innerHTML = quote;
	memberCard.appendChild(memberQuote);

	return memberCard;
}
