
let nameInput;
let ageInput;
let majorInput;
let whereInput;
let hobbyInput;
let SuperpowerChoice;
let colorSelect;

function setup() {
  createCanvas(1200, 1000);

  //text boxes//
  nameInput = createInput();
  nameInput.position(25, 140);

  ageInput = createInput();
  ageInput.position(25, 200);

  majorInput = createInput();
  majorInput.position(25, 260);

  whereInput = createInput();
  whereInput.position(25, 320);

  hobbyInput = createInput();
  hobbyInput.position(25, 380);


  // multiple choice//
  SuperpowerChoice = createRadio();
  textFont('Funnel Sans')
  SuperpowerChoice.position(25, 460);
  SuperpowerChoice.option('Flying', 'Flying');
  SuperpowerChoice.option('Invisibility', 'Invisibility');
  SuperpowerChoice.option('Super Strength', 'Super Strength');
  SuperpowerChoice.option('Time Travel', 'Time Travel');

SuperpowerChoice.style ('font-family','Funnel Sans');


  // choices for colorselect.
  colorSelect = createSelect();
  colorSelect.position(25, 550);
  colorSelect.option('Orange', '#FFD498');
  colorSelect.option('Pink', '#EFB2E7');
  colorSelect.option('Blue', '#CAD6FD');
  colorSelect.option('Yellow', '#FFEFBD');

colorSelect.style('font-family', 'Funnel Sans');
colorSelect.style('font-size', '15px');
  
}



function draw() {
  describe(
    'A form with "Welcome to Your Profile Card!" for a header, a text labels with questions like "What is your name?" and what is your major, and a set of radio buttons with the label "Pick your Superpower", with the options of "Flying," "Invisibility,", "Super Strength" or "Time Travel." The text submitted through the input appears in the profile card. The radio button selection changes the profile card background color.'
  );

  background('#F0EBCD');
  // header the page//
  textFont('Bungee Shade')
  textSize(35);
  text('Welcome to Your Profile Card!', 25, 50);

//header for dropdown//
textFont('Funnel Sans')
  textSize(18);
  text('Pick the color for your profile card!', 25, 530);



  //questions//
  textFont('Funnel Sans')
  textSize(18);
  text(`What is your name?`, 25, 125);
  text(`How old are you?`, 25, 185);
  text(`What is your major?`, 25, 245);
  text(`Where are you from? `, 25, 310);
  text(`What is one of your hobbies? `, 25, 365);
  text('Choose Your Superpower:', 25, 440);



  //profile card//
  let username = nameInput.value();
  let age = ageInput.value();
  let major = majorInput.value();
  let where = whereInput.value();
  let hobby = hobbyInput.value();
  let superpower = SuperpowerChoice.value();
  let cardColor = colorSelect.value() || '#FFFFFF';



  //card background//
  fill(cardColor);
  noStroke();
  rect(500, 90, 460, 350, 20);

  //card text//
  fill(50);
  textFont('Bungee Shade')
  textSize(22);
  text('Profile Card', 520, 160);



//text inside card//
 textFont('Funnel Sans')
  textSize(16);
  text(`Name: ${username}`, 520, 200);
  text(`Age: ${age}`, 520, 230);
  text(`Major: ${major}`, 520, 260);
  text(`Where: ${where}`, 520, 290);
  text(`Hobby: ${hobby}`, 520, 320);
  text(`Superpower: ${superpower}`, 520, 350);
}












