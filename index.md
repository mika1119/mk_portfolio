---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: HOME

services:
  - title: "WEBサイト制作"
    desc: "Railsなどの動的サイトから、Jekyllなどの静的サイトまで、目的に合わせた構築が可能です。"
  - title: "WEBアプリの設計・開発"
    desc: "業務支援や顧客管理など、日常業務を効率化する小規模アプリを開発します。"
  - title: "サーバ環境構築"
    desc: "Nginxによる環境構築やデプロイ設定など、公開までの技術的部分も対応します。"
  - title: "画像加工・素材調整"
    desc: "WEB掲載用の写真やバナーの調整など、サイト全体の印象を整えます。"
  - title: "導入サポート"
    desc: "ドメイン取得、サーバ設定、運用まで、初めての方でも安心してスタートできるよう支援します。"
  - title: "保守・更新対応"
    desc: "公開後のテキスト修正や軽微な調整など、長く使えるサイト運営をサポートします。"

about_text: |
  福岡を拠点に、WEBサイトの制作やWEBアプリケーションの開発を行っています。

  また、子ども向けのプログラミング教育にも携わり、次世代に技術の楽しさを伝える活動も行っています。

skill_text: |
  Railsを中心に、使いやすいWEBアプリケーションづくりに取り組んでいます。

  最近はVueを使ったフロントエンド開発や、日々の業務に役立つツール開発にも力を入れています。

works_text: |
  これまでに制作したWEBサイトやシステムの一部をご紹介しています。

  実際の企業案件に加えて、技術力やデザイン性を感じていただけるよう、架空サイトも掲載しています。

contact_text: |
  WEBアプリケーションやサイト制作に関するご依頼・ご相談を受け付けています。

  ちょっとしたご相談からでも大歓迎です。お気軽にご連絡ください。
---

<section>
  {% include title.html main_title="SERVICE" sub_title="できること" %}
  {% include list.html %}
</section>

<section>
  {% include title.html main_title="ABOUT" sub_title="自己紹介" %}
  {% include contents.html image="assets/images/about.webp" alt="ABOUTのサムネイル" text=page.about_text %}
  {% include link_button.html link="about" link_name="more" %}
</section>

<section>
  {% include title.html main_title="SKILL" sub_title="技術" %}
  {% include contents.html image="assets/images/skill.webp" alt="SKILLのサムネイル" text=page.skill_text %}
  {% include link_button.html link="skill" link_name="more" %}
</section>

<section>
  {% include title.html main_title="WORKS" sub_title="制作" %}
  {% include contents.html image="assets/images/works.webp" alt="WORKSのサムネイル" text=page.works_text %}
  {% include link_button.html link="works" link_name="more" %}
</section>

<section>
  {% include title.html main_title="CONTACT" sub_title="お問い合わせ" %}
  {% include contents.html image="assets/images/contact.webp" alt="CONTACTのサムネイル" text=page.contact_text %}
  {% include link_button.html link="contact" link_name="お問い合わせはこちら" %}
</section>