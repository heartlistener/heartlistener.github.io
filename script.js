// swal("欢迎来到本站","现更新形策章节测试答案，需要从资料分享查找");
rt = document.documentElement.style;
hd = document.querySelector(".caption");
hm = document.querySelector(".head_m");
hbtn = document.querySelector(".head_btn");
words1 = document.querySelector("#words_l");
words2 = document.querySelector("#words_r");
words_btn = document.querySelector(".words_btn");

let c = 0;

const change_bg =()=>{
    c = c+1;
    if (c%2 == 1){
        rt.setProperty("--body_bg","linear-gradient(rgb(81,151,205),rgb(15,59,97))");
        rt.setProperty("--header_bg","linear-gradient(rgb(37,82,124),rgb(49,96,142))");
        rt.setProperty("--font_color","rgb(208,208,208)");
        rt.setProperty("--header_color","invert(0.85)");
        rt.setProperty("--border_color","rgb(128,128,128)");
        rt.setProperty("--icon_color","invert(1)");
        rt.setProperty("--head_bg","linear-gradient(rgb(37,82,124),rgb(49,96,142))");
    }
    else{
        rt.setProperty("--body_bg","linear-gradient(rgb(213,226,226),rgb(187,227,227))");
        rt.setProperty("--header_bg","#fbfbfb");
        rt.setProperty("--font_color","#38a7ff");
        rt.setProperty("--header_color","invert(0%)");
        rt.setProperty("--border_color","#ccc");
        rt.setProperty("--head_bg","#ebf6f6");
    }
};
hd.addEventListener('click',change_bg);
// :root{
//     --body_bg:url(picture/backgrand.png);
//     --header_bg:#fbfbfb;
//     --font_color:#38a7ff;
//     --header_color:invert(0%);
//     --border_color:#ccc:
// }

let text_n = 39;

