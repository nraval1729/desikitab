const books = [
	{
		bookName : 'Jain Dharma Ni Aagam Kathao',
		authors  : ['Acharya Shri Vatsalyadeep'],
		image    : 'http://via.placeholder.com/250X250',
    baseStreamingUrl  : 'http://d14zhibteofygx.cloudfront.net/AagamKathao/',
		chapters : [
							{
                name: 'Parichay',
                url        : '000-Parichay.mp3'
              },
              {
                name: 'Aarya Kalik Ni Kalyan Bhavana',
                url        : '001-Aarya Kalik Ni Kalyan Bhavana.mp3'
              },
              {
                name: 'Bhagvan No Ghor Abhigrah',
                url        : '002-Bhagvan No Ghor Abhigrah.mp3'
              },
              {
                name: 'Bhav Vandana',
                url        : '003-Bhav Vandana.mp3'
              },
              {
                name: 'Krodha Na Karane',
                url        : '004-Krodha Na Karane.mp3'
              },
              {
                name: 'Shankh Shravak Ni Dharm Bhavana',
                url        : '005-Shankh Shravak Ni Dharm Bhavana.mp3'
              },
              {
                name: 'Shilvanti Shiva Rani',
                url        : '006-Shilvanti Shiva Rani.mp3'
              },
              {
                name: 'Dharmano Vijay',
                url        : '007-Dharmano Vijay.mp3'
              },
              {
                name: 'Daya Nidhi Mahaveer',
                url        : '008-Daya Nidhi Mahaveer.mp3'
              },
              {
                name: 'Rhushbhdut Ane Devananda',
                url        : '009-Rhushbhdut ane Devananda.mp3'
              },
              {
                name: 'Anusvar No Anarth',
                url        : '010-Anusvar No Anarth.mp3'
              },
              {
                name: 'Tamari Ardrata',
                url        : '011-Tamari Ardrata.mp3'
              },
              {
                name: 'Sacho Shravak',
                url        : '012-Sacho Shravak.mp3'              },
              {
                name: 'Kala Ane Vivek',
                url        : '013-Kala Ane Vivek.mp3'
              },
              {
                name: 'Kapat Ane Maya Thi Na Male Shanti',
                url        : '014-Kapat Ane Maya Thi Na Male Shanti.mp3'
              },
              {
                name: 'Daya Sagar Dharm Ruchi Angar',
                url        : '015-Daya Sagar Dharm Ruchi Angar.mp3'
              },
              {
                name: 'Gajthi Hetha Utaro',
                url        : '016-Gajthi Hetha Utaro.mp3'
              },
              {
                name: 'Shravika Uttamo Sulasa',
                url        : '017-Shravika Uttamo Sulasa.mp3'
              },
              {
                name: 'Raag Ane Viraag',
                url        : '018-Raag Ane Viraag.mp3'
              },
              {
                name: 'Ati Muktak Anagar',
                url        : '019-Ati Muktak Anagar.mp3'
              },
              {
                name: 'Bhagvan Nem Nath',
                url        : '020-Bhagvan Nem Nath.mp3'
              },
              {
                name: 'Rajul Ane Rahnemi',
                url        : '021-Rajul Ane Rahnemi.mp3'
              },
              {
                name: 'Sadhvi Sukumalika',
                url        : '022-Sadhvi Sukumalika.mp3'
              },
              {
                name: 'Vastu Matra Parinaman Shil Chhe',
                url        : '023-Vastu Matra Parinaman Shil Chhe.mp3'
              },
              {
                name: 'Mahasati Madanrekha',
                url        : '024-Mahasati Madanrekha.mp3'
              },
              {
                name: 'Roop Aroop',
                url        : '025-Roop Aroop.mp3'
              },
              {
                name: 'Shree Skandhak Mahamuni',
                url        : '026-Shree Skandhak Mahamuni.mp3'
              },
              {
                name: 'Mithya Garv Nu Khandan',
                url        : '027-Mithya Garv Nu Khandan.mp3'
              },
              {
                name: 'Satya Pan Apriy Na Bolay',
                url        : '028-Satya Pan Apriy Na Bolay.mp3'
              },
              {
                name: 'Asakti Anasakti',
                url        : '029-Asakti Anasakti.mp3'
              },
              {
                name: 'Maya Chhodo Dharm Karo',
                url        : '030-Maya Chhodo Dharm Karo.mp3'
              },
              {
                name: 'Parisha Ane Parityag',
                url        : '031-Parisha Ane Parityag.mp3'
              },
              {
                name: 'Raja Ane Muni',
                url        : '032-Raja Ane Muni.mp3'
              },
              {
                name: 'Vinamratano Varidhi',
                url        : '033-Vinamratano Varidhi.mp3'
              },
              {
                name: 'Maha Sati Dharini',
                url        : '034-Maha Sati Dharini.mp3'
              },
              {
                name: 'Dhanya Sarthwah',
                url        : '035-Dhanya Sarthwah.mp3'
              },
              {
                name: 'Pragadh Antaray Karm',
                url        : '036-Pragadh Antaray Karm.mp3'
              },
              {
                name: 'Bhavthi Chadati Ane Padati',
                url        : '037-Bhavthi Chadati Ane Padati.mp3'
              },
              {
                name: 'Thavachya Putra Angar',
                url        : '038-Thavachya Putra Angar.mp3'
              },
              {
                name: 'Rajarshi Udayan',
                url        : '039-Rajarshi Udayan.mp3'
              },
              {
                name: 'Arjun Mali Ni Vaat',
                url        : '040-Arjun Mali Ni Vaat.mp3'
              },
              {
                name: 'Tetali Putra',
                url        : '041-Tetali Putra.mp3'
              },
              {
                name: 'Bhakti No Dhod',
                url        : '042-Bhakti No Dhod.mp3'
              },
              {
                name: 'Pita Putra Samsame',
                url        : '043-Pita Putra Samsame.mp3'
              },
              {
                name: 'Sarva Tyag Purve Ni Kshan',
                url        : '044-Sarva Tyag Purve Ni Kshan.mp3'
              },
              {
                name: 'Upadravi Yaksh Nu Pan Kalyan',
                url        : '045-Upadravi Yaksh Nu Pan Kalyan.mp3'
              },
              {
                name: 'Parityag No Parimal',
                url        : '046-Parityag No Parimal.mp3'
              },
              {
                name: 'Mankhali Putra Goshalak',
                url        : '047-Mankhali Putra Goshalak.mp3'
              },
              {
                name: 'Samatavant Muniraj',
                url        : '048-Samatavant Muniraj.mp3'
              },
              {
                name: 'Kshamanidhi Gajasukumar',
                url        : '049-Kshamanidhi Gajasukumar.mp3'
              },
              {
                name: 'Shree Sthulibhadraji Muniganma Shirdar Jo',
                url        : '050-Shree Sthulibhadraji Muniganma Shirdar Jo.mp3'
              },
              {
                name: 'Jain Sahitya Ek Chhabi',
                url        : '051-Jain Sahitya Ek Chhabi.mp3'
              }] 
	}
];

export default books;
