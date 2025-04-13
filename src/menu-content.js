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
	headText.textContent = "Strong ale, stronger meals!";
	contentHead.appendChild(headText);

	contentContainer.appendChild(document.createElement("hr"));

	const menuWrapper = document.createElement("div");
	menuWrapper.id = "menu-wrapper";
	contentContainer.appendChild(menuWrapper);

	const foodWrapper = document.createElement("div");
	foodWrapper.id = "food-wrapper";
	menuWrapper.appendChild(foodWrapper);

	const favouritesHeadtext = document.createElement("h3");
	favouritesHeadtext.textContent = "The Favorites";
	foodWrapper.appendChild(favouritesHeadtext);

	const favouritesMenuContainer = document.createElement("div");
	favouritesMenuContainer.className = "menu-item-container";
	foodWrapper.appendChild(favouritesMenuContainer);

	favouritesMenuContainer.appendChild(
		makeMenuItem(
			`Ironhide Boar Ribs`,
			`Slow-roasted ribs from mountain boar, glazed
									with a smoky stonefruit BBQ sauce. Served
									with charred root veggies and blackened
									bread crusts.`,
			48
		)
	);

	favouritesMenuContainer.appendChild(
		makeMenuItem(
			`Klaw-Fried Cave Chicken`,
			`Crispy breaded deep-cave fowl, seasoned with
									spicy rock pepper and served atop a heap of
									ale-battered taters.`,
			43
		)
	);

	favouritesMenuContainer.appendChild(
		makeMenuItem(
			`Molten Cheese & Mushroom Pie`,
			`A thick-crust pie stuffed with fire-aged
									cheeses and deep-earth mushrooms, baked in a
									stone oven until bubbling hot.`,
			38
		)
	);

	const classicsHeadtext = document.createElement("h3");
	classicsHeadtext.textContent = "The Classics";
	foodWrapper.appendChild(classicsHeadtext);

	const classicsMenuContainer = document.createElement("div");
	classicsMenuContainer.className = "menu-item-container";
	foodWrapper.appendChild(classicsMenuContainer);

	classicsMenuContainer.appendChild(
		makeMenuItem(
			`Emberstone Stew`,
			`A fiery mix of goat, smoked beetroot, and
			sulfur-carrots simmered in spiced broth for
			12 hours.`,
			35
		)
	);

	classicsMenuContainer.appendChild(
		makeMenuItem(
			`Miners’ Loaf`,
			`Dense, nutty grain bread stuffed with
									crumbled sausage, pickled onions, and
									mountain herbs. A meal in your hand.`,
			25
		)
	);

	classicsMenuContainer.appendChild(
		makeMenuItem(
			`Coal-Baked Trout`,
			`Whole-caught river trout wrapped in pine
									leaves and baked in hot coals. Finished with
									lemon-ale butter.`,
			45
		)
	);

	classicsMenuContainer.appendChild(
		makeMenuItem(
			`Ore-Cracked Meat Pie`,
			`Thick pastry filled with minced beef, veal,
									and charred onions, with a lava-crust top
									that flakes like shale.`,
			42
		)
	);

	classicsMenuContainer.appendChild(
		makeMenuItem(
			`Forge-Fired Roasted Roots`,
			`A medley of underground tubers roasted with
									boar fat and a dusting of smokewort.`,
			38
		)
	);

	classicsMenuContainer.appendChild(
		makeMenuItem(
			`Tunnel Ratatouille`,
			`A hearty vegetarian option—layered cave
									eggplant, sun-dried tomato, and iron-spice
									sauce.`,
			40
		)
	);

	const specialsHeadtext = document.createElement("h3");
	specialsHeadtext.textContent = "The Chef Specials";
	foodWrapper.appendChild(specialsHeadtext);

	const specialsMenuContainer = document.createElement("div");
	specialsMenuContainer.className = "menu-item-container";
	foodWrapper.appendChild(specialsMenuContainer);

	specialsMenuContainer.appendChild(
		makeMenuItem(
			`The King’s Anvil Platter`,
			`A feast fit for royalty: seared dragon flank
									steak (or beef, depending on supply),
									firecracker potatoes, and a molten gold
									gravy made with mead and bone marrow.`,
			55
		)
	);

	specialsMenuContainer.appendChild(
		makeMenuItem(
			`Ale-Braised Stone Lamb Shanks`,
			`Lamb slow-braised in black ale, served on a
									slab of warm granite with spiced turnip mash
									and stonefruit glaze.`,
			52
		)
	);

	specialsMenuContainer.appendChild(
		makeMenuItem(
			`Glowspice Gnocchi`,
			`Hand-rolled gnocchi with phosphorescent cave
									cheese sauce, toasted pine nuts, and a pinch
									of volcanic salt.`,
			57
		)
	);

	const extrasWrapper = document.createElement("div");
	extrasWrapper.id = "extras-wrapper";
	menuWrapper.appendChild(extrasWrapper);

	const drinkWrapper = document.createElement("div");
	drinkWrapper.id = "drink-wrapper";
	extrasWrapper.appendChild(drinkWrapper);

	const drinksHeadtext = document.createElement("h3");
	drinksHeadtext.textContent = "Liquid Gold";
	drinkWrapper.appendChild(drinksHeadtext);

	const drinkContainer = document.createElement("div");
	drinkContainer.className = "menu-item-container";
	drinkWrapper.append(drinkContainer);

	drinkContainer.appendChild(
		makeMenuItem(
			`Deep deep Ale`,
			`Malty, dark, and thick as molasses. Brewed in stone vats. Pairs with: Emberstone Stew, Ironhide Boar Ribs.`,
			12
		)
	);

	drinkContainer.appendChild(
		makeMenuItem(
			`Frostbeard Lager`,
			`Crisp and cold enough to cut through grease. Pairs with: Klaw-Fried Cave
										Chicken, Coal-Baked Trout.`,
			14
		)
	);

	drinkContainer.appendChild(
		makeMenuItem(
			`Molten Mead`,
			`Sweet honey mead with a ginger burn. Served warm. Pairs with: Molten Cheese &
										Mushroom Pie, Forge-Fired Roasted Roots.`,
			14
		)
	);

	drinkContainer.appendChild(
		makeMenuItem(
			`Stonethrower Stout`,
			`So strong it should come with a warning. Notes of coffee and burnt toffee. Pairs
										with: Ore-Cracked Meat Pie, Miners’ Loaf.`,
			15
		)
	);

	drinkContainer.appendChild(
		makeMenuItem(
			`Lavawine`,
			`A rare, spiced red fermented in obsidian bottles. Pairs with: Ale-Braised Stone
										Lamb Shanks, Glowspice Gnocchi.`,
			16
		)
	);

	drinkContainer.appendChild(
		makeMenuItem(
			`Black Powder Whiskey`,
			`Smoked with charroot and aged in thunder oak barrels. Pairs with: The King’s
										Anvil Platter. <strong>2-glass limit, by decree</strong>.`,
			18
		)
	);

	const desertWrapper = document.createElement("div");
	desertWrapper.id = "desert-wrapper";
	extrasWrapper.appendChild(desertWrapper);

	const desertHeadtext = document.createElement("h3");
	desertHeadtext.textContent = "Desserts from the Deep";
	desertWrapper.appendChild(desertHeadtext);

	const desertContainer = document.createElement("div");
	desertContainer.className = "menu-item-container";
	desertWrapper.append(desertContainer);

	desertContainer.appendChild(
		makeMenuItem(
			`Lavaflow Cake`,
			`Dark chocolate cake with molten chili-cocoa center. Served warm with a scoop of
										Stone Vanilla Ice (cold-churned in glacier caves).`,
			22
		)
	);

	desertContainer.appendChild(
		makeMenuItem(
			`Rock Candy Cluster`,
			`Crystallized sugar and nuts mined fresh from the Sweetstone Caverns. Comes with
										a small pick and helmet for full effect.`,
			18
		)
	);

	desertContainer.appendChild(
		makeMenuItem(
			`Gemfruit Tart`,
			`Buttery crust filled with preserved crystal berries and a drizzle of frost
										nectar. Tart, sweet, and sparkly.`,
			17
		)
	);

	desertContainer.appendChild(
		makeMenuItem(
			`Beardcream Brûlée`,
			`A silky ale-infused custard with a scorched sugar top. Served in a cast iron
										cup.`,
			22
		)
	);

	desertContainer.appendChild(
		makeMenuItem(
			`Forge Ember Cider Float`,
			`Spiced cider poured over fire-cooked apple ice cream, topped with cinnamon smoke
										and served with a spoon forged from pewter.`,
			18
		)
	);

}

function makeMenuItem(name, str, price) {
	const item = document.createElement("div");
	item.className = "menu-item";

	const itemName = document.createElement("h4");
	itemName.innerHTML = name;
	item.appendChild(itemName);

	const itemText = document.createElement("p");
	itemText.className = "menu-item-text";
	itemText.innerHTML = str;
	item.appendChild(itemText);

	const itemPrice = document.createElement("p");
	itemPrice.innerHTML = `${price}^`;
	item.appendChild(itemPrice);

	return item;
}
