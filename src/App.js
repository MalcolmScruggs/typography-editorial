import React, { Component } from 'react';
import './App.css';
import amanda_smoking from './img/amanda-smoking.jpg';
import amanda_southwest_detroit from './img/amanda-southwest-detroit.jpg';
import amanda_freeway from './img/amanda-freeway.jpg';
import amanda_dentist from './img/amanda-dentist2.jpg';
import libby_bracelet from "./img/amanda-liby-bracelet.jpg";

class App extends Component {
  render() {
    let bodyCol = "col-sm-10 offset-sm-1 col-lg-6 offset-lg-2 pr-3";
    return (
      <div className="App">
          <div className="cover-container">
              <div className="cover-img"></div>
              <div className="cover-overlay">
                  <h1 className="title">“How’s Amanda?”</h1>
                  <h4 className="title-blurb">A story of truth, lies and an American addiction</h4>
              </div>
          </div>
          <section className="article-body px-4 px-sm-0" >
              <div className="row no-gutters">
                  <div className={`${bodyCol}`}>
                      <p className="text-right"><strong>FARMINGTON HILLS, Mich.</strong></p>
                      <p className="dropcap">She had already made it through one last night alone under the freeway bridge, through the vomiting and shakes of withdrawal, through cravings so intense she’d scraped a bathroom floor searching for leftover traces of heroin. It had now been 12 days since the last time Amanda Wendler used a drug of any kind, her longest stretch in years. “Clear-eyed and sober,” read a report from one drug counselor, and so Amanda, 31, had moved back in with her mother to begin the stage of recovery she feared most.</p>
                      <p>“Is this everything I have?” she asked, standing with her mother in the garage of their two-bedroom condominium, taking inventory of her things. There were a few garbage bags filled with clothes. There was a banged-up dresser she had put into storage before moving into her first abandoned house.</p>
                      <p>“Where’s my good makeup?” Amanda asked.</p>
                      <p>“Maybe you pawned it with the jewelry,” said her mother, Libby Alexander.</p>
                      <p>“What about all of my shoes?”</p>
                      <p>“Oh, God. Are you serious?” Libby said. “Do you even know how many pairs of shoes you’ve lost or sold?”</p>
                      <p>Amanda lit a cigarette and sat in a plastic chair wedged between the cat food and the recycling bins in the garage, the only place where she was allowed to smoke. This was the ninth time she had managed to go at least a week without using. She had spent a full decade trying and failing to get clean, and a therapist had asked her once to make a list of her triggers for relapse. “Boredom, loneliness, anxiety, regret, shame, seeing how I haven’t gone up at all in my life when the drugs aren’t there,” she had written.</p>
                      <p>She had no job, no high school diploma, no car and no money beyond what her mother gave her for Mountain Dew and cigarettes. A few days earlier, a dentist had pulled all 28 of her teeth, which had decayed from years of neglect. It had been a week since she’d seen her 9-year-old twin sons, who lived in a nearby suburb with their father, and lately the most frequent text messages coming into her phone were from a dealer hoping to lure her back with free samples: “Got testers,” he had just written. “Get at me. They’re going fast.”</p>
                      <Supplement title="Opioid Overdose Crisis"
                          text="Every day, more than 115 people in the United States die after overdosing on opioids. The misuse of and addiction to opioids—including prescription pain relievers, heroin, and synthetic opioids such as fentanyl—is a serious national crisis that affects public health as well as social and economic welfare. The Centers for Disease Control and Prevention estimates that the total “economic burden” of prescription opioid misuse alone in the United States is $78.5 billion a year, including the costs of healthcare, lost productivity, addiction treatment, and criminal justice involvement."/>
                      <p>In the addicted America of 2016, there are so many ways to take measure of the pain, longing and despair that are said to be driving a historic opiate epidemic: Another 350 people starting on heroin every day, according to estimates from the Centers for Disease Control and Prevention; another 4,105 emergency-room visits; another 79 people dead. Drug overdoses are now the leading cause of injury-related death in the United States — worse than guns, car crashes or suicides. Heroin abuse has quadrupled in the past decade. Most addicts are introduced to heroin through prescription pain pills, and doctors now write more than 200 million opiate prescriptions each year.</p>
                      <p>But the fact that matters most for a chronic user is what it takes for just one addict to get clean. The relapse rate for heroin has been reported in various studies to be as high as 97 percent. The average active user dies of an overdose in about 10 years, and Amanda’s opiate addiction was going on year 11.</p>
                      <p>She believed her only chance to stay sober was to take away the possibility of feeling high, so she had decided to pursue one of the newest treatments for heroin. It was a monthly shot of a drug called naltrexone, which blocks the effects of opiates on the brain and makes getting high impossible. But the shot came with dangerous side effects if she still had opiates in her system. Doctors had told her that first she needed to pass a drug test, which required staying clean for at least two weeks, which meant her appointment for the shot was still four days away.</p>
                      <p>“Soon you can breathe. You can start getting your life back,” Libby said. “That’s all just days away.”</p>
                      <p>“Days are forever,” Amanda said. “Do you even know how hard it is to go for one minute?”</p>
                      <p>She had been trying to occupy herself with coloring books and cellphone games, anything to keep her hands busy. Now she picked up a hand-held mirror and began reapplying her makeup for the second time that morning, even though she hadn’t left the house in a few days. She had worked as a model in high school, but now her gums were swollen and her arms were bruised with needle marks. She tugged down her sleeves and put away the mirror. Shame was a trigger. Regret was a trigger. She grabbed her phone and looked at the dealer’s latest text message. She wondered if her mother was still locking her car keys in a safe. She wondered if she could find a ride into Southwest Detroit for one last $10 bag: the euphoria when the drug entered her bloodstream, the full-body tingling that moved in from her hands to her chest, erasing pain, erasing fear, erasing sadness, erasing anxiety and feelings of failure until finally the tingling stopped and the only thing left to feel was blissful numbness, just hours of nothing.</p>
                      <p>One minute — she could make it one minute. She watched a video on her cellphone. She sorted her nail polish and lit another cigarette. Libby came back into the garage, setting off the burglar alarm she had installed a few years earlier, after Amanda had helped a boyfriend steal $5,000 worth of guitars from Libby’s husband.</p>
                      <p>“I hate that sound,” Amanda said. “It brings everything back. It’s a trigger.”</p>
                      <p>“I’m sorry,” Libby said. “It’s our reality.”</p>
                      <p>“Yeah, I know,” Amanda said. “And reality’s a trigger.”</p>
                  </div>
              </div>
              <BodyPicture img={amanda_smoking} caption="Libby Alexander, left, gives daughter Amanda money for food, sodas and cigarettes. With no job, no high school diploma and no car, she has no money beyond that. In weak moments, Amanda has pawned her belongings." />
              <div className="row no-gutters">
                  <div className={`${bodyCol}`}>
                      <p className="dropcap">Their condo was tucked away in a small development surrounded by pine trees and occupied mostly by retirees: no loud noises, no solicitors, no unauthorized visitors allowed beyond the guard shack after 8 p.m. Libby was usually in the living room with the TV on mute. Amanda’s stepfather was in the study, playing chess online. It was a place so quiet that Amanda could sit in the garage and literally hear the clock tick. Seventy-two hours left until the shot. Seventy-one. Seventy.</p>
                      <p>“No way I’m going to make it,” she said. She was sweating and picking at her nail beds, and when she said that she might know of a few clinics where she could get the shot right away, Libby agreed to drive her.</p>
                      <p>They drove out of the exurbs, through the suburbs and into the city. Libby tucked her purse against the driver’s side door, where Amanda wouldn’t be able to reach it. She relocked the doors as she drove and cupped her hands over the car keys, remembering a time when Amanda had grabbed her keys and refused to give them back unless Libby paid her. For most of the last week, she had been requesting time off from her job as a beautician, afraid of what could happen if she left Amanda alone.</p>
                      <Supplement title="How did this happen?"
                                  text="In the late 1990s, pharmaceutical companies reassured the medical community that patients would not become addicted to prescription opioid pain relievers, and healthcare providers began to prescribe them at greater rates. This subsequently led to widespread diversion and misuse of these medications before it became clear that these medications could indeed be highly addictive. Opioid overdose rates began to increase. In 2015, more than 33,000 Americans died as a result of an opioid overdose, including prescription opioids, heroin, and illicitly manufactured fentanyl, a powerful synthetic opioid. That same year, an estimated 2 million people in the United States suffered from substance use disorders related to prescription opioid pain relievers, and 591,000 suffered from a heroin use disorder (not&nbsp;mutually&nbsp;exclusive)."/>
                      <p>Amanda sat in the passenger seat and stared out the window as they came into Southwest Detroit, passing the overgrown lots and decaying houses where she had spent so much of her adult life. Her first opiates had been a prescription for 120 tablets of Vicodin, offered by a doctor to treat a minor snowmobiling injury in high school. The pills chased away that pain and also the anger left over from her parents’ divorce, her depression, ADHD and self-doubt, and soon she was failing out of high school and becoming increasingly dependent on pills. Just one or two to make it through another shift at work, a pawnshop where she stood behind the counter and gave addicts their $25 loans. Just two more to pass the time spent alone watching TV while her husband, a truck driver, was traveling. Just three or four to get going with the twins in the morning, to feed them, to sing to them, to feed them again, to sit and play all day in a lonely trailer out in Macomb. Just five when it started to feel like she was suffocating, 24 years old, divorced and already so stuck. Just a dose every five or six hours throughout the day to quiet the noise in her head, so why wasn’t she numb? Why was 15 pills each day still not enough? If only there was something cheaper, stronger, and so in 2012 a boyfriend had introduced her to heroin, and she had been injecting it into a vein in her forearm twice a day ever since.</p>
                      <p>Now they drove past the boarded-up trap houses where she’d met dealers and learned how to buy a $10 bag, until her tolerance grew and she needed five or six bags each day. They continued past the corner where she’d panhandled; and the blocks of abandoned houses where she’d learned how to strip out copper wire and sell it for scrap; and the motel where she’d worked from 4 a.m. to 4 p.m., shooting up before and after each shift, the only housekeeper in a 31-room motel where the rooms were rented in three-hour blocks and the best tips were drugs left behind by customers.</p>
                      <p>They continued past a decaying apartment tower and then a small Victorian with busted windows. It reminded Amanda of a vacant house where she’d squatted for a while with a dozen other users, a rat-infested place without heat or electricity. She’d tried to make it feel like home, scrubbing the floors with Pine-Sol and hanging a poinsettia wreath on the boarded-up bedroom door. She’d met a girl there who had become like a little sister — a young runaway from Tennessee who was always using too much at once and risking an overdose.</p>
                      <div className="pullquote">“Days are forever. Do you even know how hard it is to go for one&nbsp;minute?”</div>
                      <p>“I want to go find Sammy,” Amanda said now, turning to her mother.</p>
                      <p>“What? Who’s that?” Libby said. “What about finding a clinic?”</p>
                      <p>“This is more important,” Amanda said, and so she began to explain how Sammy reminded her of herself, and how they had looked out for each other in the abandoned house. “If she sees I’m doing good, maybe I can convince her to go into rehab.”</p>
                      <p>“This better not be some kind of scheme,” Libby said, but she also remembered this side of her daughter from before the addiction — selfless, determined, enterprising, sometimes sneaking extra cash into the loans she handed out to desperate customers at the pawnshop. Maybe helping someone would boost her self-esteem.</p>
                      <p>“Okay,” Libby said. “Tell me where to go.”</p>
                      <p>“Up there,” Amanda said, pointing to a two-story building with no windows, no door and trash spilling out from the entryway. Libby pulled over and Amanda jumped out. “How long?” Libby said. “Not long,” Amanda told her, and then disappeared into the building. Libby tapped her hand against the steering wheel and stared out the window. She could see a sleeping bag and a needle near the building’s entrance. She saw something moving on the second floor. “Come on, come on,” she said, until a minute or so later Amanda stepped out.</p>
                      <p>“She’s not in there,” Amanda said. “Try that next one,” and so Libby pulled up to another decrepit house, where a few people were sitting on the porch and others were pacing outside. One of the men waved to Amanda. “Be back in a minute,” she told Libby, and then she hurried out of the car.</p>
                      <p>Libby checked the clock on her dashboard and thought about all of the other times she had watched Amanda disappear. Once she had stolen Libby’s car and run off for a week; another time she had gone out to buy a Mountain Dew and then called a few days later from Florida. “Let Go and Let God,” was the advice some other mothers had repeated in Nar-Anon group meetings, but instead Libby had gained weight from stress, developed insomnia and started losing her hair. How many times had she filed a missing persons request? How often had she called the police station, and then the hospitals, and then the morgue to ask again for Jane Doe and to describe Amanda’s birthmarks and her “Wild At Heart” tattoo?</p>
                      <p>“This was so stupid. This was a mistake,” she said now, banging her fist against the steering wheel. She checked for her keys. She felt for her wallet. It was all there, but Amanda had been gone for seven minutes. Libby sent her a text message.</p>
                      <p>“This doesn’t look good at all,” she wrote.</p>
                      <p>“I’m about to walk back,” Amanda responded.</p>
                      <p>Libby drove around the block and pulled closer to the house. She saw a man digging into his pockets. She saw other people walking up to that man carrying cash. Twelve minutes Amanda had been gone now. Libby drove around the block again, drumming her hands against the steering wheel, possibilities racing through her head. Was Amanda using? Where had she gotten the money? What had she done to get it?</p>
                      <p>She felt again for her wallet. She checked again for her keys.</p>
                      <p>“This is bullshit,” she texted to Amanda, but there was no response.</p>
                      <p>“Come on,” she wrote, and still nothing.</p>
                      <p>“So over this.”</p>
                      <p>“Come on right now.”</p>
                      <p>She started to circle the block for a third time, and then suddenly there was Amanda, walking down the sidewalk and opening the passenger door.</p>
                      <p>“What the hell was that?” Libby said.</p>
                      <p>“What do you mean?”</p>
                      <p>“Where the hell were you? Where’s Sammy?”</p>
                      <p>“I found her, and we called her parents, but she decided she didn’t want help,” Amanda said, and to prove it she handed Libby her phone and showed her a seven-minute call made to a number in Tennessee.</p>
                      <p>“So that was it?” Libby said, staring at her daughter. Her eyes were clear. Her hands were steady. She looked the same as she had when she’d left the car. Another 79 opiate addicts dying every day, but today her daughter wouldn’t be one. A 97 percent chance to relapse, but at the moment Amanda looked clean.</p>
                      <p>“Okay,” Libby said. “Let’s get the hell out of here.”</p>
                  </div>
              </div>
              <BodyPicture img={amanda_freeway} caption="Amanda speaks with Jay, a 20-year heroin user who lives under the Detroit bridge where she once spent a couple fearful nights. Amanda's opiate addiction is stretching into its 11th year, and she struggles to stay clean." />
              <div className="row no-gutters">
                  <div className={`${bodyCol}`}>
                      <p className="dropcap">She had been an admitted opiate addict for 11 years, five months and 14 days, and on almost every one of those days she had promised to quit. She had tried therapy and group counseling, inpatient and outpatient. She’d run up thousands of dollars in credit-card debt to pay for a wellness retreat in the woods, and she’d slept on a cot in the hallway of a Medicaid addiction center. She had tried flushing away her supply; and erasing every number in her phone so she couldn’t contact dealers; and waiting again on the long list to get into the city’s free medical detox; and showing up at the hospital psych ward to say that she was suicidal. She’d searched for God at 12-step meetings and instead found new dealers. She’d tried methadone and Suboxone, two synthetic opiates used to treat heroin addiction, but instead wound up abusing those synthetics to get high.</p>
                      <p>She had even tried an earlier version of the naltrexone shot a few years back, and it had helped her stay clean for five months until she relapsed. Maybe this time it would last. Nineteen hours now until her appointment. She lit a cigarette and sat down in the garage. The air was still and the neighborhood was quiet. A group of retired women walked by in visors and spandex, making their usual morning loop.</p>
                      <p>She had been warned by a doctor that it was normal in the first year of sobriety to feel “bored, flat, depressed, blah, tired, anxious” — a change in brain chemistry that exacerbated so many of the longings that made heroin appealing in the first place. “I’m not seeing what’s so great about being clean,” Amanda already had told her mother once, and in an effort to feel better she had started thinking back to a time when she was 19, hopeful and sober.</p>
                      <Supplement title="What is known of the crisis?"
                                  text="Roughly 21 to 29 percent of patients prescribed opioids for chronic pain misuse them. Between 8 and 12 percent develop an opioid use disorder. Between 8 and 12 percent develop an opioid use disorder. This issue has become a public health crisis with devastating consequences including increases in opioid misuse and related overdoses, as well as the rising incidence of neonatal abstinence syndrome due to opioid use and misuse during pregnancy. The increase in injection drug use has also contributed to the spread of infectious diseases including HIV and hepatitis C. As seen throughout the history of medicine, science can be an important part of the solution in resolving such a public health crisis." />
                      <p>For most of that year she had traveled with her husband as he drove long-haul loads. They had made it to 48 states without ever planning beyond the next week. Maybe they would stay for a while in Texas. Maybe they would move up to the Rocky Mountains in Colorado. All that sky. So many possibilities. And then eventually the job had gone away and the road had led them back to Michigan — to the trailer, to the pawnshop, to the pills, to the twins, to a dissolving marriage and a courtroom dispute for custody, and it felt to Amanda like she’d been fighting to hang on ever since.</p>
                      <p>The walkers circled past the garage on another loop. Amanda stomped out her cigarette and headed inside.</p>
                      <p>“Seventeen hours,” her mother said, greeting her.</p>
                      <p>Amanda sat down next to Libby on the couch, where Libby was watching daytime TV and scrolling through Facebook on her phone. Lately, Libby had been spending a few hours each day in a conversation group for addicts’ mothers. It had more than 20,000 members, and Libby came to them for support, advice and most of all for a reminder that the addiction overtaking her house was also ongoing for 1.6 million other chronic heroin users and 8 million abusers of prescription drugs.</p>
                      <p>“I just got the call,” read the first post of the day. “My son was alone in his hotel room. I can’t breathe.”</p>
                      <p>“OD #6 but he’s alive,” wrote another mother. “Hospital kept him a couple hours and put him back on the street barefoot in scrubs with a map.”</p>
                      <p>Libby set down her phone. She looked up at the clock. Still almost 17 hours to go. “These days are like dog years,” she said. She leaned her head against Amanda’s shoulder and kept scrolling through her phone.</p>
                      <p>“My addict son and his girlfriend were just found passed out at home with their baby crying. When does this nightmare end?”</p>
                      <p>“Dead in a walmart parking lot . . .”</p>
                      <p>“On our way to view her remains . . .”</p>
                      <p>“My daughter was last seen around midnight ...”</p>
                      <p>Libby stood up and walked into the kitchen. How many times had she reworked Amanda’s obituary in her head: a sarcastic sense of humor, a sharp wit, a patient mother of young twins, a woman so disarming that once, when agents from the Drug Enforcement Administration came to confiscate her prescription pills, she wound up dating one of the agents.</p>
                      <p>“Do you want a Mountain Dew?” Libby called out to Amanda, but when Libby looked into the living room, Amanda was pacing and talking on her phone.</p>
                      <p>“What do you mean there’s a problem with my appointment?” Amanda was saying now, and Libby started cursing under her breath.</p>
                      <p>“I really need this to happen tomorrow,” Amanda was saying, and Libby balled her fists and knocked them against the kitchen counter.</p>
                      <p>Amanda hung up and told Libby there had been a miscommunication between her Medicaid insurance and the doctor’s office. She said Medicaid needed more time to approve coverage of the shot, and without coverage it would cost more than $1,000. Instead of getting the shot in 16 hours, she would have to wait five more days.</p>
                      <p>“That’s not possible. Call back,” Libby said, because she wasn’t sure if Amanda was telling the truth or inventing a reason to put it off. Amanda dialed again. Libby stood close so she could listen.</p>
                      <p>“I’m seriously worried I’m going to relapse,” she heard Amanda say.</p>
                      <p>“Please, I’m trying to do good here,” she said. “There’s really nothing you can do?”</p>
                      <p>“Fine. See you next Tuesday,” she said, and then she hung up.</p>
                      <p>Amanda walked out to the garage to light a cigarette and Libby followed. “If this is all a big lie, just tell me now,” Libby said.</p>
                      <p>“Jesus. Can’t you ever trust me?” Amanda said. “I want this shot way more than you.”</p>
                      <p>“How are you going to make it five days?” Libby said, her tone softening. “You need a plan.”</p>
                      <p>“You’re the one freaking out,” Amanda said. “What about you?”</p>
                  </div>
              </div>
              <BodyPicture img={amanda_southwest_detroit} caption="Libby and Amanda look at urban sculpture in Detroit. Southwest Detroit had been Amanda's go-to neighborhood for heroin." />
              <div className="row no-gutters">
                  <div className={`${bodyCol}`}>
                      <p className="dropcap">Four days left to go, three days, two, and as the hours crawled by until the appointment Libby decided she needed to leave the house. She asked her husband to keep an eye on Amanda and went to have dinner with two of the women she’d met in the Facebook group for addicts’ mothers.</p>
                      <Supplement title="What is the HHS doing about it?"
                                  text="In response to the opioid crisis, the U.S. Department of Health and Human Services (HHS) is focusing its efforts on five major priorities: improving access to treatment and recovery services, promoting use of overdose-reversing drugs, strengthening our understanding of the epidemic through better public health surveillance, providing support for cutting-edge research on pain and addiction, and advancing better for pain management" />
                      <p>For nearly a decade, Libby had avoided talking to anyone about her daughter’s addiction, mostly because Amanda didn’t want people to know. “How’s Amanda doing?” friends and relatives would ask, at every graduation, wedding and baby shower, and what was Libby supposed to tell them? That while everyone else’s life was marching along in neat succession, her daughter was still sleeping late in the basement? That she was giving Amanda an allowance for cigarettes and cleaning up her moldy cereal bowls? “She’s just fine,” was what Libby had always said, until eventually people stopped asking, which felt even worse. So Libby had started spending more time at home, and then more time on Facebook, where she had connected with a group of local addicts’ mothers who had become her closest friends.</p>
                      <p>“How’s Amanda?” asked one of them, Mary Carr, as they sat down at a restaurant and ordered drinks.</p>
                      <p>“Who knows?” Libby said. “Clean? Using? You’d think by now I could figure it out, but I honestly have no idea.”</p>
                      <p>“They’re masters of manipulation,” said another mother, Dana.</p>
                      <p>“My rule at this point is don’t believe anything,” Mary said. “Otherwise you end up feeling naive. I’m done with that.”</p>
                      <p>Mary said that she had bumped into her son a few nights earlier in their neighborhood. He was 27, and he had been homeless for parts of the last 12 years, but lately he had been living with a girlfriend. He looked good and it was nice to see him, Mary said, but later that night he had called her a dozen times, harassing her and begging for money.</p>
                      <p>“Do you know how many times he’s done that?” Mary said. “So I’m finished. For the first time ever, I actually blocked him on my phone.”</p>
                      <p>“See, that’s the part I’m no good at,” Libby said. “I can’t let go. I always think I can save her.”</p>
                      <p>Libby had only been a mother for three months the first time Amanda got sick. Doctors had told her it was just a stubborn cold, until one night Libby went to check on her infant daughter and found her wheezing in the crib. The baby was turning blue. She couldn’t breathe. Libby picked her up, blew air into her mouth and rushed her to the emergency room. They stayed in the neonatal unit for the next two months as doctors ran tests to see what was wrong. Finally Amanda had been diagnosed with a severe kind of asthma, treated and sent home, and for the next year Libby had stood over her crib for a little while each night watching her breathe.</p>
                      <aside className="supplement-text callout">
                          <div>
                              <img src={libby_bracelet} style={{width: "240px"}}/>
                          </div>
                          <p className="caption text-muted pt-2 m-0" style={{width: "240px"}}>Libby wears a bracelet she bought in a fundraiser by her Facebook group for mothers of addicts.</p>
                      </aside>
                      <p>Now she had spent 11 more years trapped in that cycle — expecting her daughter to die, sacrificing her sanity to save her, and doing most of it alone. She rarely talked to her ex-husband about Amanda’s addiction; her current husband was patient and supportive, but sometimes, as Amanda's mother, Libby felt that the responsibility was mostly hers. So Libby had gone by herself to heroin awareness rallies at the state capitol. She had forced Amanda to take monthly drug tests and locked her out of the house. She had gone through the medical records Amanda left lying around and cursed out the doctors, pill mills and pharmacists who continued filling her prescriptions. She had tried, most of all, to be loving and patient with her daughter and to remember what so many experts had told her, that addiction was not a choice but a disease, even as Amanda stole her checks and then her credit cards, running up more than $50,000 of debt.</p>
                      <p>And then, finally, nine years into her daughter’s addiction, Libby had come up with a plan to be done with all of it. She had put on a bathing suit beneath her beautician uniform one morning and driven out of the city toward Kensington Lake. She had been a competitive swimmer as a teenager, but now she was out of shape. If she could swim out for a mile or so, she would be too exhausted to make it back. Nobody would see her. Nobody would hear her. She sat at a picnic table and stared out at the water. She watched a family shove their canoe into the lake. She watched two kids throwing rocks. She sat for hours until the sun descended over the water and then she got back in her car and drove home, resolved to seek help. She met with a therapist, confided in her husband, consulted with a bankruptcy lawyer and started talking regularly with the mothers she’d met online.</p>
                      <div className="pullquote">“See, that’s the part I’m no good at. I can’t let go. I always think I can&nbsp;save&nbsp;her.”</div>
                      <p>“If I cut the cord with Amanda, would she recover faster?” Libby asked them now. “Would it be easier on both of us?”</p>
                      <p>“There’s no one right way,” Mary said.</p>
                      <p>“I worry about enabling,” Libby said. “But what if I kick her out and she dies in some abandoned house? How do I live with myself?”</p>
                      <p>Nobody answered. They sat in silence for a moment and Mary reached for Libby’s hand. “You’re doing everything you can,” she said.</p>
                      <p>“I don’t know where to draw the line,” Libby said.</p>
                  </div>
              </div>
              <BodyPicture img={amanda_dentist} caption="Amanda visits a dentist in Detroit while Libby watches nearby. All of Amanda's teeth needed to be pulled, and she is being fitted for dentures." />
              <div className="row no-gutters">
                  <div className={`${bodyCol}`}>
                      <p className="dropcap">“I need your pee,” Amanda was saying to her mother now, on the last day, just hours before her appointment for the shot. She had come upstairs with darkened eyes, a runny nose and a confession.</p>
                      <p>“Excuse me? You need what?” Libby said.</p>
                      <p>“I need your pee. For the drug test. Otherwise I’m not going to pass and I can’t get the shot.”</p>
                      <p>“What are you even saying?” Libby said, and so Amanda began unwinding the lies she had been telling her mother for the past week. That day she jumped out of the car in Southwest Detroit and then disappeared for 12 minutes? She had been trying to find Sammy, but she had also been trying to buy heroin, and she hadn’t been able to find any. The appointment five days earlier that had been postponed at the last minute because of insurance? She had actually canceled it and then made a series of fake phone calls to confuse her mother. That night earlier in the week when she said she was going to sleep over with her twins? She had stayed with them for a while, played with them and taken them to a movie, but then she had found a babysitter and gone to a motel with a friend, where she had gotten high on $50 worth of methadone, a long-acting opiate that was still running through her body now.</p>
                      <p>It would be at least two weeks before the methadone was out of her system and she could pass a drug test. In two weeks, Amanda said, “I’ll probably be using and back out on the street.”</p>
                      <p>Libby started to shake her head and bite her nails, cursing under her breath. “It’s always the same with you, isn’t it?” she said.</p>
                      <p>“I need the shot now or I’ll never do it,” Amanda said. “I can deal with the sudden withdrawal.”</p>
                      <div className="pullquote">“I don’t know where to draw the&nbsp;line”</div>
                      <p>“I can’t believe you’re even asking me to do this,” Libby said, but she had already decided that she would help Amanda, even if it required going to extremes. Withdrawal might send Amanda to the emergency room, but it was still safer than going back on heroin.</p>
                      <p>Libby went into the bathroom and came out carrying a small bottle, and they drove together to a clinic wedged between a liquor store and a pharmacy near the Detroit River. Amanda checked in at the main desk and then waited outside the front door, smoking a cigarette until a nurse came out to get her. “There are a few things we need to go over first,” the nurse said, leading her back to a small exam room.</p>
                      <Supplement title="What is the NIH doing about it?"
                                  text="The National Institutes of Health (NIH), a component of HHS, is the nation’s leading medical research agency helping solve the opioid crisis via discovering new and better ways to prevent opioid misuse, treat opioid use disorders, and manage pain. In the summer of 2017, NIH met with pharmaceutical companies and academic research centers to discuss: safe, effective, non-addictive strategies to manage chronic pain; new, innovative medications and technologies to treat opioid use disorders; and improved overdose prevention and reversal interventions to save lives and support recovery. In April 2018 at the National Rx Drug Abuse and Heroin Summit, NIH Director Francis S. Collins, M.D., Ph.D., announced the launch of the HEAL (Helping to End Addiction Long-term) Initiative, an aggressive, trans-agency effort to speed scientific solutions to stem the opioid public health crisis." />
                      <p>She explained that the shot was an opiate antagonist. She explained that if Amanda still had drugs in her body the shot would cause an immediate and severe reaction: muscle spasms, cold sweats, abdominal cramps, vomiting, diarrhea, fever, impaired breathing.</p>
                      <p>“When did you last have opiates in your system,” the nurse asked.</p>
                      <p>“I’m not really sure,” Amanda said, looking down, picking at her nail&nbsp;beds.</p>
                      <p>“Has it been over 14 days?”</p>
                      <p>“I think so.”</p>
                      <p>“No heroin? No Suboxone or methadone?”</p>
                      <p>Amanda looked across the room at Libby, who stared back at her and nodded. Amanda sat for a minute and thought about telling the truth. Her appointment would be rescheduled. No shot. No muscle spasms or impaired breathing. She would be outside in a few minutes smoking a cigarette, and she could catch a ride to Southwest Detroit and be high within an hour.</p>
                      <p>“Yes. I’m clean,” Amanda said finally. “It’s probably been like 20 days.”</p>
                      <p>“We’ll need to do a drug test,” the nurse said, handing her a small cup for a urine sample. She said the test was mostly for record keeping.</p>
                      <p>“Right now?” Amanda said. “I don’t really have to go.”</p>
                      <p>“That’s fine. You can do it after the shot,” the nurse said.</p>
                      <p>The nurse left and returned with a long needle. “I’m not ready. I’m not ready,” Amanda said, and then she said to just do it and closed her eyes. The shot was over in 10 seconds. She thanked the nurse, went into the bathroom to leave Libby’s urine sample and then hurried outside. She lit a cigarette. She took a deep breath and wiggled her toes and squeezed her arms and rolled her neck and decided she felt . . . fine. “I think I’m actually okay,” she told Libby.</p>
                      <p>“You’re great. You’re clean,” Libby said. She looked at Amanda with relief and then reached over to squeeze her shoulders. “Twenty-eight days without having to worry about this nightmare.”</p>
                      <p>“I can’t believe I actually did it,” Amanda said.</p>
                      <p>“Pretty damn brave,” Libby said, but now as she looked at her daughter she saw that her face was turning pale and there was sweat on her forehead. Amanda’s right leg began to tremble. Her left leg jolted forward and she almost fell to the curb. She dropped her cigarette and crawled into the back seat of the car. “Take me to the emergency room,” she said, and Libby started driving.</p>
                      <p>By the time they arrived at the hospital 10 minutes later, Amanda was in full withdrawal because of the methadone that had still been in her system. She couldn’t stand, so Libby got her into a wheelchair. She couldn’t steady her hand to fill out the intake forms, so Libby helped do them for her.</p>
                      <p>“Heroin?” the receptionist asked, because the hospital had already seen 11 of those cases in the last 24 hours.</p>
                      <p>“Yes,” Libby said, and then added: “Recovering.”</p>
                      <p>“Okay. Have a seat and wait to be called,” the receptionist said. They sat in the waiting room for five minutes, then 10, then 30. “I need medicine,” Amanda began to moan. “Put me to sleep. Give me something.” She started to tremble and then convulse. Her arms swung wildly and collided hard against her legs. Her muscles cramped, and she slumped in the wheelchair and slid toward the floor. “Can I get some help over here?” Libby asked, but nobody answered. Amanda threw up in the bucket, in a trash can, and then all over the bathroom floor.</p>
                      <p>“How much longer until we get seen?” Libby asked, and finally after about half an hour a nurse came out to check on them.</p>
                      <p>“Sorry, ma’am,” she said. “We’ll get to you soon.”</p>
                      <p>“But there’s no one else here,” Libby said, gesturing around the empty waiting room.</p>
                      <p>“We have to go by priority,” the nurse said. “People who are having chest pain come before other things.”</p>
                      <p>“And this isn’t a priority?” Libby said, pointing to Amanda, who now was crying and saying that she needed a sedative, that she wanted to be knocked out. She had vomit caked in her hair and welts rising on her legs in the places where she’d been hitting herself.</p>
                      <p>“She’ll make it,” the nurse said, looking down at Amanda. “We see a lot of addicts in withdrawal.”</p>
                      <p>“She needs help,” Libby said, her voice rising. “It’s too much. Can’t you see that?”</p>
                      <p>The nurse walked away and then a few minutes later a doctor came out into the waiting room. He grabbed Amanda’s wheelchair and started rolling her back into triage. He told Amanda the hospital would take good care of her. He said she would be out of withdrawal and feeling better within three or four days. “Congratulations on Day One,” he said, but Amanda didn’t seem to hear him. Every nerve in her body was on fire. She was sick. She was clean. She was scared. She was feeling all of it now, so many sensations rushing in at once. “Please,” she said, reaching up for the doctor’s arm, tugging at it. “Make me feel nothing.”</p>
                  </div>
              </div>
              <div className="row no-gutters">
                  <div className={`credit-container ${bodyCol} mt-3`}>
                      <div className="credits">
                          <div className="text-muted light-font pb-1 pt-2">Story by <strong className="text-primary bold-font">Eli Saslow</strong></div>
                          <div className="text-muted light-font pb-1">Photos by <strong className="text-primary bold-font">Bonnie Jo Mount</strong></div>
                          <div className="text-muted light-font pb-1"><small>Published on July 23, 2016</small></div>
                      </div>
                      <div className="disclaimer supplement-text mt-3 pt-1">
                          <div className="small text-muted">This is a page created for educational purposes. All content from <a className="text-muted" href="https://www.washingtonpost.com/">The Washington Post.</a></div>
                      </div>
                  </div>
              </div>
          </section>
      </div>
    );
  }
}

function Supplement(props) {
    return <aside className="supplement-text callout">
        <span className="callout-title">{props.title}</span>
        <p className="m-0">{props.text}</p>
        <small className="text-muted">source
            <strong>
                <a className="text-muted" href="https://www.drugabuse.gov/drugs-abuse/opioids/opioid-overdose-crisis"> NIH</a>
            </strong>
        </small>
    </aside>
}

function BodyPicture(props) {
    return <div className="col-sm-10 offset-sm-1 col-lg-8 offset-lg-2 mb-5 pt-2 divider px-0">
        <div>
            <img className="img-responsive" src={props.img} />
        </div>
        <p className="caption text-muted pt-2">{props.caption}</p>
    </div>
}
export default App;