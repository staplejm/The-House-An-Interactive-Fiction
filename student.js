let bedroom = new Room('bedroom', 'It is a bedroom.');
let dresser = new Item('dresser', 'It is a dresser.');
let garage = new Room('garage', 'It is a garage.');

bedroom.addItem(dresser);
bedroom.addItem(garage);

player.location = bedroom;

player.location.enter();
