 $(document).ready(function(){
     
                                                             //card 1
	
    // hover zoom card 
	$('#product-card').hover(function(){
			$(this).addClass('animate');
			$('div.carouselNext, div.carouselPrev').addClass('visible');			
		 }, function(){
			$(this).removeClass('animate');			
			$('div.carouselNext, div.carouselPrev').removeClass('visible');
	});	

	 
    // Flip card to the back side
	$('#view_details').click(function(){		
		$('div.carouselNext, div.carouselPrev').removeClass('visible');
		$('#product-card').addClass('flip-10');
		setTimeout(function(){
			$('#product-card').removeClass('flip-10').addClass('flip90').find('div.shadow').show().fadeTo( 80 , 1, function(){
				$('#product-front, #product-front div.shadow').hide();			
			});
		}, 50);
		
		setTimeout(function(){
			$('#product-card').removeClass('flip90').addClass('flip190');
			$('#product-back').show().find('div.shadow').show().fadeTo( 90 , 0);
			setTimeout(function(){				
				$('#product-card').removeClass('flip190').addClass('flip180').find('div.shadow').hide();						
				setTimeout(function(){
					$('#product-card').css('transition', '100ms ease-out');			
					$('#cx, #cy').addClass('s1');
					setTimeout(function(){$('#cx, #cy').addClass('s2');}, 100);
					setTimeout(function(){$('#cx, #cy').addClass('s3');}, 200);				
					$('div.carouselNext, div.carouselPrev').addClass('visible');				
				}, 100);
			}, 100);			
		}, 150);			
	});	
        
        
    // Flip card back to the front side
	$('#flip-back').click(function(){		
		
		$('#product-card').removeClass('flip180').addClass('flip190');
		setTimeout(function(){
			$('#product-card').removeClass('flip190').addClass('flip90');
	
			$('#product-back div.shadow').css('opacity', 0).fadeTo( 100 , 1, function(){
				$('#product-back, #product-back div.shadow').hide();
				$('#product-front, #product-front div.shadow').show();
			});
		}, 50);
		
		setTimeout(function(){
			$('#product-card').removeClass('flip90').addClass('flip-10');
			$('#product-front div.shadow').show().fadeTo( 100 , 0);
			setTimeout(function(){						
				$('#product-front div.shadow').hide();
				$('#product-card').removeClass('flip-10').css('transition', '100ms ease-out');		
				$('#cx, #cy').removeClass('s1 s2 s3');			
			}, 100);			
		}, 150);			
		
	});	
    
     
    /* ----  Image Gallery Carousel   ---- */
	
	var carousel = $('#carousel ul');
	var carouselSlideWidth = 335;
	var carouselWidth = 0;	
	var isAnimating = false;
	
	// building the width of the casousel
	$('#carousel li').each(function(){
		carouselWidth += carouselSlideWidth;
	});
	$(carousel).css('width', carouselWidth);
	
	// Load Next Image
	$('div.carouselNext').on('click', function(){
		var currentLeft = Math.abs(parseInt($(carousel).css("left")));
		var newLeft = currentLeft + carouselSlideWidth;
		if(newLeft == carouselWidth || isAnimating === true){return;}
		$('#carousel ul').css({'left': "-" + newLeft + "px",
							   "transition": "300ms ease-out"
							 });
		isAnimating = true;
		setTimeout(function(){isAnimating = false;}, 300);			
	});
	
	// Load Previous Image
	$('div.carouselPrev').on('click', function(){
		var currentLeft = Math.abs(parseInt($(carousel).css("left")));
		var newLeft = currentLeft - carouselSlideWidth;
		if(newLeft < 0  || isAnimating === true){return;}
		$('#carousel ul').css({'left': "-" + newLeft + "px",
							   "transition": "300ms ease-out"
							 });
	    isAnimating = true;
		setTimeout(function(){isAnimating = false;}, 300);			
	});    
      
     
	
                                                                 //card 2
     
      // hover zoom card
	$('#product-card2').hover(function(){
			$(this).addClass('animate');
			$('div.carouselNext2, div.carouselPrev2').addClass('visible');			
		 }, function(){
			$(this).removeClass('animate');			
			$('div.carouselNext2, div.carouselPrev2').removeClass('visible');
	});	
     
      // Flip card 2 to the back side
	$('#view_details2').click(function(){		
		$('div.carouselNext2, div.carouselPrev2').removeClass('visible');
		$('#product-card2').addClass('flip-10');
		setTimeout(function(){
			$('#product-card2').removeClass('flip-10').addClass('flip90').find('div.shadow2').show().fadeTo( 80 , 1, function(){
				$('#product-front2, #product-front2 div.shadow2').hide();			
			});
		}, 50);
		
		setTimeout(function(){
			$('#product-card2').removeClass('flip90').addClass('flip190');
			$('#product-back2').show().find('div.shadow2').show().fadeTo( 90 , 0);
			setTimeout(function(){				
				$('#product-card2').removeClass('flip190').addClass('flip180').find('div.shadow2').hide();						
				setTimeout(function(){
					$('#product-card2').css('transition', '100ms ease-out');			
					$('#cx2, #cy2').addClass('s1');
					setTimeout(function(){$('#cx2, #cy2').addClass('s2');}, 100);
					setTimeout(function(){$('#cx2, #cy2').addClass('s3');}, 200);				
					$('div.carouselNext2, div.carouselPrev2').addClass('visible');				
				}, 100);
			}, 100);			
		}, 150);			
	});	
     
     // Flip card back2 to the front side
	$('#flip-back2').click(function(){		
		
		$('#product-card2').removeClass('flip180').addClass('flip190');
		setTimeout(function(){
			$('#product-card2').removeClass('flip190').addClass('flip90');
	
			$('#product-back2 div.shadow2').css('opacity', 0).fadeTo( 100 , 1, function(){
				$('#product-back2, #product-back2 div.shadow2').hide();
				$('#product-front2, #product-front2 div.shadow2').show();
			});
		}, 50);
		
		setTimeout(function(){
			$('#product-card2').removeClass('flip90').addClass('flip-10');
			$('#product-front2 div.shadow2').show().fadeTo( 100 , 0);
			setTimeout(function(){						
				$('#product-front2 div.shadow2').hide();
				$('#product-card2').removeClass('flip-10').css('transition', '100ms ease-out');		
				$('#cx2, #cy2').removeClass('s1 s2 s3');			
			}, 100);			
		}, 150);			
		
	});	
     
     /* ----  Image Gallery 2 Carousel  2   ---- */
	
	var carousel2 = $('#carousel2 ul');
	var carousel2SlideWidth = 335;
	var carousel2Width = 0;	
	var isAnimating2 = false;
	
	// building the width of the casousel
	$('#carousel2 li').each(function(){
		carousel2Width += carousel2SlideWidth;
	});
	$(carousel2).css('width', carousel2Width);
	
	// Load Next Image
	$('div.carouselNext2').on('click', function(){
		var currentLeft2 = Math.abs(parseInt($(carousel2).css("left")));
		var newLeft2 = currentLeft2 + carousel2SlideWidth;
		if(newLeft2 == carousel2Width || isAnimating2 === true){return;}
		$('#carousel2 ul').css({'left': "-" + newLeft2 + "px",
							   "transition": "300ms ease-out"
							 });
		isAnimating2 = true;
		setTimeout(function(){isAnimating2 = false;}, 300);			
	});
	
	// Load Previous Image
	$('div.carouselPrev2').on('click', function(){
		var currentLeft2 = Math.abs(parseInt($(carousel2).css("left")));
		var newLeft2 = currentLeft2 - carousel2SlideWidth;
		if(newLeft2 < 0  || isAnimating2 === true){return;}
		$('#carousel2 ul').css({'left': "-" + newLeft2 + "px",
							   "transition": "300ms ease-out"
							 });
	    isAnimating2 = true;
		setTimeout(function(){isAnimating2 = false;}, 300);			
	});   
     
     
                                                                    //card 3
     
      // hover zoom card
	$('#product-card3').hover(function(){
			$(this).addClass('animate');
			$('div.carouselNext3, div.carouselPrev3').addClass('visible');			
		 }, function(){
			$(this).removeClass('animate');			
			$('div.carouselNext3, div.carouselPrev3').removeClass('visible');
	});	
     
      // Flip card 3 to the back side
	$('#view_details3').click(function(){		
		$('div.carouselNext3, div.carouselPrev3').removeClass('visible');
		$('#product-card3').addClass('flip-10');
		setTimeout(function(){
			$('#product-card3').removeClass('flip-10').addClass('flip90').find('div.shadow3').show().fadeTo( 80 , 1, function(){
				$('#product-front3, #product-front3 div.shadow3').hide();			
			});
		}, 50);
		
		setTimeout(function(){
			$('#product-card3').removeClass('flip90').addClass('flip190');
			$('#product-back3').show().find('div.shadow3').show().fadeTo( 90 , 0);
			setTimeout(function(){				
				$('#product-card3').removeClass('flip190').addClass('flip180').find('div.shadow3').hide();						
				setTimeout(function(){
					$('#product-card3').css('transition', '100ms ease-out');			
					$('#cx3, #cy3').addClass('s1');
					setTimeout(function(){$('#cx3, #cy3').addClass('s2');}, 100);
					setTimeout(function(){$('#cx3, #cy3').addClass('s3');}, 200);				
					$('div.carouselNext3, div.carouselPrev3').addClass('visible');				
				}, 100);
			}, 100);			
		}, 150);			
	});	
     
     // Flip card back3 to the front side
	$('#flip-back3').click(function(){		
		
		$('#product-card3').removeClass('flip180').addClass('flip190');
		setTimeout(function(){
			$('#product-card3').removeClass('flip190').addClass('flip90');
	
			$('#product-back3 div.shadow3').css('opacity', 0).fadeTo( 100 , 1, function(){
				$('#product-back3, #product-back3 div.shadow3').hide();
				$('#product-front3, #product-front3 div.shadow3').show();
			});
		}, 50);
		
		setTimeout(function(){
			$('#product-card3').removeClass('flip90').addClass('flip-10');
			$('#product-front3 div.shadow3').show().fadeTo( 100 , 0);
			setTimeout(function(){						
				$('#product-front3 div.shadow3').hide();
				$('#product-card3').removeClass('flip-10').css('transition', '100ms ease-out');		
				$('#cx3, #cy3').removeClass('s1 s2 s3');			
			}, 100);			
		}, 150);			
		
	});	
     
     /* ----  Image Gallery 3 Carousel  3   ---- */
	
	var carousel3 = $('#carousel3 ul');
	var carousel3SlideWidth = 335;
	var carousel3Width = 0;	
	var isAnimating3 = false;
	
	// building the width of the casousel
	$('#carousel3 li').each(function(){
		carousel3Width += carousel3SlideWidth;
	});
	$(carousel3).css('width', carousel3Width);
	
	// Load Next Image
	$('div.carouselNext3').on('click', function(){
		var currentLeft3 = Math.abs(parseInt($(carousel3).css("left")));
		var newLeft3 = currentLeft3 + carousel3SlideWidth;
		if(newLeft3 == carousel3Width || isAnimating3 === true){return;}
		$('#carousel3 ul').css({'left': "-" + newLeft3 + "px",
							   "transition": "300ms ease-out"
							 });
		isAnimating3 = true;
		setTimeout(function(){isAnimating3 = false;}, 300);			
	});
	
	// Load Previous Image
	$('div.carouselPrev3').on('click', function(){
		var currentLeft3 = Math.abs(parseInt($(carousel3).css("left")));
		var newLeft3 = currentLeft3 - carousel3SlideWidth;
		if(newLeft3 < 0  || isAnimating3 === true){return;}
		$('#carousel3 ul').css({'left': "-" + newLeft3 + "px",
							   "transition": "300ms ease-out"
							 });
	    isAnimating3 = true;
		setTimeout(function(){isAnimating3 = false;}, 300);			
	});
     
                                                                   //card 4
     
      // hover zoom card
	$('#product-card4').hover(function(){
			$(this).addClass('animate');
			$('div.carouselNext4, div.carouselPrev4').addClass('visible');			
		 }, function(){
			$(this).removeClass('animate');			
			$('div.carouselNext4, div.carouselPrev4').removeClass('visible');
	});	
     
      // Flip card 4 to the back side
	$('#view_details4').click(function(){		
		$('div.carouselNext4, div.carouselPrev4').removeClass('visible');
		$('#product-card4').addClass('flip-10');
		setTimeout(function(){
			$('#product-card4').removeClass('flip-10').addClass('flip90').find('div.shadow4').show().fadeTo( 80 , 1, function(){
				$('#product-front4, #product-front4 div.shadow4').hide();			
			});
		}, 50);
		
		setTimeout(function(){
			$('#product-card4').removeClass('flip90').addClass('flip190');
			$('#product-back4').show().find('div.shadow4').show().fadeTo( 90 , 0);
			setTimeout(function(){				
				$('#product-card4').removeClass('flip190').addClass('flip180').find('div.shadow4').hide();						
				setTimeout(function(){
					$('#product-card4').css('transition', '100ms ease-out');			
					$('#cx4, #cy4').addClass('s1');
					setTimeout(function(){$('#cx4, #cy4').addClass('s2');}, 100);
					setTimeout(function(){$('#cx4, #cy4').addClass('s3');}, 200);				
					$('div.carouselNext4, div.carouselPrev4').addClass('visible');				
				}, 100);
			}, 100);			
		}, 150);			
	});	
     
     // Flip card back4 to the front side
	$('#flip-back4').click(function(){		
		
		$('#product-card4').removeClass('flip180').addClass('flip190');
		setTimeout(function(){
			$('#product-card4').removeClass('flip190').addClass('flip90');
	
			$('#product-back4 div.shadow4').css('opacity', 0).fadeTo( 100 , 1, function(){
				$('#product-back4, #product-back4 div.shadow4').hide();
				$('#product-front4, #product-front4 div.shadow4').show();
			});
		}, 50);
		
		setTimeout(function(){
			$('#product-card4').removeClass('flip90').addClass('flip-10');
			$('#product-front4 div.shadow4').show().fadeTo( 100 , 0);
			setTimeout(function(){						
				$('#product-front4 div.shadow4').hide();
				$('#product-card4').removeClass('flip-10').css('transition', '100ms ease-out');		
				$('#cx4, #cy4').removeClass('s1 s2 s3');			
			}, 100);			
		}, 150);			
		
	});	
     
     /* ----  Image Gallery 4 Carousel  4   ---- */
	
	var carousel4 = $('#carousel4 ul');
	var carousel4SlideWidth = 335;
	var carousel4Width = 0;	
	var isAnimating4 = false;
	
	// building the width of the casousel
	$('#carousel4 li').each(function(){
		carousel4Width += carousel4SlideWidth;
	});
	$(carousel4).css('width', carousel4Width);
	
	// Load Next Image
	$('div.carouselNext4').on('click', function(){
		var currentLeft4 = Math.abs(parseInt($(carousel4).css("left")));
		var newLeft4 = currentLeft4 + carousel4SlideWidth;
		if(newLeft4 == carousel4Width || isAnimating4 === true){return;}
		$('#carousel4 ul').css({'left': "-" + newLeft4 + "px",
							   "transition": "300ms ease-out"
							 });
		isAnimating4 = true;
		setTimeout(function(){isAnimating4 = false;}, 300);			
	});
	
	// Load Previous Image
	$('div.carouselPrev4').on('click', function(){
		var currentLeft4 = Math.abs(parseInt($(carousel4).css("left")));
		var newLeft4 = currentLeft4 - carousel4SlideWidth;
		if(newLeft4 < 0  || isAnimating4 === true){return;}
		$('#carousel4 ul').css({'left': "-" + newLeft4 + "px",
							   "transition": "300ms ease-out"
							 });
	    isAnimating4 = true;
		setTimeout(function(){isAnimating4 = false;}, 300);			
	}); 
     
     
                                                                      //card 5
     
      // hover zoom card
	$('#product-card5').hover(function(){
			$(this).addClass('animate');
			$('div.carouselNext5, div.carouselPrev5').addClass('visible');			
		 }, function(){
			$(this).removeClass('animate');			
			$('div.carouselNext5, div.carouselPrev5').removeClass('visible');
	});	
     
      // Flip card 5 to the back side
	$('#view_details5').click(function(){		
		$('div.carouselNext5, div.carouselPrev5').removeClass('visible');
		$('#product-card5').addClass('flip-10');
		setTimeout(function(){
			$('#product-card5').removeClass('flip-10').addClass('flip90').find('div.shadow5').show().fadeTo( 80 , 1, function(){
				$('#product-front5, #product-front5 div.shadow5').hide();			
			});
		}, 50);
		
		setTimeout(function(){
			$('#product-card5').removeClass('flip90').addClass('flip190');
			$('#product-back5').show().find('div.shadow5').show().fadeTo( 90 , 0);
			setTimeout(function(){				
				$('#product-card5').removeClass('flip190').addClass('flip180').find('div.shadow5').hide();						
				setTimeout(function(){
					$('#product-card5').css('transition', '100ms ease-out');			
					$('#cx5, #cy5').addClass('s1');
					setTimeout(function(){$('#cx5, #cy5').addClass('s2');}, 100);
					setTimeout(function(){$('#cx5, #cy5').addClass('s3');}, 200);				
					$('div.carouselNext5, div.carouselPrev5').addClass('visible');				
				}, 100);
			}, 100);			
		}, 150);			
	});	
     
     // Flip card back5 to the front side
	$('#flip-back5').click(function(){		
		
		$('#product-card5').removeClass('flip180').addClass('flip190');
		setTimeout(function(){
			$('#product-card5').removeClass('flip190').addClass('flip90');
	
			$('#product-back5 div.shadow5').css('opacity', 0).fadeTo( 100 , 1, function(){
				$('#product-back5, #product-back5 div.shadow5').hide();
				$('#product-front5, #product-front5 div.shadow5').show();
			});
		}, 50);
		
		setTimeout(function(){
			$('#product-card5').removeClass('flip90').addClass('flip-10');
			$('#product-front5 div.shadow5').show().fadeTo( 100 , 0);
			setTimeout(function(){						
				$('#product-front5 div.shadow5').hide();
				$('#product-card5').removeClass('flip-10').css('transition', '100ms ease-out');		
				$('#cx5, #cy5').removeClass('s1 s2 s3');			
			}, 100);			
		}, 150);			
		
	});	
     
     /* ----  Image Gallery 5 Carousel  5   ---- */
	
	var carousel5 = $('#carousel5 ul');
	var carousel5SlideWidth = 335;
	var carousel5Width = 0;	
	var isAnimating5 = false;
	
	// building the width of the casousel
	$('#carousel5 li').each(function(){
		carousel5Width += carousel5SlideWidth;
	});
	$(carousel5).css('width', carousel5Width);
	
	// Load Next Image
	$('div.carouselNext5').on('click', function(){
		var currentLeft5 = Math.abs(parseInt($(carousel5).css("left")));
		var newLeft5 = currentLeft5 + carousel5SlideWidth;
		if(newLeft5 == carousel5Width || isAnimating5 === true){return;}
		$('#carousel5 ul').css({'left': "-" + newLeft5 + "px",
							   "transition": "300ms ease-out"
							 });
		isAnimating5 = true;
		setTimeout(function(){isAnimating5 = false;}, 300);			
	});
	
	// Load Previous Image
	$('div.carouselPrev5').on('click', function(){
		var currentLeft5 = Math.abs(parseInt($(carousel5).css("left")));
		var newLeft5 = currentLeft5 - carousel5SlideWidth;
		if(newLeft5 < 0  || isAnimating5 === true){return;}
		$('#carousel5 ul').css({'left': "-" + newLeft5 + "px",
							   "transition": "300ms ease-out"
							 });
	    isAnimating5 = true;
		setTimeout(function(){isAnimating5 = false;}, 300);			
	}); 
     
     
                                                               //card 6
     
      // hover zoom card
	$('#product-card6').hover(function(){
			$(this).addClass('animate');
			$('div.carouselNext6, div.carouselPrev6').addClass('visible');			
		 }, function(){
			$(this).removeClass('animate');			
			$('div.carouselNext6, div.carouselPrev6').removeClass('visible');
	});	
     
      // Flip card 6 to the back side
	$('#view_details6').click(function(){		
		$('div.carouselNext6, div.carouselPrev6').removeClass('visible');
		$('#product-card6').addClass('flip-10');
		setTimeout(function(){
			$('#product-card6').removeClass('flip-10').addClass('flip90').find('div.shadow6').show().fadeTo( 80 , 1, function(){
				$('#product-front6, #product-front6 div.shadow6').hide();			
			});
		}, 50);
		
		setTimeout(function(){
			$('#product-card6').removeClass('flip90').addClass('flip190');
			$('#product-back6').show().find('div.shadow6').show().fadeTo( 90 , 0);
			setTimeout(function(){				
				$('#product-card6').removeClass('flip190').addClass('flip180').find('div.shadow6').hide();						
				setTimeout(function(){
					$('#product-card6').css('transition', '100ms ease-out');			
					$('#cx6, #cy6').addClass('s1');
					setTimeout(function(){$('#cx6, #cy6').addClass('s2');}, 100);
					setTimeout(function(){$('#cx6, #cy6').addClass('s3');}, 200);				
					$('div.carouselNext6, div.carouselPrev6').addClass('visible');				
				}, 100);
			}, 100);			
		}, 150);			
	});	
     
     // Flip card back6 to the front side
	$('#flip-back6').click(function(){		
		
		$('#product-card6').removeClass('flip180').addClass('flip190');
		setTimeout(function(){
			$('#product-card6').removeClass('flip190').addClass('flip90');
	
			$('#product-back6 div.shadow6').css('opacity', 0).fadeTo( 100 , 1, function(){
				$('#product-back6, #product-back6 div.shadow6').hide();
				$('#product-front6, #product-front6 div.shadow6').show();
			});
		}, 50);
		
		setTimeout(function(){
			$('#product-card6').removeClass('flip90').addClass('flip-10');
			$('#product-front6 div.shadow6').show().fadeTo( 100 , 0);
			setTimeout(function(){						
				$('#product-front6 div.shadow6').hide();
				$('#product-card6').removeClass('flip-10').css('transition', '100ms ease-out');		
				$('#cx6, #cy6').removeClass('s1 s2 s3');			
			}, 100);			
		}, 150);			
		
	});	
     
     /* ----  Image Gallery 6 Carousel  6   ---- */
	
	var carousel6 = $('#carousel6 ul');
	var carousel6SlideWidth = 335;
	var carousel6Width = 0;	
	var isAnimating6 = false;
	
	// building the width of the casousel
	$('#carousel6 li').each(function(){
		carousel6Width += carousel6SlideWidth;
	});
	$(carousel6).css('width', carousel6Width);
	
	// Load Next Image
	$('div.carouselNext6').on('click', function(){
		var currentLeft6 = Math.abs(parseInt($(carousel6).css("left")));
		var newLeft6 = currentLeft6 + carousel6SlideWidth;
		if(newLeft6 == carousel6Width || isAnimating6 === true){return;}
		$('#carousel6 ul').css({'left': "-" + newLeft6 + "px",
							   "transition": "300ms ease-out"
							 });
		isAnimating6 = true;
		setTimeout(function(){isAnimating6 = false;}, 300);			
	});
	
	// Load Previous Image
	$('div.carouselPrev6').on('click', function(){
		var currentLeft6 = Math.abs(parseInt($(carousel6).css("left")));
		var newLeft6 = currentLeft6 - carousel6SlideWidth;
		if(newLeft6 < 0  || isAnimating6 === true){return;}
		$('#carousel6 ul').css({'left': "-" + newLeft6 + "px",
							   "transition": "300ms ease-out"
							 });
	    isAnimating6 = true;
		setTimeout(function(){isAnimating6 = false;}, 300);			
	}); 
    
                                                                   //card 7
     
      // hover zoom card
	$('#product-card7').hover(function(){
			$(this).addClass('animate');
			$('div.carouselNext7, div.carouselPrev7').addClass('visible');			
		 }, function(){
			$(this).removeClass('animate');			
			$('div.carouselNext7, div.carouselPrev7').removeClass('visible');
	});	
     
      // Flip card 7 to the back side
	$('#view_details7').click(function(){		
		$('div.carouselNext7, div.carouselPrev7').removeClass('visible');
		$('#product-card7').addClass('flip-10');
		setTimeout(function(){
			$('#product-card7').removeClass('flip-10').addClass('flip90').find('div.shadow7').show().fadeTo( 80 , 1, function(){
				$('#product-front7, #product-front7 div.shadow7').hide();			
			});
		}, 50);
		
		setTimeout(function(){
			$('#product-card7').removeClass('flip90').addClass('flip190');
			$('#product-back7').show().find('div.shadow7').show().fadeTo( 90 , 0);
			setTimeout(function(){				
				$('#product-card7').removeClass('flip190').addClass('flip180').find('div.shadow7').hide();						
				setTimeout(function(){
					$('#product-card7').css('transition', '100ms ease-out');			
					$('#cx7, #cy7').addClass('s1');
					setTimeout(function(){$('#cx7, #cy7').addClass('s2');}, 100);
					setTimeout(function(){$('#cx7, #cy7').addClass('s3');}, 200);				
					$('div.carouselNext7, div.carouselPrev7').addClass('visible');				
				}, 100);
			}, 100);			
		}, 150);			
	});	
     
     // Flip card back7 to the front side
	$('#flip-back7').click(function(){		
		
		$('#product-card7').removeClass('flip180').addClass('flip190');
		setTimeout(function(){
			$('#product-card7').removeClass('flip190').addClass('flip90');
	
			$('#product-back7 div.shadow7').css('opacity', 0).fadeTo( 100 , 1, function(){
				$('#product-back7, #product-back7 div.shadow7').hide();
				$('#product-front7, #product-front7 div.shadow7').show();
			});
		}, 50);
		
		setTimeout(function(){
			$('#product-card7').removeClass('flip90').addClass('flip-10');
			$('#product-front7 div.shadow7').show().fadeTo( 100 , 0);
			setTimeout(function(){						
				$('#product-front7 div.shadow7').hide();
				$('#product-card7').removeClass('flip-10').css('transition', '100ms ease-out');		
				$('#cx7, #cy7').removeClass('s1 s2 s3');			
			}, 100);			
		}, 150);			
		
	});	
     
     /* ----  Image Gallery 7 Carousel  7   ---- */
	
	var carousel7 = $('#carousel7 ul');
	var carousel7SlideWidth = 335;
	var carousel7Width = 0;	
	var isAnimating7 = false;
	
	// building the width of the casousel
	$('#carousel7 li').each(function(){
		carousel7Width += carousel7SlideWidth;
	});
	$(carousel7).css('width', carousel7Width);
	
	// Load Next Image
	$('div.carouselNext7').on('click', function(){
		var currentLeft7 = Math.abs(parseInt($(carousel7).css("left")));
		var newLeft7 = currentLeft7 + carousel7SlideWidth;
		if(newLeft7 == carousel7Width || isAnimating7 === true){return;}
		$('#carousel7 ul').css({'left': "-" + newLeft7 + "px",
							   "transition": "300ms ease-out"
							 });
		isAnimating7 = true;
		setTimeout(function(){isAnimating7 = false;}, 300);			
	});
	
	// Load Previous Image
	$('div.carouselPrev7').on('click', function(){
		var currentLeft7 = Math.abs(parseInt($(carousel7).css("left")));
		var newLeft7 = currentLeft7 - carousel7SlideWidth;
		if(newLeft7 < 0  || isAnimating7 === true){return;}
		$('#carousel7 ul').css({'left': "-" + newLeft7 + "px",
							   "transition": "300ms ease-out"
							 });
	    isAnimating7 = true;
		setTimeout(function(){isAnimating7 = false;}, 300);			
	});  
     
                                                               //card 8
     
      // hover zoom card
	$('#product-card8').hover(function(){
			$(this).addClass('animate');
			$('div.carouselNext8, div.carouselPrev8').addClass('visible');			
		 }, function(){
			$(this).removeClass('animate');			
			$('div.carouselNext8, div.carouselPrev8').removeClass('visible');
	});	
     
      // Flip card 8 to the back side
	$('#view_details8').click(function(){		
		$('div.carouselNext8, div.carouselPrev8').removeClass('visible');
		$('#product-card8').addClass('flip-10');
		setTimeout(function(){
			$('#product-card8').removeClass('flip-10').addClass('flip90').find('div.shadow8').show().fadeTo( 80 , 1, function(){
				$('#product-front8, #product-front8 div.shadow8').hide();			
			});
		}, 50);
		
		setTimeout(function(){
			$('#product-card8').removeClass('flip90').addClass('flip190');
			$('#product-back8').show().find('div.shadow8').show().fadeTo( 90 , 0);
			setTimeout(function(){				
				$('#product-card8').removeClass('flip190').addClass('flip180').find('div.shadow8').hide();						
				setTimeout(function(){
					$('#product-card8').css('transition', '100ms ease-out');			
					$('#cx8, #cy8').addClass('s1');
					setTimeout(function(){$('#cx8, #cy8').addClass('s2');}, 100);
					setTimeout(function(){$('#cx8, #cy8').addClass('s3');}, 200);				
					$('div.carouselNext8, div.carouselPrev8').addClass('visible');				
				}, 100);
			}, 100);			
		}, 150);			
	});	
     
     // Flip card back8 to the front side
	$('#flip-back8').click(function(){		
		
		$('#product-card8').removeClass('flip180').addClass('flip190');
		setTimeout(function(){
			$('#product-card8').removeClass('flip190').addClass('flip90');
	
			$('#product-back8 div.shadow8').css('opacity', 0).fadeTo( 100 , 1, function(){
				$('#product-back8, #product-back8 div.shadow8').hide();
				$('#product-front8, #product-front8 div.shadow8').show();
			});
		}, 50);
		
		setTimeout(function(){
			$('#product-card8').removeClass('flip90').addClass('flip-10');
			$('#product-front8 div.shadow8').show().fadeTo( 100 , 0);
			setTimeout(function(){						
				$('#product-front8 div.shadow8').hide();
				$('#product-card8').removeClass('flip-10').css('transition', '100ms ease-out');		
				$('#cx8, #cy8').removeClass('s1 s2 s3');			
			}, 100);			
		}, 150);			
		
	});	
     
     /* ----  Image Gallery 8 Carousel  8   ---- */
	
	var carousel8 = $('#carousel8 ul');
	var carousel8SlideWidth = 335;
	var carousel8Width = 0;	
	var isAnimating8 = false;
	
	// building the width of the casousel
	$('#carousel8 li').each(function(){
		carousel8Width += carousel8SlideWidth;
	});
	$(carousel8).css('width', carousel8Width);
	
	// Load Next Image
	$('div.carouselNext8').on('click', function(){
		var currentLeft8 = Math.abs(parseInt($(carousel8).css("left")));
		var newLeft8 = currentLeft8 + carousel8SlideWidth;
		if(newLeft8 == carousel8Width || isAnimating8 === true){return;}
		$('#carousel8 ul').css({'left': "-" + newLeft8 + "px",
							   "transition": "300ms ease-out"
							 });
		isAnimating8 = true;
		setTimeout(function(){isAnimating8 = false;}, 300);			
	});
	
	// Load Previous Image
	$('div.carouselPrev8').on('click', function(){
		var currentLeft8 = Math.abs(parseInt($(carousel8).css("left")));
		var newLeft8 = currentLeft8 - carousel8SlideWidth;
		if(newLeft8 < 0  || isAnimating8 === true){return;}
		$('#carousel8 ul').css({'left': "-" + newLeft8 + "px",
							   "transition": "300ms ease-out"
							 });
	    isAnimating8 = true;
		setTimeout(function(){isAnimating8 = false;}, 300);			
	}); 
     
                                                             //card 9
     
      // hover zoom card
	$('#product-card9').hover(function(){
			$(this).addClass('animate');
			$('div.carouselNext9, div.carouselPrev9').addClass('visible');			
		 }, function(){
			$(this).removeClass('animate');			
			$('div.carouselNext9, div.carouselPrev9').removeClass('visible');
	});	
     
      // Flip card 9 to the back side
	$('#view_details9').click(function(){		
		$('div.carouselNext9, div.carouselPrev9').removeClass('visible');
		$('#product-card9').addClass('flip-10');
		setTimeout(function(){
			$('#product-card9').removeClass('flip-10').addClass('flip90').find('div.shadow9').show().fadeTo( 80 , 1, function(){
				$('#product-front9, #product-front9 div.shadow9').hide();			
			});
		}, 50);
		
		setTimeout(function(){
			$('#product-card9').removeClass('flip90').addClass('flip190');
			$('#product-back9').show().find('div.shadow9').show().fadeTo( 90 , 0);
			setTimeout(function(){				
				$('#product-card9').removeClass('flip190').addClass('flip180').find('div.shadow9').hide();						
				setTimeout(function(){
					$('#product-card9').css('transition', '100ms ease-out');			
					$('#cx9, #cy9').addClass('s1');
					setTimeout(function(){$('#cx9, #cy9').addClass('s2');}, 100);
					setTimeout(function(){$('#cx9, #cy9').addClass('s3');}, 200);				
					$('div.carouselNext9, div.carouselPrev9').addClass('visible');				
				}, 100);
			}, 100);			
		}, 150);			
	});	
     
     // Flip card back9 to the front side
	$('#flip-back9').click(function(){		
		
		$('#product-card9').removeClass('flip180').addClass('flip190');
		setTimeout(function(){
			$('#product-card9').removeClass('flip190').addClass('flip90');
	
			$('#product-back9 div.shadow9').css('opacity', 0).fadeTo( 100 , 1, function(){
				$('#product-back9, #product-back9 div.shadow9').hide();
				$('#product-front9, #product-front9 div.shadow9').show();
			});
		}, 50);
		
		setTimeout(function(){
			$('#product-card9').removeClass('flip90').addClass('flip-10');
			$('#product-front9 div.shadow9').show().fadeTo( 100 , 0);
			setTimeout(function(){						
				$('#product-front9 div.shadow9').hide();
				$('#product-card9').removeClass('flip-10').css('transition', '100ms ease-out');		
				$('#cx9, #cy9').removeClass('s1 s2 s3');			
			}, 100);			
		}, 150);			
		
	});	
     
     /* ----  Image Gallery 9 Carousel  9   ---- */
	
	var carousel9 = $('#carousel9 ul');
	var carousel9SlideWidth = 335;
	var carousel9Width = 0;	
	var isAnimating9 = false;
	
	// building the width of the casousel
	$('#carousel9 li').each(function(){
		carousel9Width += carousel9SlideWidth;
	});
	$(carousel9).css('width', carousel9Width);
	
	// Load Next Image
	$('div.carouselNext9').on('click', function(){
		var currentLeft9 = Math.abs(parseInt($(carousel9).css("left")));
		var newLeft9 = currentLeft9 + carousel9SlideWidth;
		if(newLeft9 == carousel9Width || isAnimating9 === true){return;}
		$('#carousel9 ul').css({'left': "-" + newLeft9 + "px",
							   "transition": "300ms ease-out"
							 });
		isAnimating9 = true;
		setTimeout(function(){isAnimating9 = false;}, 300);			
	});
	
	// Load Previous Image
	$('div.carouselPrev9').on('click', function(){
		var currentLeft9 = Math.abs(parseInt($(carousel9).css("left")));
		var newLeft9 = currentLeft9 - carousel9SlideWidth;
		if(newLeft9 < 0  || isAnimating9 === true){return;}
		$('#carousel9 ul').css({'left': "-" + newLeft9 + "px",
							   "transition": "300ms ease-out"
							 });
	    isAnimating9 = true;
		setTimeout(function(){isAnimating9 = false;}, 300);			
	}); 
     
                                                          //card 10
     
      // hover zoom card
	$('#product-card10').hover(function(){
			$(this).addClass('animate');
			$('div.carouselNext10, div.carouselPrev10').addClass('visible');			
		 }, function(){
			$(this).removeClass('animate');			
			$('div.carouselNext10, div.carouselPrev10').removeClass('visible');
	});	
     
      // Flip card 10 to the back side
	$('#view_details10').click(function(){		
		$('div.carouselNext10, div.carouselPrev10').removeClass('visible');
		$('#product-card10').addClass('flip-10');
		setTimeout(function(){
			$('#product-card10').removeClass('flip-10').addClass('flip90').find('div.shadow10').show().fadeTo( 80 , 1, function(){
				$('#product-front10, #product-front10 div.shadow10').hide();			
			});
		}, 50);
		
		setTimeout(function(){
			$('#product-card10').removeClass('flip90').addClass('flip190');
			$('#product-back10').show().find('div.shadow10').show().fadeTo( 90 , 0);
			setTimeout(function(){				
				$('#product-card10').removeClass('flip190').addClass('flip180').find('div.shadow10').hide();						
				setTimeout(function(){
					$('#product-card10').css('transition', '100ms ease-out');			
					$('#cx10, #cy10').addClass('s1');
					setTimeout(function(){$('#cx10, #cy10').addClass('s2');}, 100);
					setTimeout(function(){$('#cx10, #cy10').addClass('s3');}, 200);				
					$('div.carouselNext10, div.carouselPrev10').addClass('visible');				
				}, 100);
			}, 100);			
		}, 150);			
	});	
     
     // Flip card back10 to the front side
	$('#flip-back10').click(function(){		
		
		$('#product-card10').removeClass('flip180').addClass('flip190');
		setTimeout(function(){
			$('#product-card10').removeClass('flip190').addClass('flip90');
	
			$('#product-back10 div.shadow10').css('opacity', 0).fadeTo( 100 , 1, function(){
				$('#product-back10, #product-back10 div.shadow10').hide();
				$('#product-front10, #product-front10 div.shadow10').show();
			});
		}, 50);
		
		setTimeout(function(){
			$('#product-card10').removeClass('flip90').addClass('flip-10');
			$('#product-front10 div.shadow10').show().fadeTo( 100 , 0);
			setTimeout(function(){						
				$('#product-front10 div.shadow10').hide();
				$('#product-card10').removeClass('flip-10').css('transition', '100ms ease-out');		
				$('#cx10, #cy10').removeClass('s1 s2 s3');			
			}, 100);			
		}, 150);			
		
	});	
     
     /* ----  Image Gallery 10 Carousel  10   ---- */
	
	var carousel10 = $('#carousel10 ul');
	var carousel10SlideWidth = 335;
	var carousel10Width = 0;	
	var isAnimating10 = false;
	
	// building the width of the casousel
	$('#carousel10 li').each(function(){
		carousel10Width += carousel10SlideWidth;
	});
	$(carousel10).css('width', carousel10Width);
	
	// Load Next Image
	$('div.carouselNext10').on('click', function(){
		var currentLeft10 = Math.abs(parseInt($(carousel10).css("left")));
		var newLeft10 = currentLeft10 + carousel10SlideWidth;
		if(newLeft10 == carousel10Width || isAnimating10 === true){return;}
		$('#carousel10 ul').css({'left': "-" + newLeft10 + "px",
							   "transition": "300ms ease-out"
							 });
		isAnimating10 = true;
		setTimeout(function(){isAnimating10 = false;}, 300);			
	});
	
	// Load Previous Image
	$('div.carouselPrev10').on('click', function(){
		var currentLeft10 = Math.abs(parseInt($(carousel10).css("left")));
		var newLeft10 = currentLeft10 - carousel10SlideWidth;
		if(newLeft10 < 0  || isAnimating10 === true){return;}
		$('#carousel10 ul').css({'left': "-" + newLeft10 + "px",
							   "transition": "300ms ease-out"
							 });
	    isAnimating10 = true;
		setTimeout(function(){isAnimating10 = false;}, 300);			
	}); 
     
     
                                                            //card 11
     
      // hover zoom card
	$('#product-card11').hover(function(){
			$(this).addClass('animate');
			$('div.carouselNext11, div.carouselPrev11').addClass('visible');			
		 }, function(){
			$(this).removeClass('animate');			
			$('div.carouselNext11, div.carouselPrev11').removeClass('visible');
	});	
     
      // Flip card 11 to the back side
	$('#view_details11').click(function(){		
		$('div.carouselNext11, div.carouselPrev11').removeClass('visible');
		$('#product-card11').addClass('flip-10');
		setTimeout(function(){
			$('#product-card11').removeClass('flip-10').addClass('flip90').find('div.shadow11').show().fadeTo( 80 , 1, function(){
				$('#product-front11, #product-front11 div.shadow11').hide();			
			});
		}, 50);
		
		setTimeout(function(){
			$('#product-card11').removeClass('flip90').addClass('flip190');
			$('#product-back11').show().find('div.shadow11').show().fadeTo( 90 , 0);
			setTimeout(function(){				
				$('#product-card11').removeClass('flip190').addClass('flip180').find('div.shadow11').hide();						
				setTimeout(function(){
					$('#product-card11').css('transition', '100ms ease-out');			
					$('#cx11, #cy11').addClass('s1');
					setTimeout(function(){$('#cx11, #cy11').addClass('s2');}, 100);
					setTimeout(function(){$('#cx11, #cy11').addClass('s3');}, 200);				
					$('div.carouselNext11, div.carouselPrev11').addClass('visible');				
				}, 100);
			}, 100);			
		}, 150);			
	});	
     
     // Flip card back11 to the front side
	$('#flip-back11').click(function(){		
		
		$('#product-card11').removeClass('flip180').addClass('flip190');
		setTimeout(function(){
			$('#product-card11').removeClass('flip190').addClass('flip90');
	
			$('#product-back11 div.shadow11').css('opacity', 0).fadeTo( 100 , 1, function(){
				$('#product-back11, #product-back11 div.shadow11').hide();
				$('#product-front11, #product-front11 div.shadow11').show();
			});
		}, 50);
		
		setTimeout(function(){
			$('#product-card11').removeClass('flip90').addClass('flip-10');
			$('#product-front11 div.shadow11').show().fadeTo( 100 , 0);
			setTimeout(function(){						
				$('#product-front11 div.shadow11').hide();
				$('#product-card11').removeClass('flip-10').css('transition', '100ms ease-out');		
				$('#cx11, #cy11').removeClass('s1 s2 s3');			
			}, 100);			
		}, 150);			
		
	});	
     
     /* ----  Image Gallery 11 Carousel  11   ---- */
	
	var carousel11 = $('#carousel11 ul');
	var carousel11SlideWidth = 335;
	var carousel11Width = 0;	
	var isAnimating11 = false;
	
	// building the width of the casousel
	$('#carousel11 li').each(function(){
		carousel11Width += carousel11SlideWidth;
	});
	$(carousel11).css('width', carousel11Width);
	
	// Load Next Image
	$('div.carouselNext11').on('click', function(){
		var currentLeft11 = Math.abs(parseInt($(carousel11).css("left")));
		var newLeft11 = currentLeft11 + carousel11SlideWidth;
		if(newLeft11 == carousel11Width || isAnimating11 === true){return;}
		$('#carousel11 ul').css({'left': "-" + newLeft11 + "px",
							   "transition": "300ms ease-out"
							 });
		isAnimating11 = true;
		setTimeout(function(){isAnimating11 = false;}, 300);			
	});
	
	// Load Previous Image
	$('div.carouselPrev11').on('click', function(){
		var currentLeft11 = Math.abs(parseInt($(carousel11).css("left")));
		var newLeft11 = currentLeft11 - carousel11SlideWidth;
		if(newLeft11 < 0  || isAnimating11 === true){return;}
		$('#carousel11 ul').css({'left': "-" + newLeft11 + "px",
							   "transition": "300ms ease-out"
							 });
	    isAnimating11 = true;
		setTimeout(function(){isAnimating11 = false;}, 300);			
	}); 
     
                                                                    //card 12
     
      // hover zoom card
	$('#product-card12').hover(function(){
			$(this).addClass('animate');
			$('div.carouselNext12, div.carouselPrev12').addClass('visible');			
		 }, function(){
			$(this).removeClass('animate');			
			$('div.carouselNext12, div.carouselPrev12').removeClass('visible');
	});	
     
      // Flip card 12 to the back side
	$('#view_details12').click(function(){		
		$('div.carouselNext12, div.carouselPrev12').removeClass('visible');
		$('#product-card12').addClass('flip-10');
		setTimeout(function(){
			$('#product-card12').removeClass('flip-10').addClass('flip90').find('div.shadow12').show().fadeTo( 80 , 1, function(){
				$('#product-front12, #product-front12 div.shadow12').hide();			
			});
		}, 50);
		
		setTimeout(function(){
			$('#product-card12').removeClass('flip90').addClass('flip190');
			$('#product-back12').show().find('div.shadow12').show().fadeTo( 90 , 0);
			setTimeout(function(){				
				$('#product-card12').removeClass('flip190').addClass('flip180').find('div.shadow12').hide();						
				setTimeout(function(){
					$('#product-card12').css('transition', '100ms ease-out');			
					$('#cx12, #cy12').addClass('s1');
					setTimeout(function(){$('#cx12, #cy12').addClass('s2');}, 100);
					setTimeout(function(){$('#cx12, #cy12').addClass('s3');}, 200);				
					$('div.carouselNext12, div.carouselPrev12').addClass('visible');				
				}, 100);
			}, 100);			
		}, 150);			
	});	
     
     // Flip card back12 to the front side
	$('#flip-back12').click(function(){		
		
		$('#product-card12').removeClass('flip180').addClass('flip190');
		setTimeout(function(){
			$('#product-card12').removeClass('flip190').addClass('flip90');
	
			$('#product-back12 div.shadow12').css('opacity', 0).fadeTo( 100 , 1, function(){
				$('#product-back12, #product-back12 div.shadow12').hide();
				$('#product-front12, #product-front12 div.shadow12').show();
			});
		}, 50);
		
		setTimeout(function(){
			$('#product-card12').removeClass('flip90').addClass('flip-10');
			$('#product-front12 div.shadow12').show().fadeTo( 100 , 0);
			setTimeout(function(){						
				$('#product-front12 div.shadow12').hide();
				$('#product-card12').removeClass('flip-10').css('transition', '100ms ease-out');		
				$('#cx12, #cy12').removeClass('s1 s2 s3');			
			}, 100);			
		}, 150);			
		
	});	
     
     /* ----  Image Gallery 12 Carousel  12   ---- */
	
	var carousel12 = $('#carousel12 ul');
	var carousel12SlideWidth = 335;
	var carousel12Width = 0;	
	var isAnimating12 = false;
	
	// building the width of the casousel
	$('#carousel12 li').each(function(){
		carousel12Width += carousel12SlideWidth;
	});
	$(carousel12).css('width', carousel12Width);
	
	// Load Next Image
	$('div.carouselNext12').on('click', function(){
		var currentLeft12 = Math.abs(parseInt($(carousel12).css("left")));
		var newLeft12 = currentLeft12 + carousel12SlideWidth;
		if(newLeft12 == carousel12Width || isAnimating12 === true){return;}
		$('#carousel12 ul').css({'left': "-" + newLeft12 + "px",
							   "transition": "300ms ease-out"
							 });
		isAnimating12 = true;
		setTimeout(function(){isAnimating12 = false;}, 300);			
	});
	
	// Load Previous Image
	$('div.carouselPrev12').on('click', function(){
		var currentLeft12 = Math.abs(parseInt($(carousel12).css("left")));
		var newLeft12 = currentLeft12 - carousel12SlideWidth;
		if(newLeft12 < 0  || isAnimating12 === true){return;}
		$('#carousel12 ul').css({'left': "-" + newLeft12 + "px",
							   "transition": "300ms ease-out"
							 });
	    isAnimating12 = true;
		setTimeout(function(){isAnimating12 = false;}, 300);			
	}); 
     
                                                                  //card 13
     
      // hover zoom card
	$('#product-card13').hover(function(){
			$(this).addClass('animate');
			$('div.carouselNext13, div.carouselPrev13').addClass('visible');			
		 }, function(){
			$(this).removeClass('animate');			
			$('div.carouselNext13, div.carouselPrev13').removeClass('visible');
	});	
     
      // Flip card 13 to the back side
	$('#view_details13').click(function(){		
		$('div.carouselNext13, div.carouselPrev13').removeClass('visible');
		$('#product-card13').addClass('flip-10');
		setTimeout(function(){
			$('#product-card13').removeClass('flip-10').addClass('flip90').find('div.shadow13').show().fadeTo( 80 , 1, function(){
				$('#product-front13, #product-front13 div.shadow13').hide();			
			});
		}, 50);
		
		setTimeout(function(){
			$('#product-card13').removeClass('flip90').addClass('flip190');
			$('#product-back13').show().find('div.shadow13').show().fadeTo( 90 , 0);
			setTimeout(function(){				
				$('#product-card13').removeClass('flip190').addClass('flip180').find('div.shadow13').hide();						
				setTimeout(function(){
					$('#product-card13').css('transition', '100ms ease-out');			
					$('#cx13, #cy13').addClass('s1');
					setTimeout(function(){$('#cx13, #cy13').addClass('s2');}, 100);
					setTimeout(function(){$('#cx13, #cy13').addClass('s3');}, 200);				
					$('div.carouselNext13, div.carouselPrev13').addClass('visible');				
				}, 100);
			}, 100);			
		}, 150);			
	});	
     
     // Flip card back13 to the front side
	$('#flip-back13').click(function(){		
		
		$('#product-card13').removeClass('flip180').addClass('flip190');
		setTimeout(function(){
			$('#product-card13').removeClass('flip190').addClass('flip90');
	
			$('#product-back13 div.shadow13').css('opacity', 0).fadeTo( 100 , 1, function(){
				$('#product-back13, #product-back13 div.shadow13').hide();
				$('#product-front13, #product-front13 div.shadow13').show();
			});
		}, 50);
		
		setTimeout(function(){
			$('#product-card13').removeClass('flip90').addClass('flip-10');
			$('#product-front13 div.shadow13').show().fadeTo( 100 , 0);
			setTimeout(function(){						
				$('#product-front13 div.shadow13').hide();
				$('#product-card13').removeClass('flip-10').css('transition', '100ms ease-out');		
				$('#cx13, #cy13').removeClass('s1 s2 s3');			
			}, 100);			
		}, 150);			
		
	});	
     
     /* ----  Image Gallery 13 Carousel  13   ---- */
	
	var carousel13 = $('#carousel13 ul');
	var carousel13SlideWidth = 335;
	var carousel13Width = 0;	
	var isAnimating13 = false;
	
	// building the width of the casousel
	$('#carousel13 li').each(function(){
		carousel13Width += carousel13SlideWidth;
	});
	$(carousel13).css('width', carousel13Width);
	
	// Load Next Image
	$('div.carouselNext13').on('click', function(){
		var currentLeft13 = Math.abs(parseInt($(carousel13).css("left")));
		var newLeft13 = currentLeft13 + carousel13SlideWidth;
		if(newLeft13 == carousel13Width || isAnimating13 === true){return;}
		$('#carousel13 ul').css({'left': "-" + newLeft13 + "px",
							   "transition": "300ms ease-out"
							 });
		isAnimating13 = true;
		setTimeout(function(){isAnimating13 = false;}, 300);			
	});
	
	// Load Previous Image
	$('div.carouselPrev13').on('click', function(){
		var currentLeft13 = Math.abs(parseInt($(carousel13).css("left")));
		var newLeft13 = currentLeft13 - carousel13SlideWidth;
		if(newLeft13 < 0  || isAnimating13 === true){return;}
		$('#carousel13 ul').css({'left': "-" + newLeft13 + "px",
							   "transition": "300ms ease-out"
							 });
	    isAnimating13 = true;
		setTimeout(function(){isAnimating13 = false;}, 300);			
	}); 
     
     
                                                      //card 14
     
      // hover zoom card
	$('#product-card14').hover(function(){
			$(this).addClass('animate');
			$('div.carouselNext14, div.carouselPrev14').addClass('visible');			
		 }, function(){
			$(this).removeClass('animate');			
			$('div.carouselNext14, div.carouselPrev14').removeClass('visible');
	});	
     
      // Flip card 14 to the back side
	$('#view_details14').click(function(){		
		$('div.carouselNext14, div.carouselPrev14').removeClass('visible');
		$('#product-card14').addClass('flip-10');
		setTimeout(function(){
			$('#product-card14').removeClass('flip-10').addClass('flip90').find('div.shadow14').show().fadeTo( 80 , 1, function(){
				$('#product-front14, #product-front14 div.shadow14').hide();			
			});
		}, 50);
		
		setTimeout(function(){
			$('#product-card14').removeClass('flip90').addClass('flip190');
			$('#product-back14').show().find('div.shadow14').show().fadeTo( 90 , 0);
			setTimeout(function(){				
				$('#product-card14').removeClass('flip190').addClass('flip180').find('div.shadow14').hide();						
				setTimeout(function(){
					$('#product-card14').css('transition', '100ms ease-out');			
					$('#cx14, #cy14').addClass('s1');
					setTimeout(function(){$('#cx14, #cy14').addClass('s2');}, 100);
					setTimeout(function(){$('#cx14, #cy14').addClass('s3');}, 200);				
					$('div.carouselNext14, div.carouselPrev14').addClass('visible');				
				}, 100);
			}, 100);			
		}, 150);			
	});	
     
     // Flip card back4 to the front side
	$('#flip-back14').click(function(){		
		
		$('#product-card14').removeClass('flip180').addClass('flip190');
		setTimeout(function(){
			$('#product-card14').removeClass('flip190').addClass('flip90');
	
			$('#product-back14 div.shadow14').css('opacity', 0).fadeTo( 100 , 1, function(){
				$('#product-back14, #product-back14 div.shadow14').hide();
				$('#product-front14, #product-front14 div.shadow14').show();
			});
		}, 50);
		
		setTimeout(function(){
			$('#product-card14').removeClass('flip90').addClass('flip-10');
			$('#product-front14 div.shadow14').show().fadeTo( 100 , 0);
			setTimeout(function(){						
				$('#product-front14 div.shadow14').hide();
				$('#product-card14').removeClass('flip-10').css('transition', '100ms ease-out');		
				$('#cx14, #cy14').removeClass('s1 s2 s3');			
			}, 100);			
		}, 150);			
		
	});	
     
     /* ----  Image Gallery 14 Carousel  14   ---- */
	
	var carousel14 = $('#carousel14 ul');
	var carousel14SlideWidth = 335;
	var carousel14Width = 0;	
	var isAnimating14 = false;
	
	// building the width of the casousel
	$('#carousel14 li').each(function(){
		carousel14Width += carousel14SlideWidth;
	});
	$(carousel14).css('width', carousel14Width);
	
	// Load Next Image
	$('div.carouselNext14').on('click', function(){
		var currentLeft14 = Math.abs(parseInt($(carousel14).css("left")));
		var newLeft14 = currentLeft14 + carousel14SlideWidth;
		if(newLeft14 == carousel14Width || isAnimating14 === true){return;}
		$('#carousel14 ul').css({'left': "-" + newLeft14 + "px",
							   "transition": "300ms ease-out"
							 });
		isAnimating14 = true;
		setTimeout(function(){isAnimating14 = false;}, 300);			
	});
	
	// Load Previous Image
	$('div.carouselPrev14').on('click', function(){
		var currentLeft14 = Math.abs(parseInt($(carousel14).css("left")));
		var newLeft14 = currentLeft14 - carousel14SlideWidth;
		if(newLeft14 < 0  || isAnimating14 === true){return;}
		$('#carousel14 ul').css({'left': "-" + newLeft14 + "px",
							   "transition": "300ms ease-out"
							 });
	    isAnimating14 = true;
		setTimeout(function(){isAnimating14 = false;}, 300);			
	}); 
     
                                                                    //card 15
     
      // hover zoom card
	$('#product-card15').hover(function(){
			$(this).addClass('animate');
			$('div.carouselNext15, div.carouselPrev15').addClass('visible');			
		 }, function(){
			$(this).removeClass('animate');			
			$('div.carouselNext15, div.carouselPrev15').removeClass('visible');
	});	
     
      // Flip card 15 to the back side
	$('#view_details15').click(function(){		
		$('div.carouselNext15, div.carouselPrev15').removeClass('visible');
		$('#product-card15').addClass('flip-10');
		setTimeout(function(){
			$('#product-card15').removeClass('flip-10').addClass('flip90').find('div.shadow15').show().fadeTo( 80 , 1, function(){
				$('#product-front15, #product-front15 div.shadow15').hide();			
			});
		}, 50);
		
		setTimeout(function(){
			$('#product-card15').removeClass('flip90').addClass('flip190');
			$('#product-back15').show().find('div.shadow15').show().fadeTo( 90 , 0);
			setTimeout(function(){				
				$('#product-card15').removeClass('flip190').addClass('flip180').find('div.shadow15').hide();						
				setTimeout(function(){
					$('#product-card15').css('transition', '100ms ease-out');			
					$('#cx15, #cy15').addClass('s1');
					setTimeout(function(){$('#cx15, #cy15').addClass('s2');}, 100);
					setTimeout(function(){$('#cx15, #cy15').addClass('s3');}, 200);				
					$('div.carouselNext15, div.carouselPrev15').addClass('visible');				
				}, 100);
			}, 100);			
		}, 150);			
	});	
     
     // Flip card back15 to the front side
	$('#flip-back15').click(function(){		
		
		$('#product-card15').removeClass('flip180').addClass('flip190');
		setTimeout(function(){
			$('#product-card15').removeClass('flip190').addClass('flip90');
	
			$('#product-back15 div.shadow15').css('opacity', 0).fadeTo( 100 , 1, function(){
				$('#product-back15, #product-back15 div.shadow15').hide();
				$('#product-front15, #product-front15 div.shadow15').show();
			});
		}, 50);
		
		setTimeout(function(){
			$('#product-card15').removeClass('flip90').addClass('flip-10');
			$('#product-front15 div.shadow15').show().fadeTo( 100 , 0);
			setTimeout(function(){						
				$('#product-front15 div.shadow15').hide();
				$('#product-card15').removeClass('flip-10').css('transition', '100ms ease-out');		
				$('#cx15, #cy15').removeClass('s1 s2 s3');			
			}, 100);			
		}, 150);			
		
	});	
     
     /* ----  Image Gallery 15 Carousel  15   ---- */
	
	var carousel15 = $('#carousel15 ul');
	var carousel15SlideWidth = 335;
	var carousel15Width = 0;	
	var isAnimating15 = false;
	
	// building the width of the casousel
	$('#carousel15 li').each(function(){
		carousel15Width += carousel15SlideWidth;
	});
	$(carousel15).css('width', carousel15Width);
	
	// Load Next Image
	$('div.carouselNext15').on('click', function(){
		var currentLeft15 = Math.abs(parseInt($(carousel15).css("left")));
		var newLeft15 = currentLeft15 + carousel15SlideWidth;
		if(newLeft15 == carousel15Width || isAnimating15 === true){return;}
		$('#carousel15 ul').css({'left': "-" + newLeft15 + "px",
							   "transition": "300ms ease-out"
							 });
		isAnimating15 = true;
		setTimeout(function(){isAnimating15 = false;}, 300);			
	});
	
	// Load Previous Image
	$('div.carouselPrev15').on('click', function(){
		var currentLeft15 = Math.abs(parseInt($(carousel15).css("left")));
		var newLeft15 = currentLeft15 - carousel15SlideWidth;
		if(newLeft15 < 0  || isAnimating15 === true){return;}
		$('#carousel15 ul').css({'left': "-" + newLeft15 + "px",
							   "transition": "300ms ease-out"
							 });
	    isAnimating15 = true;
		setTimeout(function(){isAnimating15 = false;}, 300);			
	}); 
     
                                                                       //card 16
     
      // hover zoom card
	$('#product-card16').hover(function(){
			$(this).addClass('animate');
			$('div.carouselNext16, div.carouselPrev16').addClass('visible');			
		 }, function(){
			$(this).removeClass('animate');			
			$('div.carouselNext16, div.carouselPrev16').removeClass('visible');
	});	
     
      // Flip card 16 to the back side
	$('#view_details16').click(function(){		
		$('div.carouselNext16, div.carouselPrev16').removeClass('visible');
		$('#product-card16').addClass('flip-10');
		setTimeout(function(){
			$('#product-card16').removeClass('flip-10').addClass('flip90').find('div.shadow16').show().fadeTo( 80 , 1, function(){
				$('#product-front16, #product-front16 div.shadow16').hide();			
			});
		}, 50);
		
		setTimeout(function(){
			$('#product-card16').removeClass('flip90').addClass('flip190');
			$('#product-back16').show().find('div.shadow16').show().fadeTo( 90 , 0);
			setTimeout(function(){				
				$('#product-card16').removeClass('flip190').addClass('flip180').find('div.shadow16').hide();						
				setTimeout(function(){
					$('#product-card16').css('transition', '100ms ease-out');			
					$('#cx16, #cy16').addClass('s1');
					setTimeout(function(){$('#cx16, #cy16').addClass('s2');}, 100);
					setTimeout(function(){$('#cx16, #cy16').addClass('s3');}, 200);				
					$('div.carouselNext16, div.carouselPrev16').addClass('visible');				
				}, 100);
			}, 100);			
		}, 150);			
	});	
     
     // Flip card back16 to the front side
	$('#flip-back16').click(function(){		
		
		$('#product-card16').removeClass('flip180').addClass('flip190');
		setTimeout(function(){
			$('#product-card16').removeClass('flip190').addClass('flip90');
	
			$('#product-back16 div.shadow16').css('opacity', 0).fadeTo( 100 , 1, function(){
				$('#product-back16, #product-back16 div.shadow16').hide();
				$('#product-front16, #product-front16 div.shadow16').show();
			});
		}, 50);
		
		setTimeout(function(){
			$('#product-card16').removeClass('flip90').addClass('flip-10');
			$('#product-front16 div.shadow16').show().fadeTo( 100 , 0);
			setTimeout(function(){						
				$('#product-front16 div.shadow16').hide();
				$('#product-card16').removeClass('flip-10').css('transition', '100ms ease-out');		
				$('#cx16, #cy16').removeClass('s1 s2 s3');			
			}, 100);			
		}, 150);			
		
	});	
     
     /* ----  Image Gallery 16 Carousel  16   ---- */
	
	var carousel16 = $('#carousel16 ul');
	var carousel16SlideWidth = 335;
	var carousel16Width = 0;	
	var isAnimating16 = false;
	
	// building the width of the casousel
	$('#carousel16 li').each(function(){
		carousel16Width += carousel16SlideWidth;
	});
	$(carousel16).css('width', carousel16Width);
	
	// Load Next Image
	$('div.carouselNext16').on('click', function(){
		var currentLeft16 = Math.abs(parseInt($(carousel16).css("left")));
		var newLeft16 = currentLeft16 + carousel16SlideWidth;
		if(newLeft16 == carousel16Width || isAnimating16 === true){return;}
		$('#carousel16 ul').css({'left': "-" + newLeft16 + "px",
							   "transition": "300ms ease-out"
							 });
		isAnimating16 = true;
		setTimeout(function(){isAnimating16 = false;}, 300);			
	});
	
	// Load Previous Image
	$('div.carouselPrev16').on('click', function(){
		var currentLeft16 = Math.abs(parseInt($(carousel16).css("left")));
		var newLeft16 = currentLeft16 - carousel16SlideWidth;
		if(newLeft16 < 0  || isAnimating16 === true){return;}
		$('#carousel16 ul').css({'left': "-" + newLeft16 + "px",
							   "transition": "300ms ease-out"
							 });
	    isAnimating16 = true;
		setTimeout(function(){isAnimating16 = false;}, 300);			
	}); 
     
                                                                //card 17
     
      // hover zoom card
	$('#product-card17').hover(function(){
			$(this).addClass('animate');
			$('div.carouselNext17, div.carouselPrev17').addClass('visible');			
		 }, function(){
			$(this).removeClass('animate');			
			$('div.carouselNext17, div.carouselPrev17').removeClass('visible');
	});	
     
      // Flip card 17 to the back side
	$('#view_details17').click(function(){		
		$('div.carouselNext17, div.carouselPrev17').removeClass('visible');
		$('#product-card17').addClass('flip-10');
		setTimeout(function(){
			$('#product-card17').removeClass('flip-10').addClass('flip90').find('div.shadow17').show().fadeTo( 80 , 1, function(){
				$('#product-front17, #product-front17 div.shadow17').hide();			
			});
		}, 50);
		
		setTimeout(function(){
			$('#product-card17').removeClass('flip90').addClass('flip190');
			$('#product-back17').show().find('div.shadow17').show().fadeTo( 90 , 0);
			setTimeout(function(){				
				$('#product-card17').removeClass('flip190').addClass('flip180').find('div.shadow17').hide();						
				setTimeout(function(){
					$('#product-card17').css('transition', '100ms ease-out');			
					$('#cx17, #cy17').addClass('s1');
					setTimeout(function(){$('#cx17, #cy17').addClass('s2');}, 100);
					setTimeout(function(){$('#cx17, #cy17').addClass('s3');}, 200);				
					$('div.carouselNext17, div.carouselPrev17').addClass('visible');				
				}, 100);
			}, 100);			
		}, 150);			
	});	
     
     // Flip card back17 to the front side
	$('#flip-back17').click(function(){		
		
		$('#product-card17').removeClass('flip180').addClass('flip190');
		setTimeout(function(){
			$('#product-card17').removeClass('flip190').addClass('flip90');
	
			$('#product-back17 div.shadow17').css('opacity', 0).fadeTo( 100 , 1, function(){
				$('#product-back17, #product-back17 div.shadow17').hide();
				$('#product-front17, #product-front17 div.shadow17').show();
			});
		}, 50);
		
		setTimeout(function(){
			$('#product-card17').removeClass('flip90').addClass('flip-10');
			$('#product-front17 div.shadow17').show().fadeTo( 100 , 0);
			setTimeout(function(){						
				$('#product-front17 div.shadow17').hide();
				$('#product-card17').removeClass('flip-10').css('transition', '100ms ease-out');		
				$('#cx17, #cy17').removeClass('s1 s2 s3');			
			}, 100);			
		}, 150);			
		
	});	
     
     /* ----  Image Gallery 17 Carousel  17   ---- */
	
	var carousel17 = $('#carousel17 ul');
	var carousel17SlideWidth = 335;
	var carousel17Width = 0;	
	var isAnimating17 = false;
	
	// building the width of the casousel
	$('#carousel17 li').each(function(){
		carousel17Width += carousel17SlideWidth;
	});
	$(carousel17).css('width', carousel17Width);
	
	// Load Next Image
	$('div.carouselNext17').on('click', function(){
		var currentLeft17 = Math.abs(parseInt($(carousel17).css("left")));
		var newLeft17 = currentLeft17 + carousel17SlideWidth;
		if(newLeft17 == carousel17Width || isAnimating17 === true){return;}
		$('#carousel17 ul').css({'left': "-" + newLeft17 + "px",
							   "transition": "300ms ease-out"
							 });
		isAnimating17 = true;
		setTimeout(function(){isAnimating17 = false;}, 300);			
	});
	
	// Load Previous Image
	$('div.carouselPrev17').on('click', function(){
		var currentLeft17 = Math.abs(parseInt($(carousel17).css("left")));
		var newLeft17 = currentLeft17 - carousel17SlideWidth;
		if(newLeft17 < 0  || isAnimating17 === true){return;}
		$('#carousel17 ul').css({'left': "-" + newLeft17 + "px",
							   "transition": "300ms ease-out"
							 });
	    isAnimating17 = true;
		setTimeout(function(){isAnimating17 = false;}, 300);			
	}); 
     
                                                                            //card 18
     
      // hover zoom card
	$('#product-card18').hover(function(){
			$(this).addClass('animate');
			$('div.carouselNext18, div.carouselPrev18').addClass('visible');			
		 }, function(){
			$(this).removeClass('animate');			
			$('div.carouselNext18, div.carouselPrev18').removeClass('visible');
	});	
     
      // Flip card 18 to the back side
	$('#view_details18').click(function(){		
		$('div.carouselNext18, div.carouselPrev18').removeClass('visible');
		$('#product-card18').addClass('flip-10');
		setTimeout(function(){
			$('#product-card18').removeClass('flip-10').addClass('flip90').find('div.shadow18').show().fadeTo( 80 , 1, function(){
				$('#product-front18, #product-front18 div.shadow18').hide();			
			});
		}, 50);
		
		setTimeout(function(){
			$('#product-card18').removeClass('flip90').addClass('flip190');
			$('#product-back18').show().find('div.shadow18').show().fadeTo( 90 , 0);
			setTimeout(function(){				
				$('#product-card18').removeClass('flip190').addClass('flip180').find('div.shadow18').hide();						
				setTimeout(function(){
					$('#product-card18').css('transition', '100ms ease-out');			
					$('#cx18, #cy18').addClass('s1');
					setTimeout(function(){$('#cx18, #cy18').addClass('s2');}, 100);
					setTimeout(function(){$('#cx18, #cy18').addClass('s3');}, 200);				
					$('div.carouselNext18, div.carouselPrev18').addClass('visible');				
				}, 100);
			}, 100);			
		}, 150);			
	});	
     
     // Flip card back18 to the front side
	$('#flip-back18').click(function(){		
		
		$('#product-card18').removeClass('flip180').addClass('flip190');
		setTimeout(function(){
			$('#product-card18').removeClass('flip190').addClass('flip90');
	
			$('#product-back18 div.shadow18').css('opacity', 0).fadeTo( 100 , 1, function(){
				$('#product-back18, #product-back18 div.shadow18').hide();
				$('#product-front18, #product-front18 div.shadow18').show();
			});
		}, 50);
		
		setTimeout(function(){
			$('#product-card18').removeClass('flip90').addClass('flip-10');
			$('#product-front18 div.shadow18').show().fadeTo( 100 , 0);
			setTimeout(function(){						
				$('#product-front18 div.shadow18').hide();
				$('#product-card18').removeClass('flip-10').css('transition', '100ms ease-out');		
				$('#cx18, #cy18').removeClass('s1 s2 s3');			
			}, 100);			
		}, 150);			
		
	});	
     
     /* ----  Image Gallery 18 Carousel  18   ---- */
	
	var carousel18 = $('#carousel18 ul');
	var carousel18SlideWidth = 335;
	var carousel18Width = 0;	
	var isAnimating18 = false;
	
	// building the width of the casousel
	$('#carousel18 li').each(function(){
		carousel18Width += carousel18SlideWidth;
	});
	$(carousel18).css('width', carousel18Width);
	
	// Load Next Image
	$('div.carouselNext18').on('click', function(){
		var currentLeft18 = Math.abs(parseInt($(carousel18).css("left")));
		var newLeft18 = currentLeft18 + carousel18SlideWidth;
		if(newLeft18 == carousel18Width || isAnimating18 === true){return;}
		$('#carousel18 ul').css({'left': "-" + newLeft18 + "px",
							   "transition": "300ms ease-out"
							 });
		isAnimating18 = true;
		setTimeout(function(){isAnimating18 = false;}, 300);			
	});
	
	// Load Previous Image
	$('div.carouselPrev18').on('click', function(){
		var currentLeft18 = Math.abs(parseInt($(carousel18).css("left")));
		var newLeft18 = currentLeft18 - carousel18SlideWidth;
		if(newLeft18 < 0  || isAnimating18 === true){return;}
		$('#carousel18 ul').css({'left': "-" + newLeft18 + "px",
							   "transition": "300ms ease-out"
							 });
	    isAnimating18 = true;
		setTimeout(function(){isAnimating18 = false;}, 300);			
	}); 
     
                                                                      //card 19
     
      // hover zoom card
	$('#product-card19').hover(function(){
			$(this).addClass('animate');
			$('div.carouselNext19, div.carouselPrev19').addClass('visible');			
		 }, function(){
			$(this).removeClass('animate');			
			$('div.carouselNext19, div.carouselPrev19').removeClass('visible');
	});	
     
      // Flip card 19 to the back side
	$('#view_details19').click(function(){		
		$('div.carouselNext19, div.carouselPrev19').removeClass('visible');
		$('#product-card19').addClass('flip-10');
		setTimeout(function(){
			$('#product-card19').removeClass('flip-10').addClass('flip90').find('div.shadow19').show().fadeTo( 80 , 1, function(){
				$('#product-front19, #product-front19 div.shadow19').hide();			
			});
		}, 50);
		
		setTimeout(function(){
			$('#product-card19').removeClass('flip90').addClass('flip190');
			$('#product-back19').show().find('div.shadow19').show().fadeTo( 90 , 0);
			setTimeout(function(){				
				$('#product-card19').removeClass('flip190').addClass('flip180').find('div.shadow19').hide();						
				setTimeout(function(){
					$('#product-card19').css('transition', '100ms ease-out');			
					$('#cx19, #cy19').addClass('s1');
					setTimeout(function(){$('#cx19, #cy19').addClass('s2');}, 100);
					setTimeout(function(){$('#cx19, #cy19').addClass('s3');}, 200);				
					$('div.carouselNext19, div.carouselPrev19').addClass('visible');				
				}, 100);
			}, 100);			
		}, 150);			
	});	
     
     // Flip card back19 to the front side
	$('#flip-back19').click(function(){		
		
		$('#product-card19').removeClass('flip180').addClass('flip190');
		setTimeout(function(){
			$('#product-card19').removeClass('flip190').addClass('flip90');
	
			$('#product-back19 div.shadow19').css('opacity', 0).fadeTo( 100 , 1, function(){
				$('#product-back19, #product-back19 div.shadow19').hide();
				$('#product-front19, #product-front19 div.shadow19').show();
			});
		}, 50);
		
		setTimeout(function(){
			$('#product-card19').removeClass('flip90').addClass('flip-10');
			$('#product-front19 div.shadow19').show().fadeTo( 100 , 0);
			setTimeout(function(){						
				$('#product-front19 div.shadow19').hide();
				$('#product-card19').removeClass('flip-10').css('transition', '100ms ease-out');		
				$('#cx19, #cy19').removeClass('s1 s2 s3');			
			}, 100);			
		}, 150);			
		
	});	
     
     /* ----  Image Gallery 19 Carousel  19   ---- */
	
	var carousel19 = $('#carousel19 ul');
	var carousel19SlideWidth = 335;
	var carousel19Width = 0;	
	var isAnimating19 = false;
	
	// building the width of the casousel
	$('#carousel19 li').each(function(){
		carousel19Width += carousel19SlideWidth;
	});
	$(carousel19).css('width', carousel19Width);
	
	// Load Next Image
	$('div.carouselNext19').on('click', function(){
		var currentLeft19 = Math.abs(parseInt($(carousel19).css("left")));
		var newLeft19 = currentLeft19 + carousel19SlideWidth;
		if(newLeft19 == carousel19Width || isAnimating19 === true){return;}
		$('#carousel19 ul').css({'left': "-" + newLeft19 + "px",
							   "transition": "300ms ease-out"
							 });
		isAnimating19 = true;
		setTimeout(function(){isAnimating19 = false;}, 300);			
	});
	
	// Load Previous Image
	$('div.carouselPrev19').on('click', function(){
		var currentLeft19 = Math.abs(parseInt($(carousel19).css("left")));
		var newLeft19 = currentLeft19 - carousel19SlideWidth;
		if(newLeft19 < 0  || isAnimating19 === true){return;}
		$('#carousel19 ul').css({'left': "-" + newLeft19 + "px",
							   "transition": "300ms ease-out"
							 });
	    isAnimating19 = true;
		setTimeout(function(){isAnimating19 = false;}, 300);			
	}); 
     
                                                                     //card 20
     
      // hover zoom card
	$('#product-card20').hover(function(){
			$(this).addClass('animate');
			$('div.carouselNext20, div.carouselPrev20').addClass('visible');			
		 }, function(){
			$(this).removeClass('animate');			
			$('div.carouselNext20, div.carouselPrev20').removeClass('visible');
	});	
     
      // Flip card 20 to the back side
	$('#view_details20').click(function(){		
		$('div.carouselNext20, div.carouselPrev20').removeClass('visible');
		$('#product-card20').addClass('flip-10');
		setTimeout(function(){
			$('#product-card20').removeClass('flip-10').addClass('flip90').find('div.shadow20').show().fadeTo( 80 , 1, function(){
				$('#product-front20, #product-front20 div.shadow20').hide();			
			});
		}, 50);
		
		setTimeout(function(){
			$('#product-card20').removeClass('flip90').addClass('flip190');
			$('#product-back20').show().find('div.shadow20').show().fadeTo( 90 , 0);
			setTimeout(function(){				
				$('#product-card20').removeClass('flip190').addClass('flip180').find('div.shadow20').hide();						
				setTimeout(function(){
					$('#product-card20').css('transition', '100ms ease-out');			
					$('#cx20, #cy20').addClass('s1');
					setTimeout(function(){$('#cx20, #cy20').addClass('s2');}, 100);
					setTimeout(function(){$('#cx20, #cy20').addClass('s3');}, 200);				
					$('div.carouselNext20, div.carouselPrev20').addClass('visible');				
				}, 100);
			}, 100);			
		}, 150);			
	});	
     
     // Flip card back20 to the front side
	$('#flip-back20').click(function(){		
		
		$('#product-card20').removeClass('flip180').addClass('flip190');
		setTimeout(function(){
			$('#product-card20').removeClass('flip190').addClass('flip90');
	
			$('#product-back20 div.shadow20').css('opacity', 0).fadeTo( 100 , 1, function(){
				$('#product-back20, #product-back20 div.shadow20').hide();
				$('#product-front20, #product-front20 div.shadow20').show();
			});
		}, 50);
		
		setTimeout(function(){
			$('#product-card20').removeClass('flip90').addClass('flip-10');
			$('#product-front20 div.shadow20').show().fadeTo( 100 , 0);
			setTimeout(function(){						
				$('#product-front20 div.shadow20').hide();
				$('#product-card20').removeClass('flip-10').css('transition', '100ms ease-out');		
				$('#cx20, #cy20').removeClass('s1 s2 s3');			
			}, 100);			
		}, 150);			
		
	});	
     
     /* ----  Image Gallery 20 Carousel  20   ---- */
	
	var carousel20 = $('#carousel20 ul');
	var carousel20SlideWidth = 335;
	var carousel20Width = 0;	
	var isAnimating20 = false;
	
	// building the width of the casousel
	$('#carousel20 li').each(function(){
		carousel20Width += carousel20SlideWidth;
	});
	$(carousel20).css('width', carousel20Width);
	
	// Load Next Image
	$('div.carouselNext20').on('click', function(){
		var currentLeft20 = Math.abs(parseInt($(carousel20).css("left")));
		var newLeft20 = currentLeft20 + carousel20SlideWidth;
		if(newLeft20 == carousel20Width || isAnimating20 === true){return;}
		$('#carousel20 ul').css({'left': "-" + newLeft20 + "px",
							   "transition": "300ms ease-out"
							 });
		isAnimating20 = true;
		setTimeout(function(){isAnimating20 = false;}, 300);			
	});
	
	// Load Previous Image
	$('div.carouselPrev20').on('click', function(){
		var currentLeft20 = Math.abs(parseInt($(carousel20).css("left")));
		var newLeft20 = currentLeft20 - carousel20SlideWidth;
		if(newLeft20 < 0  || isAnimating20 === true){return;}
		$('#carousel20 ul').css({'left': "-" + newLeft20 + "px",
							   "transition": "300ms ease-out"
							 });
	    isAnimating20 = true;
		setTimeout(function(){isAnimating20 = false;}, 300);			
	}); 
     
     
});