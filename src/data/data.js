import t_img_1 from "../img/teacher_image/1.jpg"
import t_img_2 from "../img/teacher_image/2.jpg"
import t_img_3 from "../img/teacher_image/3.jpg"
import t_img_4 from "../img/teacher_image/4.jpg"
import t_img_5 from "../img/teacher_image/5.jpg"
import t_img_6 from "../img/teacher_image/6.jpg"
import t_img_7 from "../img/teacher_image/7.jpg"
import t_img_8 from "../img/teacher_image/8.jpg"

import n_img_1 from "../img/news_image/news01.jpg"
import n_img_2 from "../img/news_image/news02.jpg"

// 請先將教授的照片上傳至 img/teacher_image 資料夾中
// 在上方 import 該照片
// 於下方填入新資料
// 註: image:照片 identity:組別代碼 name:名字 text:專業領域
// 組別代碼: 無線電波組 RV ; 物聯網通信與系統 IoTS ; 資安 IS ; 物聯網硬體 IoTH ; 物聯網應用 IoTA
const members = [
	{
		image:t_img_1,
		identity:"RV",
		name:"王暉",
		text:'單晶微波積體電路設計、微波元件模型分析'
	},
	{
		image:t_img_8,
		identity:"IoTS",
		name:'李琳山',
		text:'數位語音處理'
	},
	{
		image:t_img_2,
		identity:"IoTS",
		name:'吳安宇',
		text:'VLSI/CAD'
	},
	{
		image:t_img_4,
		identity:"RV",
		name:'吳瑞北',
		text:'微波電路、訊號完整度、毫米波系統構裝'
	},
	{
		image:t_img_5,
		identity:"IoTS",
		name:'林宗男',
		text:'深度學習'
	},
	{
		image:t_img_6,
		identity:"IS",
		name:'雷欽隆',
		text:'網路安全'
	},
	{
		image:t_img_7,
		identity:"IoTA",
		name:'李百祺',
		text:'生物醫學工程'
	},
	{
		image:t_img_4,
		identity:"IoTH",
		name:'盧信嘉',
		text:'微波量測'
	}		
]

// 最新消息 id:編碼 date:日期, title:標題, text:內文, image:照片, imagetxt:照片介紹文字
// 複製其中一則消息後照相同格式修改即可 
// 請更新在陣列尾端
// 換行請用 \n\n  
const news = [
	{
		id:1,
		date:"2019/2/19",
		title:"物聯網中心參訪趨勢科技",
		text:"由物聯網中心-廖婉君主任帶領電機工程學系林宗男教授、王凡教授、王勝德教授　謝宏昀教授、黃俊郎教授、余子吉教授、吳沛遠教授等及台灣科技大學鄧惟中教授、沈上翔教授參訪趨勢科技並進行雙邊會議。\n\n"+
				 "趨勢科技是產業界中資訊安全的領航者，總經理展示公司中的實驗室（X Gen Security Lab），概述公司的背景及資訊安全病毒之研究。雙方相談甚歡，尋求合作機會的可能性。針對學生實習、課程安排等計畫討論，未來不但將會提供學生機構實習，建立產學合作關係，並將邀請業界專業人員，於校內開設實務課程，理論與實務並重，提供學生多元學習平台及學以致用。",
		image:n_img_1,
		imagetxt:"測試用文字",
	},
	{
		id:2,
		date:"2018/11/29",
		title:"AIOT智慧物聯網論壇",
		text:"隨著無線通訊技術的成熟與人工智慧技術的發展，近年人工智慧(AI)生態系與物聯網(IoT)網結合且不斷擴大，逐漸匯流為AIoT，並帶來多項新趨勢。從智慧交通、智慧監控、智慧零售、智慧醫療與智慧工廠等各種 AIoT 裝置軟硬整合解決方案正在各地開枝散葉，在 AIoT 技術驅動下，也帶領創新創意商務新概念。台灣擁有世界一流的高科技人才，搭載世界級頂尖的硬體製造水準，相繼吸引兩大國際企業微軟及亞馬遜雲端運算在台灣設置AI研發中心及聯合創新中心，掌握這一波科技革新將加速帶動台灣產業在物聯網時代的轉型與創新。",
		image:n_img_2,
		imagetxt:"由左至右為吳沛遠教授、林昌鴻教授、蘇炫榮教授、林宗男教授、貝蘇章老師、貢三元教授、黃正能教授、魏宏宇教授等及其他重要產業界人員共襄盛舉"
	},
	{
		id:3,
		date:"2018/8/12",
		title:"測試!",
		text:"測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試！",
		image:n_img_2,
		imagetxt:'測試測試測試'
	}
]

const news_number = news.map((item,i)=>{
	return (i+1).toString()
})


//顯示於第一頁的新聞 
//date:為日期, title是標題, text是內文
//複製其中一則消息後照相同格式修改即可
//特別注意 text 不可超過40字
const announcement = [
	{
		date:"2019/8/19",
		title:"水瓶座8月19日星座運勢",
		text:"在財運方面，今天的運勢很旺哦，你是否也有這樣的感覺？ 適合喝酒，遠離酒精對健康更好。"
	},
	{
		date:"2019/8/19",
		title:"處女座8月19日星座運勢",
		text:"今天的好運並不常見，灰色的物品能為你帶來好運。今天會有平常想不出來的好點子。"
	}	
]

export default {members, announcement, news, news_number};
