const quotes = [{quote : "Sometimes we make the process more complicated than we need to. We will never make a journey of a thousand miles by fretting about how long it will take or how hard it will be. We make the journey by taking each day step by step and then repeating it again and again until we reach our destination", author :"- James Comey"},
              
{quote : "It's been a long comeback. Things were pretty dark for me. But I have a faith now, and it saves my day. I was angry with God for a long time because I was unhappy with me. I hadn't learned to make the distinction between God and my parents. But there's a peace now. In the end, I got sick and tired of being sick and tired.", author :"- William Hurt"},
                
{quote : "Don't ever criticize yourself. Don't go around all day long thinking, 'I'm unattractive, I'm slow, I'm not as smart as my brother.' God wasn't having a bad day when he made you... If you don't love yourself in the right way, you can't love your neighbour. You can't be as good as you are supposed to be." ,author :"- Joel Osteen"},
    
{quote : "For once you have tasted flight you will walk the earth with your eyes turned skywards, for there you have been and there you will long to return.", author :"- Leonardo Da Vinci"},
                
{quote : "We are not living in a world where all roads are radii of a circle and where all, if followed long enough, will therefore draw gradually nearer and finally meet at the centre: rather in a world where every road, after a few miles, forks into two, and each of those into two again, and at each fork, you must make a decision", author :"- C.S. Lewis"},
                
{quote : "My dreams for the future are simple: work, a happy, healthy family, a lovely long motorcycle ride, and continuing the struggle to awaken people to the need for serious human rights reform.",  
                author :"- Mike Farrel"},
               
{quote : "When people show loyalty to you, you take care of those who are with you. It's how it goes with everything. If you have a small circle of friends, and one of those friends doesn't stay loyal to you, they don't stay your friend for very long.", author :"John Cena"}
];

$("button").click(generate);   

let i = 0;

function generate(){
    i++;
    
    $("span").text(quotes[i].quote);
    $("#author").text(quotes[i].author);
    
    if(i===quotes.length-1){
        i= 0;
    }
 }

var x = $("#last").val();

console.log(x);






