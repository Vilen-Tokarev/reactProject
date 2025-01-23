import React from "react";
import Group3 from '../../../../../../../img/index/about/Group3.png'
function Cart1() {
    return (
        <div className="aboutcity__cardWrap_card1">
            <img src={Group3} alt="img" className="aboutcity__cardWrap_card1_img" />
            <p className="aboutcity__cardWrap_card1_opisanie">ОПИСАНИЕ ГОРОДА</p>
            <p className="aboutcity__cardWrap_card1_title">Туристический город Судак</p>
            <p className="aboutcity__cardWrap_card1_text1">
                Судак – небольшой курортный город на Южном берегу Крыма. Он известен хорошо сохранившимся
                памятником средневекового фортификационного искусства – Генуэзской крепостью, ежегодным фестивалем
                «Генуэзский шлем» и отличными пляжами. Расположенные в долине реки Судак городские кварталы населяет 16,5
                тысяч человек.
            </p>
            <p className="aboutcity__cardWrap_card1_text2">
                Он славится наличием немалого числа памятников архитектуры. Гости курортной территории, отдыхая
                здесь, каждый день смогут открывать для себя особенные, неизведанные уголки.
            </p>
        </div>
    )

}

export default Cart1;