// import teacher picture
import t_img_0 from "../img/teacher_image/0.jpg"
import t_img_1 from "../img/teacher_image/1.jpg"
import t_img_2 from "../img/teacher_image/2.jpg"
import t_img_3 from "../img/teacher_image/3.jpg"
import t_img_4 from "../img/teacher_image/4.jpg"
import t_img_5 from "../img/teacher_image/5.jpg"
import t_img_6 from "../img/teacher_image/6.jpg"
import t_img_7 from "../img/teacher_image/7.jpg"
import t_img_8 from "../img/teacher_image/8.jpg"
import t_img_9 from "../img/teacher_image/9.jpg"
import t_img_10 from "../img/teacher_image/10.jpg"
import t_img_11 from "../img/teacher_image/11.jpg"
import t_img_12 from "../img/teacher_image/12.jpg"
import t_img_13 from "../img/teacher_image/13.jpg"
import t_img_14 from "../img/teacher_image/14.jpg"
import t_img_15 from "../img/teacher_image/15.jpg"
import t_img_16 from "../img/teacher_image/16.jpg"
import t_img_17 from "../img/teacher_image/17.jpg"
import t_img_18 from "../img/teacher_image/18.jpg"
import t_img_19 from "../img/teacher_image/19.jpg"
import t_img_20 from "../img/teacher_image/20.jpg"
import t_img_21 from "../img/teacher_image/21.jpg"
import t_img_22 from "../img/teacher_image/22.jpg"
import t_img_23 from "../img/teacher_image/23.jpg"
import t_img_24 from "../img/teacher_image/24.jpg"
import t_img_25 from "../img/teacher_image/25.jpg"
import t_img_26 from "../img/teacher_image/26.jpg"
import t_img_27 from "../img/teacher_image/27.jpg"
import t_img_28 from "../img/teacher_image/28.jpg"
import t_img_29 from "../img/teacher_image/29.jpg"
import t_img_30 from "../img/teacher_image/30.jpg"
import t_img_31 from "../img/teacher_image/31.jpg"
import t_img_32 from "../img/teacher_image/32.jpg"
import t_img_33 from "../img/teacher_image/33.jpg"
import t_img_34 from "../img/teacher_image/34.jpg"

