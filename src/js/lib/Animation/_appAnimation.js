var Animation = function(){
          
    $(document).ready(function() {
        $('#main').fullpage({
            //Navigation
            menu: '#menu',
            lockAnchors: false,
            anchors:['home', 'nextToSchool', 'gen', 'slimyBoy', 'eveningSuccess', 'dailyMasterpiece', 'contact'],
            navigation: true,
            navigationPosition: 'right',
            navigationTooltips: ['Home', 'NextToSchool', 'GEN', 'SlimyBoy', 'EveningSuccess', 'DailyMasterpiece', 'Contact'],
            showActiveTooltip: false,
            slidesNavigation: true,
            slidesNavPosition: 'bottom',

            //Scrolling
            css3: true,
            scrollingSpeed: 700,
            autoScrolling: true,
            fitToSection: true,
            fitToSectionDelay: 1000,
            scrollBar: false,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            loopBottom: false,
            loopTop: false,
            loopHorizontal: true,
            continuousVertical: false,
            scrollOverflow: false,
            touchSensitivity: 15,
            normalScrollElementTouchThreshold: 5,

            //Accessibility
            keyboardScrolling: true,
            animateAnchor: true,
            recordHistory: true,

            //Design
            controlArrows: false,
            verticalCentered: false,
            resize : false,
            sectionsColor : ['#1b1f28'],
            paddingTop: '0',
            paddingBottom: '0',
            fixedElements: '#header, .footer',
            responsiveWidth: 0,
            responsiveHeight: 0,

            //Custom selectors
            sectionSelector: '.view',
            slideSelector: '.slide',

            //events
            onLeave: function(index, nextIndex, direction){},
            afterLoad: function(anchorLink, index){},
            afterRender: function(){},
            afterResize: function(){},
            afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
            onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
        });
        
});
   
};
    
    
