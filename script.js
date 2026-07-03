Vue.createApp({
    data(){
        return{
            name:"メニューを選んでください",
            description:""
        };
    },
    methods:{
        showSweets(sweets){
            if(sweets === "shortcake"){
                this.emoji = "🍰";
                this.name = "ショートケーキ";
                this.description = "優しい甘さのクリームにこだわったショートケーキです。";
            }else if(sweets === "applepie"){
                this.emoji = "🥧";
                this.name = "アップルパイ";
                this.description = "りんごたっぷり、ボリュームのあるアップルパイです。";
            }else if(sweets === "pancakes"){
                this.emoji = "🥞";
                this.name = "パンケーキ";
                this.description = "ふわふわのパンケーキです。メープルシロップがよく合います。";
            }
        }
    }
}).mount("#app");