const change_h = () => {
  let h_c = Math.floor(Math.random()*(text_n+1));
  switch(h_c){
    case 1:hm.innerHTML="<p>未来将属于两种人：思想的人和劳动的人，实际上，这两种人是一种人，因为思想也是劳动。</p>";
        break;
    case 2:hm.innerHTML="<p>如果你渴望得到某样东西，你得让它自由，如果它回到你身边，它就是属于你的，如果它不会回来，你就从未拥有过它。</p>";
        break;
    case 3:hm.innerHTML="<p>人类的全部智慧就包含在这五个字里面：等待和希望！</p>";
        break; 
    case 4:hm.innerHTML="<p>痛苦的经历一旦有人分担，痛苦就减少了一半。</p>";
        break; 
    case 5:hm.innerHTML="<p>我们做过的每件事，果然都留下了它的痕迹，有的模糊，有的清晰！我们在人生历程上每走过一步，就像爬虫在沙地上蠕行，留下的是一条长长的印痕！</p>";
        break;
    case 6:hm.innerHTML="<p>世界是美丽的，就算充满悲伤和泪水。也请睁开你的双眼，去做你想要做的事情，成为你想要成为的人，去找到你的朋友。不必焦躁，慢慢地去长大。</p>";
        break; 
    case 7:hm.innerHTML="<p>前天遇到了小鹿，昨天是小兔子，今天是你。</p>";
        break;   
    case 8:hm.innerHTML="<p>真正重要的东西，永远都是非常简单的。</p>";
        break;
    case 9:hm.innerHTML="<p>我宁愿靠自己的力量，打开我的前途，而不愿求有力者垂青。</p>";
        break; 
    case 10:hm.innerHTML="<p>脚步不能到达的地方，眼光可以到达;眼光不能到达的地方,精神可以飞到。</p>";
        break;   
    case 11:hm.innerHTML="<p>stay cool</p>";
        break;
    case 12:hm.innerHTML="<p>临渊羡鱼，不如退而结网。</p>";
        break; 
    case 13:hm.innerHTML="<p>我准备好了，我准备好了，我准备好了…</p>";
        break;  
    case 14:hm.innerHTML="<p>每个人的心中都有一个风筝，不管那意味着什么，让我们勇敢地去追。</p>";
        break; 
    case 15:hm.innerHTML="<p>上帝总要拿去你什么东西的时候，先给你足够的快乐。</p>";
        break;   
    case 16:hm.innerHTML="<p>当罪恶导致善行，那就是最大的救赎。</p>";
        break;
    case 17:hm.innerHTML="<p>世界上最宽阔的是海洋，比海洋更宽阔的是天空，比天空更宽阔的是人的胸怀。</p>";
        break; 
    case 18:hm.innerHTML="<p>人，有了物质才能生存；人，有了理想才谈得上生活。</p>";
        break;   
    case 19:hm.innerHTML="<p>竹杖芒鞋轻胜马，谁怕，一蓑烟雨任平生！</p>";
        break; 
    case 20:hm.innerHTML="<p>试问岭南应不好，却道：此心安处是吾乡！</p>";
        break;   
    case 21:hm.innerHTML="<p>十年生死两茫茫，不思量，自难忘，千里孤坟，无处话凄凉。</p>";
        break;
    case 22:hm.innerHTML="<p>休对故人思故国，且将新火试新茶，诗酒趁年华。</p>";
        break; 
    case 23:hm.innerHTML="<p>惟江上之清风，与山间之明月，耳得之而为声，目遇之而成色，取之无禁，用之不竭。</p>";
        break;      
    case 24:hm.innerHTML="<p>星星之火，可以燎原。</p>";
        break; 
    case 25:hm.innerHTML="<p>没有调查就没有发言权！没有正确的调查，同样没有发言权。</p>";
        break;   
    case 26:hm.innerHTML="<p>与天奋斗，其乐无穷！与地奋斗，其乐无穷！与人奋斗，其乐无穷！</p>";
        break; 
    case 27:hm.innerHTML="<p>虚心使人进步，骄傲使人落后。</p>";
        break;   
    case 28:hm.innerHTML="<p>天若有情天亦老，人间正道是沧桑。</p>";
        break;
    case 29:hm.innerHTML="<p>不管风吹浪打，胜似闲庭信步</p>";
        break; 
    case 30:hm.innerHTML="<p>牢骚太盛防肠断，风物长宜放眼量。</p>";
        break;
    case 31:hm.innerHTML="<p>我们都有责任去引导年轻人，以防他们走上不归路，变得支离破碎，自暴自弃。</p>";
        break;
    case 32:hm.innerHTML="<p>记着，希望是个好东西，也许是世间最好的东西，好东西从不会逝去。</p>";
        break; 
    case 33:hm.innerHTML="<p>监狱里的高墙实在是很有趣。刚入狱的时候，你痛恨周围的高墙；慢慢地，你习惯了生活在其中；最终你会发现自己不得不依靠它而生存。这就是体制化。</p>";
        break;      
    case 34:hm.innerHTML="<p>生命就像一盒巧克力，结果往往出人意料。</p>";
        break; 
    case 35:hm.innerHTML="<p>放下包袱，继续前进。</p>";
        break;   
    case 36:hm.innerHTML="<p>没有人能让你不快乐，是你自己选择了不快乐。作为成年人，理应为自己的行为和情绪负责，从中体会到自己的力量。</p>";
        break; 
    case 37:hm.innerHTML="<p>重要的，珍惜的，一直在身边，一旦成为理所当然，就难以发现。</p>";
        break;   
    case 38:hm.innerHTML="<p>不能只被外表所蒙蔽哦。</p>";
        break;
    case 39:hm.innerHTML="<p>我喜欢早上起来时一切都是未知的，不知会遇见什么人，会有什么样的结局。</p>";
        break; 
  }
}
hbtn.addEventListener("click",change_h);

//words


