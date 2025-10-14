---
layout: page
title: SKILL
permalink: /skill/

skill_text: |
  Railsを中心にWEBサイトから業務アプリまで、規模と目的に沿った最適解をご提案しています。
  
  要件定義からデータベース設計、サーバー構築まで一貫して対応できるため、小規模から中規模の案件まで柔軟に対応可能です。
  
  フロントエンドではVueやJekyllを用いた開発にも取り組んでおり、デザインと機能を両立させた制作を意識しています。

skills:
  - label: "HTML"
    val: 80
    color: "#F472B6"
  - label: "CSS"
    val: 80
    color: "#60A5FA"
  - label: "Javascript"
    val: 60
    color: "#FBBF24"
  - label: "Linux"
    val: 40
    color: "#B565B3"
  - label: "Rails"
    val: 70
    color: "#F87171"
  - label: "Vue"
    val: 50
    color: "#34D399"
  - label: "Jekyll"
    val: 30
    color: "#818CF8"
  - label: "PostgreSQL"
    val: 70
    color: "#FFCE63"
---

<section>
  {% include title.html main_title="SKILL" sub_title="技術" %}
  {% include text.html text=page.skill_text %}
</section>

<section>
  {% include circle_chart.html skills=page.skills %}
</section>