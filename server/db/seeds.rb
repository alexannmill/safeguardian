# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
Shelter.create!([{"facility":"nunc donec","lat":48.4178,"long":-123.3449,"street_number":"2","street_address":"Sundown","phone":"(868) 7688502","meals":true,"carts":false,"pets":false},
  {"facility":"nec","lat":48.4327,"long":-123.3534,"street_number":"80","street_address":"Grayhawk","phone":"(368) 2598203","meals":true,"carts":true,"pets":true},
  {"facility":"orci","lat":48.4242,"long":-123.3587,"street_number":"0","street_address":"Mesta","phone":"(451) 6244341","meals":false,"carts":false,"pets":true},
  {"facility":"justo","lat":48.4263,"long":-123.3379,"street_number":"0","street_address":"Lerdahl","phone":"(138) 3171278","meals":true,"carts":true,"pets":true},
  {"facility":"eget nunc","lat":48.419,"long":-123.3612,"street_number":"41","street_address":"Warner","phone":"(350) 4237998","meals":true,"carts":false,"pets":true},
  {"facility":"justo","lat":48.4299,"long":-123.3347,"street_number":"9819","street_address":"Hazelcrest","phone":"(420) 3373578","meals":false,"carts":false,"pets":false},
  {"facility":"cras non","lat":48.422,"long":-123.3616,"street_number":"92","street_address":"5th","phone":"(530) 2765213","meals":false,"carts":false,"pets":true},
  {"facility":"nonummymaecenas","lat":48.4185,"long":-123.351,"street_number":"18","street_address":"Bobwhite","phone":"(211) 2659683","meals":true,"carts":false,"pets":true},
  {"facility":"augue","lat":48.4318,"long":-123.3407,"street_number":"6655","street_address":"Vahlen","phone":"(878) 4288362","meals":true,"carts":false,"pets":true},
  {"facility":"eleifend luctus","lat":48.427,"long":-123.3568,"street_number":"693","street_address":"Ridgeview","phone":"(569) 1010511","meals":true,"carts":false,"pets":true},
  {"facility":"elit ac","lat":48.4223,"long":-123.3404,"street_number":"956","street_address":"Heath","phone":"(735) 6610777","meals":false,"carts":false,"pets":true},
  {"facility":"vestibulum aliquet","lat":48.4188,"long":-123.3561,"street_number":"93338","street_address":"Charing Cross","phone":"(541) 7062333","meals":true,"carts":true,"pets":false},
  {"facility":"nulla pede","lat":48.4286,"long":-123.3365,"street_number":"6","street_address":"Caliangt","phone":"(735) 6310471","meals":true,"carts":false,"pets":true},
  {"facility":"sapien quis","lat":48.4243,"long":-123.343,"street_number":"00","street_address":"Schiller","phone":"(216) 8075678","meals":false,"carts":true,"pets":false},
  {"facility":"sapien","lat":48.438,"long":-123.3517,"street_number":"71874","street_address":"American","phone":"(806) 3943971","meals":true,"carts":false,"pets":false}])

  p "Created #{Shelter.count} shelters"