// import news picture
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
		text:'單晶微波積體電路設計、微波元件模型分析、被動微波元件分析與設計'
	},
	{
		image:t_img_2,
		identity:"IoTS",
		identity2:"IoTH",
		name:'吳安宇',
		text:'VLSI/CAD、通訊IC設計 (Wired, Wireless, Networking)'
	},
	{
		image:t_img_3,
		identity:"RV",
		name:'吳宗霖',
		text:'電磁相容/干擾，針對信號與電源完整性的晶片-封裝-電路板共設計，微波電路元件設計，三維晶片之電氣分析',
	},
	{
		image:t_img_4,
		identity:"RV",
		name:'吳瑞北',
		text:'微波電路、訊號完整度、毫米波系統構裝、無線射頻物聯網、數值電磁'
	},
	{
		image:t_img_5,
		identity:"RV",
		name:'呂良鴻',
		text:'RF/Microwave Integrated Circuit Design, Mixed-Signal Integrated Circuit Design'
	},
	{
		image:t_img_6,
		identity:"IoTH",
		name:'呂學士',
		text:'醫療電子,類比電路射,數位電路,頻積體電路及半導體製程/元件'
	},
	{
		image:t_img_7,
		identity:"IoTA",
		name:'李百祺',
		text:'生物醫學工程、訊號處理、超音波影像'
	},
	{
		image:t_img_8,
		identity:"IoTS",
		name:'李琳山',
		text:'數位語音處理、中文資訊處理、資訊傳輸工程、數位訊號處理'
	},
	{
		image:t_img_9,
		identity:"IoTS",
		name:'貝蘇章',
		text:'數位訊號處理與影像處理之研究'
	},
	{
		image:t_img_10,
		identity:"IoTA",
		name:'周承復',
		text:'分散式多媒體系統、同儕計算、無線感測網路、無線網狀網路、效能分析理論'
	},
	{
		image:t_img_11,
		identity:"IoTS",
		name:'周俊廷',
		text:'無線網路通訊協定，超高速個人無線區域網路，認知型智慧無線網路'
	},
	{
		image:t_img_12,
		identity:"RV",
		name:'林佑坤',
		text:'射頻、微波及毫米波積體電路'
	},
	{
		image:t_img_13,
		identity:"IoTS",
		identity2:'IS',
		name:'林宗男',
		text:'深度學習、機器學習、網路資訊安全、資料科學、區塊鏈技術'
	},
	{
		image:t_img_14,
		identity:"RV",
		name:'林怡成',
		text:'天線技術與理論、多天線設計與系統實務整合、微波電路設計'
	},
	{
		image:t_img_15,
		identity:"IoTA",
		name:'林風',
		text:'個人通訊服務網路之設計與分析、無線網際網路、系統效能評估'
	},
	{
		image:t_img_16,
		identity:"IoTA",
		name:'逢愛君',
		text:'網際網路電話制約之設計與分析、個人通訊服務網路之設計與分析、無線網際網路語音服務'
	},		
	{
		image:t_img_17,
		identity:"IoTS",
		name:'張時中',
		text:'系統控制與佳化、網路控管、作業排程、賽局理論、電子商務'
	},
	{
		image:t_img_18,
		identity:"IoTH",
		identity2:"IoTS",
		name:'曹恆偉',
		text:'低功耗/低電壓電路(數位/混合模式)設計通信及量測電路、偏重數位化之混合信號處理架構及演算法之應用'
	},
	{
		image:t_img_19,
		identity:"IoTS",
		name:'陳宏銘',
		text:'多媒體信號處理、計算攝影及顯示技術、音樂資訊探勘'
	},
	{
		image:t_img_20,
		identity:"IoTA",
		name:'陳志宏',
		text:'核磁共振影像、身心障礙科技輔具、醫學資訊、醫學工程'
	},
	{
		image:t_img_21,
		identity:"IoTH",
		name:'陳良基',
		text:'DSP IC Design、Video Signal Processing、Bio-Signal Processing'
	},
	{
		image:t_img_22,
		identity:"IoTA",
		name:'陳銘憲',
		text:'多媒體網路，資料庫系統，資訊勘測'
	},
	{
		image:t_img_23,
		identity:"RV",
		name:'黃天偉',
		text:'RFIC設計、IEEE 802 國際通信標準制定、高速數位信號完整度設計'
	},
	{
		image:t_img_24,
		identity:"IoTS",
		name:'葉丙成',
		text:'分子通訊、無線通訊、無線網路、線上教學系統設計'
	},
	{
		image:t_img_25,
		identity:"IoTA",
		name:'黃寶儀',
		text:'無線感測網路、多媒體網路、網際網路分析 '
	},
	{
		image:t_img_26,
		identity:"IS",
		name:'雷欽隆',
		text:'網路安全、密碼學、分散式計算、網際網路技術、作業系統'
	},
	{
		image:t_img_0,
		identity:"IoTS",
		name:'廖婉君',
		text:'無線多媒體網路 (VR/AR/MR over 5G)，行動邊緣運算暨雲端虛擬化，區塊鏈技術， 物聯網'
	},
	{
		image:t_img_27,
		identity:"IoTS",
		name:'蔡志宏',
		text:'寬頻網路、效能分析、網路規劃與管理'
	},
	{
		image:t_img_28,
		identity:"IoTH",
		name:'盧信嘉',
		text:'微波量測、轉接特性量測、IC封裝特性量測、低溫共燒陶瓷電路設計/合成/驗證、超材料、射頻/微波積體電路、微小化磁場探針、毫米波天線陣列'
	},
	{
		image:t_img_29,
		identity:"IS",
		identity2:"IoTS",
		name:'謝宏昀',
		text:'通訊與信號處理,資料科學與智慧網路'
	},
	{
		image:t_img_30,
		identity:"IoTS",
		identity2:'IoTH',
		name:'簡韶逸',
		text:'多媒體訊號處理系統、多媒體積體電路設計、晶片系統設計方法研究'
	},
	{
		image:t_img_31,
		identity:"IoTS",
		identity2:'IoTH',
		name:'闕志達',
		text:'無線通信積體電路設計、高速訊號處理積體電路設計、生醫訊號處理'
	},
	{
		image:t_img_32,
		identity:"IoTS",
		name:'魏宏宇',
		text:'行動無線網路，網路通訊賽局理論，跨階層無線多媒體通信系統，無線感測網路與物聯網通信'
	},
	{
		image:t_img_33,
		identity:"IoTS",
		name:'蘇炫榮',
		text:'無線通訊'
	},
	{
		image:t_img_34,
		identity:"IoTS",
		name:'鐘嘉德',
		text:'通訊系統及理論，無線通訊，展頻通訊'
	},
]

