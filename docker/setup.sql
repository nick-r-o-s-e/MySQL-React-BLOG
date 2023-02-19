CREATE DATABASE Blog;

USE Blog;

CREATE TABLE Posts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    author VARCHAR(255),
    content TEXT,
    image TEXT

);

CREATE TABLE Comments (
    id INT AUTO_INCREMENT,
    username VARCHAR(255),
    text VARCHAR(255),
    image TEXT,
    post_id INT,
    PRIMARY KEY(id),
    FOREIGN KEY(post_id) REFERENCES Posts(id)
    ON DELETE CASCADE

);

INSERT INTO Posts (title, author, content, image)
VALUES 
    ('New York City','author 1','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et accumsan lorem. Aliquam erat volutpat. Morbi pulvinar dapibus viverra. Cras vitae rutrum felis. Nunc feugiat ipsum a eleifend varius. Suspendisse potenti. Proin condimentum tellus vel enim porta, eget convallis tellus congue. Pellentesque dictum risus quis turpis scelerisque varius in laoreet orci. Curabitur egestas tellus vitae est lobortis, vitae pulvinar enim ornare. In quis massa vel libero venenatis volutpat. Nullam nec diam tellus. Sed aliquet odio vitae ipsum fermentum molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit tincidunt urna, id tempus purus mattis eget. Donec id ornare nibh, dapibus dapibus lorem.','http://127.0.0.1:3004/images/image-1676489655587.jpg'),
    ('Hawaii','author 2','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur condimentum dui, sit amet aliquet neque dignissim eget. Proin facilisis tellus nec dui molestie, convallis ultrices purus lobortis. Nullam tellus sem, volutpat quis magna sit amet, imperdiet sodales lorem. Mauris sodales, arcu et fermentum efficitur, diam ipsum scelerisque leo, vitae semper odio nisi id urna. Curabitur bibendum nunc tortor, nec scelerisque magna rhoncus semper. Suspendisse ultricies nibh iaculis dui hendrerit congue varius non ipsum. Sed suscipit, ipsum vel posuere luctus, justo ante bibendum erat, at faucibus dui diam sit amet eros. Praesent ac ullamcorper augue, ac scelerisque est. Quisque eleifend elementum eleifend. Quisque quis tempus ante. Aenean nec felis ex. Praesent varius velit nec ex pulvinar, eu pulvinar lacus blandit. Nulla tristique dictum odio, ut dignissim tellus varius in. Integer a neque convallis, faucibus ante id, tincidunt nisi. Sed eu sem nec odio egestas faucibus nec vel risus. Donec porta pharetra nulla ac maximus. Donec quam ipsum, commodo in molestie a, cursus quis ex. Proin ut mi ac augue vulputate ultricies sed sed felis. Fusce non rhoncus ex. Integer ultrices velit nec libero placerat ultricies. Fusce suscipit quam commodo, feugiat metus non, rutrum velit. Proin lobortis, metus in mattis sagittis, dolor nulla laoreet risus, sed sodales nunc nunc ut sem. Ut imperdiet velit eget turpis dictum, sit amet pharetra ex cursus. Quisque condimentum tortor vitae arcu tempor, quis bibendum velit molestie.','http://127.0.0.1:3004/images/image-1676489670813.jpg'),
    ('London','author 3','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nunc lectus, imperdiet eu congue sit amet, feugiat eget massa. Curabitur non consectetur nulla. Vivamus interdum justo eu libero lobortis, quis congue odio porttitor. Cras eget ultrices magna. Quisque blandit odio in ante gravida viverra. Integer vitae tortor non magna dapibus ornare vel sed urna. Cras et leo ut felis interdum congue. Suspendisse sed purus sapien. Praesent quis fermentum nunc. Nunc faucibus facilisis magna nec pulvinar. Phasellus ut tellus tortor. Aliquam blandit nibh eu est vestibulum ullamcorper. Fusce malesuada consectetur neque, vitae dapibus purus viverra rutrum. Nulla tristique metus ac tincidunt porta. In hac habitasse platea dictumst. Nam vulputate arcu nec risus scelerisque congue. Vestibulum eget fermentum ex, at pellentesque metus. Integer blandit elit sed mauris tincidunt aliquet. Fusce eu sapien odio. Duis tincidunt felis in ligula vulputate, nec gravida nibh mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi et ipsum vitae eros interdum imperdiet. Nam mattis vestibulum convallis. In rhoncus tempus orci ut luctus. Aliquam luctus ullamcorper lectus, at congue ante ullamcorper ac. Fusce vel mi sed turpis iaculis varius a vitae massa. Vivamus mauris libero, bibendum eget arcu at, vehicula posuere enim. Nunc efficitur ex vel orci egestas vulputate vitae vel nibh. Nunc viverra, erat et dapibus convallis, nunc libero viverra eros, nec viverra ante velit et urna. Proin varius ipsum felis, id fringilla lorem sodales eu. Vestibulum a ex a nunc facilisis hendrerit. Curabitur et dictum lacus, sed congue urna. Quisque id nibh a eros mattis auctor aliquam vitae libero. Sed pharetra nec augue in hendrerit. Fusce blandit massa ante, quis aliquet ligula tristique in. Praesent ante erat, lobortis quis semper a, blandit ac magna. Aliquam interdum orci augue, ut blandit tortor maximus quis. Curabitur dignissim iaculis magna ut gravida.','http://127.0.0.1:3004/images/image-1676489684026.jpg'),
    ('Paris','author 4','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et accumsan lorem. Aliquam erat volutpat. Morbi pulvinar dapibus viverra. Cras vitae rutrum felis. Nunc feugiat ipsum a eleifend varius. Suspendisse potenti. Proin condimentum tellus vel enim porta, eget convallis tellus congue. Pellentesque dictum risus quis turpis scelerisque varius in laoreet orci. Curabitur egestas tellus vitae est lobortis, vitae pulvinar enim ornare. In quis massa vel libero venenatis volutpat. Nullam nec diam tellus. Sed aliquet odio vitae ipsum fermentum molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit tincidunt urna, id tempus purus mattis eget. Donec id ornare nibh, dapibus dapibus lorem.','http://127.0.0.1:3004/images/image-1676489696581.jpg');

INSERT INTO Comments (post_id, username, text, image)
VALUES
    (1, 'Username', 'Lorem ipsum dolor sit amet, consectetur elit.', ''),
    (1, 'Username', 'Lorem ipsum dolor sit amet, consectetur elit.', ''),
    (1, 'Username', 'Lorem ipsum dolor sit amet, consectetur elit.', ''),
    (2, 'Username', 'Lorem ipsum dolor sit amet, consectetur elit.', ''),
    (2, 'Username', 'Lorem ipsum dolor sit amet, consectetur elit.', ''),
    (2, 'Username', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', ''),
    (2, 'Username', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', ''),
    (2, 'Username', 'Lorem ipsum dolor sit amet, consectetur elit.', ''),
    (4, 'Username', 'Lorem ipsum dolor sit amet, consectetur elit.', ''),
    (4, 'Username', 'Lorem ipsum dolor sit amet, consectetur elit.', ''),
    (4, 'Username', 'Lorem ipsum dolor sit amet, consectetur elit.', ''),
    (4, 'Username', 'Lorem ipsum dolor sit amet, consectetur elit.', ''),
    (4, 'Username', 'Lorem ipsum dolor sit amet, consectetur elit.', ''),
    (4, 'Username', 'Lorem ipsum dolor sit amet, consectetur elit.', ''),
    (4, 'Username', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', ''),
    (4, 'Username', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', '')


