$(document).ready(function() {


	var 	priceDomen = 149,//Цена за доменное имя
				priceHost = 1620,//Цена за хостинг
				priceAdmin = 15300,//ЦЕна за администратирование
				priceAd = 600,//Цена за рекламу
				sum = 17669,//Итого
				domenName = {
				"free-donbass.ru":{1:149},
				"free-donbass.com":{1:517},
				"free-donbass.net":{1:550},
				"free-donbass.org":{1:329},
				"free-donbass.biz":{1:637},
				"free-donbass.info":{1:129}
				},//Массив для отображения домена
				hostName = {
					"Простой хостинг":{1:1620},
					"Премиум хостинг":{1:3180},
					"Бизнесс хостинг":{1:10308}
				},//Массив для отображения хоста
				adminName = {
					"Техническое обслуживание":{1:15300},
					"Базовое обслуживание":{1:51000},
					"Премиум обслуживание":{1:102000}
				},//Массив для отображения администратирования
				adName = {
					"Чистый Донбасс":{1:600},
					"Комфортный донбасс":{1:320},
					"Безопасный донбасс":{1:1980}
				};//Массив для отображения рекдамы

				insertPriceDomen();
					function insertPriceDomen(){
						var html = '';
						for(domen in domenName){
							html+='<option value = "'+domen +'" domen-price = "' + domenName[domen][1] + '">' + domen + '</option>';
						}
						console.log(html);
						$('#domen-name').empty();
						$('#domen-name').append(html);
					} //Передача данных в domen-name

					insertPriceHost();
						function insertPriceHost(){
							var html = '';
							for(host in hostName){
								html+='<option value = "'+host +'" host-price = "' + hostName[host][1] + '">' + host + '</option>';
							}
							console.log(html);
							$('#host-name').empty();
							$('#host-name').append(html);
						} //Передача данных в host-name

						insertPriceAdmin();
							function insertPriceAdmin(){
								var html = '';
								for(admin in adminName){
									html+='<option value = "'+admin +'" admin-price = "' + adminName[admin][1] + '">' + admin + '</option>';
								}
								console.log(html);
								$('#admin-name').empty();
								$('#admin-name').append(html);
							} //Передача данных в admin-name

							insertPriceAd();
								function insertPriceAd(){
									var html = '';
									for(ad in adName){
										html+='<option value = "'+ad +'" ad-price = "' + adName[ad][1] + '">' + ad + '</option>';
									}
									console.log(html);
									$('#ad-name').empty();
									$('#ad-name').append(html);
								} //Передача данных в ad-name


								$('#domen-name').change(function(){
									priceDomen = $('#domen-name option:selected').attr('domen-price');
									$('#tb-domen').text(priceDomen);
								 summa();
							 });//Запись цены домена в таблицу

							 $('#host-name').change(function(){
								 priceHost = $('#host-name option:selected').attr('host-price');
								 $('#tb-host').text(priceHost);
								summa();
							});//Запись цены хоста в таблицу

							$('#admin-name').change(function(){
								priceAdmin = $('#admin-name option:selected').attr('admin-price');
								$('#tb-admin').text(priceAdmin);
							 summa();
						 });//Запись цены администрирования в таблицу

						 $('#ad-name').change(function(){
							 priceAd = $('#ad-name option:selected').attr('ad-price');
							 $('#tb-ad').text(priceAd);
							summa();
						});//Запись цены рекламы в таблицу

						function summa()
						{
							sum = parseInt(priceDomen) + parseInt(priceHost) + parseInt(priceAdmin) + parseInt(priceAd);
					    $('#tb-sum').text(sum);
						}

});

$(function($){
	$("contactForm").submit(function(event){
		event.preventDefault();

		$.ajax({
    url: "https://formspree.io/pinf_16_u@mail.ru",
    method: "POST",
    data: {
			name: $("#name").val(),
			email: $("#email").val(),
			message: $("#message").val()
		},
    dataType: "json"
		}).done(function(){
			$("#name").val();
			$("#email").val();
			$("#message").val();
			alert("Сообщение доставлено!");
		}).fail(function(){
			alert("Произошла ошибка!")
		});
	})
});