// 最新消息 id:編碼 date:日期, title:標題, text:內文, image:照片, imagetxt:照片介紹文字
// 複製其中一則消息後照相同格式修改即可 
// 請更新在陣列尾端
// 換行請用 \n\n  
const news = [
	{
		id:1,
		date:"2018/11/29",
		title:"AIOT智慧物聯網論壇",
		text:"隨著無線通訊技術的成熟與人工智慧技術的發展，近年人工智慧(AI)生態系與物聯網(IoT)網結合且不斷擴大，逐漸匯流為AIoT，並帶來多項新趨勢。從智慧交通、智慧監控、智慧零售、智慧醫療與智慧工廠等各種 AIoT 裝置軟硬整合解決方案正在各地開枝散葉，在 AIoT 技術驅動下，也帶領創新創意商務新概念。台灣擁有世界一流的高科技人才，搭載世界級頂尖的硬體製造水準，相繼吸引兩大國際企業微軟及亞馬遜雲端運算在台灣設置AI研發中心及聯合創新中心，掌握這一波科技革新將加速帶動台灣產業在物聯網時代的轉型與創新。",
		image:n_img_2,
		imagetxt:"由左至右為吳沛遠教授、林昌鴻教授、蘇炫榮教授、林宗男教授、貝蘇章老師、貢三元教授、黃正能教授、魏宏宇教授等及其他重要產業界人員共襄盛舉"
	},
	{
		id:2,
		date:"2019/2/19",
		title:"物聯網中心參訪趨勢科技",
		text:"由物聯網中心-廖婉君主任帶領電機工程學系林宗男教授、王凡教授、王勝德教授　謝宏昀教授、黃俊郎教授、余子吉教授、吳沛遠教授等及台灣科技大學鄧惟中教授、沈上翔教授參訪趨勢科技並進行雙邊會議。\n\n"+
				 "趨勢科技是產業界中資訊安全的領航者，總經理展示公司中的實驗室（X Gen Security Lab），概述公司的背景及資訊安全病毒之研究。雙方相談甚歡，尋求合作機會的可能性。針對學生實習、課程安排等計畫討論，未來不但將會提供學生機構實習，建立產學合作關係，並將邀請業界專業人員，於校內開設實務課程，理論與實務並重，提供學生多元學習平台及學以致用。",
		image:n_img_1,
		imagetxt:"測試用文字",
	},
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
		id1:1,
		date:"2019/8/9",
		title:"演講公告",
		text:"在財運方面，今天的運勢很旺哦，你是否也有這樣的感覺？ 適合喝酒，遠離酒精對健康更好。"
	},
	{
		id:2,
		date:"2019/8/19",
		title:"計畫公告",
		text:"今天的好運並不常見，灰色的物品能為你帶來好運。今天會有平常想不出來的好點子。"
	},
	{
		id:3,
		date:"2019/9/19",
		title:"研究助理徵求",
		text:"今天的好運並不常見，灰色的物品能為你帶來好運。今天會有平常想不出來的好點子。"
	}		
]

export default {members, announcement, news, news_number};
