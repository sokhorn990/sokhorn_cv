$(document).ready(function(){
db.collection('cv').get().then(data =>{

    $value = "";
    data.forEach(element => {
        $value+= `
				<div class="header" >
                <div class="name_role" >
                    <div class="name">
                        ${element.data().name}
                    </div> 
                    <div class="role" id="test">
                    ${element.data().position}
                    </div>
                </div>
                <div class="about" id="test">
                ${element.data().description}
                </div>
            </div>
            <div class="right_inner">
                <div class="exp">
                    <div class="title">
                        experience
                    </div>
                    <div class="exp_wrap">
                        <ul>
                            <li>
                                <div class="li_wrap">
                                    <div class="date">
                                        14, June 28, June 19
                                    </div>
                                    <div class="info">
                                        <p class="info_title">
                                            WEB Programming
                                        </p>
                                        <p class="info_cont">
                                        ${element.data().first_ex}
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="li_wrap">
                                    <div class="date">
                                        6/Jul/2020-14/Aug/2020
                                    </div>
                                    <div class="info">
                                        <p class="info_title">
                                            VC2
                                        </p>
                                        <p class="info_cont">
                                        ${element.data().sec_ex}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="education">
                    <div class="title">
                        Education
                    </div>
                    <div class="education_wrap">
                        <ul>
                            <li>
                                <div class="li_wrap">
                                    <div class="date">
                                        2008 - 2020
                                    </div>
                                    <div class="info">
                                        <p class="info_title">
                                            Computer Science
                                        </p>
                                        <p class="info_cont">
                                        ${element.data().first_edu}
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="li_wrap">
                                    <div class="date">
                                        2015-2018
                                    </div>
                                    <div class="info">
                                        <p class="info_title">
                                            Schooling
                                        </p>
                                        <p class="info_cont">
                                        ${element.data().sec_edu}
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <div class="title">
                                Soft Skill
                            </div>
                            <li>
                                <div class="li_wrap">
                                    <div class="date">
                                        <!-- 2015-2018 -->
                                    </div>
                                    <div class="info">
                                        <p class="info_title">
                                            <!-- Schooling -->
                                        </p>
                                        <p class="info_cont">
                                        ${element.data().soft_skill}
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <div class="title">
                                References
                            </div>
                            <li>
                                <div class="li_wrap">
                                    <div class="date">
                                    ${element.data().re_name}
                                    </div>
                                    <div class="info">
                                        <p class="info_title">
                                            Web trainer
                                        </p>
                                        <p class="info_cont">
                                            rith.nhel@passerellesnumeriques.org <br>
                                            096 79 89 274
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="li_wrap">
                                    <div class="date">
                                    ${element.data().reName}
                                    </div>
                                    <div class="info">
                                        <p class="info_title">
                                            English trainer at PNC
                                        </p>
                                        <p class="info_cont">
                                             lavy.hou@passerellesnumeriques.org <br> 
                                            012 72 38 77
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
        // console.log(element.data().name);
    });
    $("#contain").append($value);
})
});