var mysql = require('mysql2');
var drop = 'TRUNCATE TABLE capybaras;'
var seedQuery = 'INSERT INTO capybaras (title, nick, avatar, about) VALUES ("Капибара_В_Бассейне", "capybara_v_basseine", "/images/kapibara_v_baseine.jpg", "Капибара в бассейне - это настоящий водный гуру, который обожает плавать и наслаждаться свежими водными просторами. Он всегда выглядит стильно и элегантно, плавая с легкостью и грацией. Его умение плавать и наслаждаться жизнью в воде делает его настоящим образцом для подражания. Капибара в бассейне всегда рад видеть друзей и готов поделиться своими секретами и трюками для идеального отдыха на воде."), ("Капибара_В_Очках", "capybara_v_ochkah", "/images/kapibara_v_ochkah.jpg", "Капибара в очках - это милый и умный обитатель тропических лесов, который всегда выглядит стильно и уверенно благодаря своим модным очкам. Он обожает читать книги и проводить время за умными разговорами с друзьями, а его очки придают ему серьезный и интеллектуальный вид. Капибара в очках всегда готов помочь своим друзьям советом и поддержкой, и его умение сочетать стиль и умение делает его настоящей звездой среди животных."), ("Капибара_С_Апельсином", "capybara_s_apelsinom", "/images/kapibara_s_apelsinom.jpg","Капибара с апельсином - это настоящий гурман и ценитель свежих фруктов. Он всегда предпочитает наслаждаться сочным и ароматным апельсином, который становится его идеальным компаньоном в любое время дня. Его любовь к апельсинам делает его ярким и энергичным существом, которое всегда радует окружающих своим позитивным настроением. Капибара с апельсином готов поделиться своими фруктовыми угощениями с друзьями и создать настоящий праздник вкуса и радости.");'
var connection = mysql.createConnection({
host : '127.0.0.1',
port: '3306',
user : 'root',
password : '12345',
database: 'treecapybaras'
});
connection.connect()
console.log("Running SQL seed...")
// Drop content
connection.query(drop, err => {
if (err) {
throw err
}
// Seed content
connection.query( seedQuery, err => {
if (err) {
throw err
}
console.log("SQL seed completed!")
connection.end()
})
})