let words_n = 49;
change_words();
setInterval(change_words, 5000); 
words_btn.addEventListener("click",change_words);
function change_words(){
    let words_c = Math.floor(Math.random()*(words_n+1));

    switch(words_c){
      
        case 0:
            words1.innerHTML='<p>principle n.</p><p>原则</p>';
            words2.innerHTML='<p>principal adj.</p><p>主要的</p>';
            break;   
        case 1: 
            words1.innerHTML='<p>captive n./adj.</p><p>俘虏/被俘获的</p>';
            words2.innerHTML='<p>caption n.</p><p>字幕</p>';
            break;      
        case 2: 
            words1.innerHTML='<p>considerable adj.</p><p>相当大的</p>';
            words2.innerHTML='<p>considerate adj.</p><p>体贴的</p>';
            break;  
        case 3: 
            words1.innerHTML='<p>impart v.</p><p>告知,传授</p>';
            words2.innerHTML='<p>impact v./n.</p><p>冲击,影响</p>';
            break;
        case 4: 
            words1.innerHTML='<p>assemble v.</p><p>聚集</p>';
            words2.innerHTML='<p>resemble v.</p><p>与…相似</p>';
            break;    
        case 5: 
            words1.innerHTML='<p>curve v.</p><p>使弯曲</p>';
            words2.innerHTML='<p>curse v.</p><p>诅咒</p>';
            break;    
        case 6: 
            words1.innerHTML='<p>predominant adj.</p><p>盛行的</p>';
            words2.innerHTML='<p>dominant adj.</p><p>首要的</p>';
            break;    
        case 7: 
            words1.innerHTML='<p>eminent adj.</p><p>杰出的</p>';
            words2.innerHTML='<p>inminent adj.</p><p>即将发生的、迫近的</p>';
            break; 
        case 8: 
            words1.innerHTML='<p>vocation n.</p><p>职业</p>';
            words2.innerHTML='<p>vacation n.</p><p>假期</p>';
            break; 
        case 9: 
            words1.innerHTML='<p>apartment n.</p><p>公寓</p>';
            words2.innerHTML='<p>department n.</p><p>部门</p>';
            break; 
        case 10:
            words1.innerHTML='<p>affict v.</p><p>折磨(一直打)</p>';
            words2.innerHTML='<p>inflict v.</p><p>使遭受(重击)</p>';
            break;   
        case 11: 
            words1.innerHTML='<p>definite adj.</p><p>明确的的</p>';
            words2.innerHTML='<p>definitive adj.</p><p>最终的</p>';
            break;       
        case 12: 
            words1.innerHTML='<p>vogue n./adj.</p><p>时尚/流行的</p>';
            words2.innerHTML='<p>vague n.</p><p>模糊的</p>';
            break;  
        case 13: 
            words1.innerHTML='<p>discrete adj.</p><p>分离的</p>';
            words2.innerHTML='<p>discreet adj.</p><p>谨慎的</p>';
            break;
        case 14: 
            words1.innerHTML='<p>tribe n.</p><p>部落</p>';
            words2.innerHTML='<p>bribe n./v.</p><p>贿赂</p>';
            break;    
        case 15: 
            words1.innerHTML='<p>delicate adj.</p><p>精美的</p>';
            words2.innerHTML='<p>dedicate v.</p><p>献身于</p>';
            break;    
        case 16: 
            words1.innerHTML='<p>dictate v.</p><p>命令,口授</p>';
            words2.innerHTML='<p>indicate adj.</p><p>指示,表明</p>';
            break;    
        case 17: 
            words1.innerHTML='<p>candidate n.</p><p>候选人</p>';
            words2.innerHTML='<p>indicate adj.</p><p>指示,表明</p>';
            break; 
        case 18: 
            words1.innerHTML='<p>confirm v.</p><p>证实(客观)</p>';
            words2.innerHTML='<p>affirm v.</p><p>肯定(主观)</p>';
            break; 
        case 19: 
            words1.innerHTML='<p>exquisite adj.</p><p>精致的</p>';
            words2.innerHTML='<p>requisite adj./n.</p><p>必须的/必需品</p>';
            break;
        case 20:
            words1.innerHTML='<p>preserve v.</p><p>保护,保养</p>';
            words2.innerHTML='<p>persevere v.</p><p>坚持不懈</p>';
            break;
        case 21: 
            words1.innerHTML='<p>strife n.</p><p>冲突</p>';
            words2.innerHTML='<p>stifle v.</p><p>使窒息,抑制</p>';
            break;
        case 22: 
            words1.innerHTML='<p>declaim v.</p><p>声明</p>';
            words2.innerHTML='<p>acclaim v./n.</p><p>称赞</p>';
            break;
        case 23: 
            words1.innerHTML='<p>repel v.</p><p>击退,使反感</p>';
            words2.innerHTML='<p>rebel v./n.</p><p>造反/反抗者</p>';
            break;
        case 24: 
            words1.innerHTML='<p>tumble n./v.</p><p>突然跌倒</p>';
            words2.innerHTML='<p>stumble n./v.</p><p>绊倒</p>';
            break;
        case 25: 
            words1.innerHTML='<p>crumble v./n.</p><p>破碎/面包屑</p>';
            words2.innerHTML='<p>scramble n./v.</p><p>攀登,争夺</p>';
            break;
        case 26: 
            words1.innerHTML='<p>perplex v.</p><p>使迷惑</p>';
            words2.innerHTML='<p>complex adj.</p><p>复杂的</p>';
            break;
        case 27: 
            words1.innerHTML='<p>propose v.</p><p>建议</p>';
            words2.innerHTML='<p>purpose n.</p><p>目的</p>';
            break;
        case 28: 
            words1.innerHTML='<p>stimulate v.</p><p>促进</p>';
            words2.innerHTML='<p>stipulate v.</p><p>规定</p>';
            break;
        case 29: 
            words1.innerHTML='<p>wary adj.</p><p>小心的</p>';
            words2.innerHTML='<p>scramble adj./v.</p><p>疲劳的/使疲劳</p>';
            break;
        case 30:
            words1.innerHTML='<p>praise v.</p><p>称赞</p>';
            words2.innerHTML='<p>appraise v.</p><p>评价,鉴定</p>';
            break;
        case 31: 
            words1.innerHTML='<p>excerpt n./v.</p><p>摘录,节选</p>';
            words2.innerHTML='<p>except v.</p><p>把…除外</p>';
            break;
        case 32: 
            words1.innerHTML='<p>tract n.</p><p>地带</p>';
            words2.innerHTML='<p>track n.</p><p>痕迹</p>';
            break;
        case 33: 
            words1.innerHTML='<p>rrefute v.</p><p>反驳/否认</p>';
            words2.innerHTML='<p>refuse v.</p><p>拒绝</p>';
            break;
        case 34: 
            words1.innerHTML='<p>shatter v.</p><p>打碎</p>';
            words2.innerHTML='<p>shutter n./v.</p><p>(装)百叶窗</p>';
            break;
        case 35: 
            words1.innerHTML='<p>retain v..</p><p>保持/保留</p>';
            words2.innerHTML='<p>detain v.</p><p>拘留/扣留</p>';
            break;
        case 36: 
            words1.innerHTML='<p>grin n./v.</p><p>咧嘴笑</p>';
            words2.innerHTML='<p>grim adj.</p><p>冷酷的/残忍的</p>';
            break;
        case 37: 
            words1.innerHTML='<p>flutter n./v.</p><p>振动,颤动</p>';
            words2.innerHTML='<p>flatter v.</p><p>奉承,讨好</p>';
            break;
        case 38: 
            words1.innerHTML='<p>constrain v.</p><p>约束</p>';
            words2.innerHTML='<p>restrain v.</p><p>抑制,阻止</p>';
            break;
        case 39: 
            words1.innerHTML='<p>certian adj.</p><p>肯定的,可靠的</p>';
            words2.innerHTML='<p>ascertain v.</p><p>查明</p>';
            break;
        case 40:
            words1.innerHTML='<p>segregation n.</p><p>隔离</p>';
            words2.innerHTML='<p>aggregation n.</p><p>集合</p>';
            break;
        case 41: 
            words1.innerHTML='<p>compliment n./v.</p><p>赞美,称赞</p>';
            words2.innerHTML='<p>complement n./v.</p><p>补充,补足</p>';
            break;
        case 42: 
            words1.innerHTML='<p>counsel n./v.</p><p>建议,劝告,律师</p>';
            words2.innerHTML='<p>council n.</p><p>痕委员会,理事会</p>';
            break;
        case 43: 
            words1.innerHTML='<p>dairy adj./n.</p><p>奶制的/牛奶厂</p>';
            words2.innerHTML='<p>diary n.</p><p>日记</p>';
            break;
        case 44: 
            words1.innerHTML='<p>aptitude n.</p><p>天资</p>';
            words2.innerHTML='<p>attitude n.</p><p>态度</p>';
            break;
        case 45: 
            words1.innerHTML='<p>rigorous adj.</p><p>严厉的</p>';
            words2.innerHTML='<p>vigorous adj.</p><p>精力充沛的</p>';
            break;
        case 46: 
            words1.innerHTML='<p>commerce n.</p><p>商业</p>';
            words2.innerHTML='<p>commence v.</p><p>开始/着手</p>';
            break;
        case 47: 
            words1.innerHTML='<p>aboard adv.</p><p>在船上</p>';
            words2.innerHTML='<p>abroad v.</p><p>在国外</p>';
            break;
        case 48: 
            words1.innerHTML='<p>probe v.</p><p>探测,盘问</p>';
            words2.innerHTML='<p>grope v.</p><p>搜索,搜寻</p>';
            break;
        case 49: 
            words1.innerHTML='<p>disguise n./v.</p><p>假装</p>';
            words2.innerHTML='<p>disgust n./v.</p><p>厌恶/使厌恶</p>';
            break;
    }
}

