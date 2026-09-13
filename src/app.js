(function(){

  /* ============ Bud SVG ============ */
  function stickKidSVG(opts){
    opts = opts || {};
    var size = opts.size || 120;
    var animated = opts.animated !== false;
    var hair = opts.hair || 'pigtails';
    var hairColor = opts.hairColor || '#4A2E17';
    var shortsColor = opts.shortsColor || '#2F5B8C';
    var badgeColor = opts.badgeColor || '#2B6CB0';
    var shirtColor = opts.shirtColor || '#FFFFFF';
    var shirtStroke = opts.shirtStroke || '#2A2A2A';
    var tieColor = opts.tieColor || '#FF6F9E';
    var pose = opts.pose || 'jump';
    var bottomStyle = opts.bottomStyle || 'shorts';
    var skin = '#FBD9BB';
    var skinStroke = '#3A2A1A';

    var hairSvg = '';
    if(hair === 'pigtails'){
      // scribble tufts on top, plus two side pigtail bunches with hair ties at the base
      hairSvg =
        '<path d="M78 40 Q85 26 94 36" stroke="'+hairColor+'" stroke-width="3" fill="none" stroke-linecap="round"/>'+
        '<path d="M92 34 Q100 20 108 34" stroke="'+hairColor+'" stroke-width="3" fill="none" stroke-linecap="round"/>'+
        '<path d="M106 36 Q115 26 122 40" stroke="'+hairColor+'" stroke-width="3" fill="none" stroke-linecap="round"/>'+
        /* left bunch: compact curls tucked close to the head, then the tie */
        '<path d="M70 44 Q60 36 65 25" stroke="'+hairColor+'" stroke-width="3" fill="none" stroke-linecap="round"/>'+
        '<path d="M69 47 Q57 45 58 33" stroke="'+hairColor+'" stroke-width="3" fill="none" stroke-linecap="round"/>'+
        '<path d="M71 50 Q61 55 55 47" stroke="'+hairColor+'" stroke-width="3" fill="none" stroke-linecap="round"/>'+
        '<circle cx="70" cy="47" r="4.5" fill="'+tieColor+'" stroke="#B8477A" stroke-width="1"/>'+
        /* right bunch: mirrored */
        '<path d="M130 44 Q140 36 135 25" stroke="'+hairColor+'" stroke-width="3" fill="none" stroke-linecap="round"/>'+
        '<path d="M131 47 Q143 45 142 33" stroke="'+hairColor+'" stroke-width="3" fill="none" stroke-linecap="round"/>'+
        '<path d="M129 50 Q139 55 145 47" stroke="'+hairColor+'" stroke-width="3" fill="none" stroke-linecap="round"/>'+
        '<circle cx="130" cy="47" r="4.5" fill="'+tieColor+'" stroke="#B8477A" stroke-width="1"/>';
    } else if(hair === 'bald'){
      // no hair, just a small shine highlight on the crown
      hairSvg =
        '<path d="M88 36 Q100 30 112 36" stroke="#FFFFFF" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.6"/>';
    } else {
      // loose scribble halo, no pigtails
      hairSvg =
        '<path d="M70 42 Q78 24 92 32" stroke="'+hairColor+'" stroke-width="3" fill="none" stroke-linecap="round"/>'+
        '<path d="M88 32 Q100 18 112 32" stroke="'+hairColor+'" stroke-width="3" fill="none" stroke-linecap="round"/>'+
        '<path d="M108 32 Q122 24 130 42" stroke="'+hairColor+'" stroke-width="3" fill="none" stroke-linecap="round"/>'+
        '<path d="M66 50 Q56 40 62 26" stroke="'+hairColor+'" stroke-width="3" fill="none" stroke-linecap="round"/>'+
        '<path d="M64 58 Q52 58 50 44" stroke="'+hairColor+'" stroke-width="3" fill="none" stroke-linecap="round"/>'+
        '<path d="M66 66 Q54 70 52 60" stroke="'+hairColor+'" stroke-width="3" fill="none" stroke-linecap="round"/>'+
        '<path d="M134 50 Q144 40 138 26" stroke="'+hairColor+'" stroke-width="3" fill="none" stroke-linecap="round"/>'+
        '<path d="M136 58 Q148 58 150 44" stroke="'+hairColor+'" stroke-width="3" fill="none" stroke-linecap="round"/>'+
        '<path d="M134 66 Q146 70 148 60" stroke="'+hairColor+'" stroke-width="3" fill="none" stroke-linecap="round"/>';
    }

    /* ---- Pose: arms, hands, legs, feet ---- */
    var limbsSvg = '';
    if(pose === 'wave'){
      // standing, one arm waving up, one arm relaxed at the side, feet planted apart
      limbsSvg =
        '<path d="M92 150 Q88 172 84 194" stroke="#2A2A2A" stroke-width="6" fill="none" stroke-linecap="round"/>'+
        '<path d="M108 150 Q114 172 120 194" stroke="#2A2A2A" stroke-width="6" fill="none" stroke-linecap="round"/>'+
        '<ellipse cx="83" cy="196" rx="7" ry="4" fill="#2A2A2A" transform="rotate(-8 83 196)"/>'+
        '<ellipse cx="121" cy="196" rx="7" ry="4" fill="#2A2A2A" transform="rotate(8 121 196)"/>'+
        '<path d="M80 92 Q62 76 52 52" stroke="#2A2A2A" stroke-width="6" fill="none" stroke-linecap="round"/>'+
        '<path d="M120 92 Q126 112 122 132" stroke="#2A2A2A" stroke-width="6" fill="none" stroke-linecap="round"/>'+
        '<circle cx="52" cy="52" r="4" fill="'+skin+'" stroke="'+skinStroke+'" stroke-width="1.5"/>'+
        '<circle cx="122" cy="132" r="4" fill="'+skin+'" stroke="'+skinStroke+'" stroke-width="1.5"/>';
    } else if(pose === 'run'){
      // dynamic running stride, one arm pointing forward, one trailing back
      limbsSvg =
        '<path d="M92 150 Q100 158 94 176" stroke="#2A2A2A" stroke-width="6" fill="none" stroke-linecap="round"/>'+
        '<path d="M108 150 Q120 170 116 192" stroke="#2A2A2A" stroke-width="6" fill="none" stroke-linecap="round"/>'+
        '<ellipse cx="93" cy="178" rx="7" ry="4" fill="#2A2A2A" transform="rotate(20 93 178)"/>'+
        '<ellipse cx="115" cy="194" rx="7" ry="4" fill="#2A2A2A" transform="rotate(-15 115 194)"/>'+
        '<path d="M80 92 Q60 80 46 60" stroke="#2A2A2A" stroke-width="6" fill="none" stroke-linecap="round"/>'+
        '<path d="M120 92 Q140 98 152 84" stroke="#2A2A2A" stroke-width="6" fill="none" stroke-linecap="round"/>'+
        '<circle cx="46" cy="60" r="4" fill="'+skin+'" stroke="'+skinStroke+'" stroke-width="1.5"/>'+
        '<circle cx="152" cy="84" r="4" fill="'+skin+'" stroke="'+skinStroke+'" stroke-width="1.5"/>';
    } else {
      // jump: exuberant jumping-jack, both arms up, legs kicked
      limbsSvg =
        '<path d="M92 150 Q78 175 64 194" stroke="#2A2A2A" stroke-width="6" fill="none" stroke-linecap="round"/>'+
        '<path d="M108 150 Q126 166 138 150" stroke="#2A2A2A" stroke-width="6" fill="none" stroke-linecap="round"/>'+
        '<ellipse cx="61" cy="197" rx="7" ry="4" fill="#2A2A2A" transform="rotate(-25 61 197)"/>'+
        '<ellipse cx="141" cy="150" rx="7" ry="4" fill="#2A2A2A" transform="rotate(15 141 150)"/>'+
        '<path d="M80 92 Q54 72 42 46" stroke="#2A2A2A" stroke-width="6" fill="none" stroke-linecap="round"/>'+
        '<path d="M120 92 Q146 72 158 46" stroke="#2A2A2A" stroke-width="6" fill="none" stroke-linecap="round"/>'+
        '<circle cx="42" cy="46" r="4" fill="'+skin+'" stroke="'+skinStroke+'" stroke-width="1.5"/>'+
        '<circle cx="158" cy="46" r="4" fill="'+skin+'" stroke="'+skinStroke+'" stroke-width="1.5"/>';
    }

    /* ---- Shorts or skirt ---- */
    var bottomSvg = '';
    if(bottomStyle === 'skirt'){
      bottomSvg =
        '<path d="M82 126 L118 126 L129 158 Q100 168 71 158 Z" fill="'+shortsColor+'" stroke="#20385A" stroke-width="1.5" stroke-linejoin="round"/>'+
        '<path d="M90 132 L86 154" stroke="rgba(0,0,0,0.18)" stroke-width="2" stroke-linecap="round"/>'+
        '<path d="M110 132 L114 154" stroke="rgba(0,0,0,0.18)" stroke-width="2" stroke-linecap="round"/>';
    } else {
      bottomSvg =
        '<path d="M84 126 L116 126 L112 152 L102 138 L98 138 L90 152 Z" fill="'+shortsColor+'" stroke="#20385A" stroke-width="1.5" stroke-linejoin="round"/>'+
        '<path d="M88 131 L96 131 M104 131 L112 131" stroke="rgba(0,0,0,0.25)" stroke-width="2" stroke-linecap="round"/>';
    }

    var svg =
    '<svg class="bud '+(animated?'bud-bounce':'')+'" viewBox="0 0 200 200" width="'+size+'" height="'+size+'" xmlns="http://www.w3.org/2000/svg">'+
      limbsSvg+
      bottomSvg+
      /* shirt */
      '<path d="M78 84 L122 84 L114 128 L86 128 Z" fill="'+shirtColor+'" stroke="'+shirtStroke+'" stroke-width="2.5" stroke-linejoin="round"/>'+
      /* short sleeve cuffs */
      '<path d="M75 87 Q80 94 88 92" stroke="'+shirtStroke+'" stroke-width="2" fill="none" stroke-linecap="round"/>'+
      '<path d="M125 87 Q120 94 112 92" stroke="'+shirtStroke+'" stroke-width="2" fill="none" stroke-linecap="round"/>'+
      /* collar */
      '<path d="M92 84 L100 94 L108 84" fill="none" stroke="'+shirtStroke+'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'+
      /* chest badge */
      '<circle cx="100" cy="107" r="5" fill="'+badgeColor+'" stroke="rgba(0,0,0,0.15)" stroke-width="1"/>'+
      /* head */
      '<circle cx="100" cy="58" r="26" fill="'+skin+'" stroke="'+skinStroke+'" stroke-width="2"/>'+
      hairSvg+
      /* eyebrows */
      '<path d="M85 47 Q91 43 97 46" stroke="#2A2A2A" stroke-width="2" fill="none" stroke-linecap="round"/>'+
      '<path d="M103 46 Q109 43 115 47" stroke="#2A2A2A" stroke-width="2" fill="none" stroke-linecap="round"/>'+
      '<g class="'+(animated?'bud-eyes-wrap':'')+'">'+
        '<g class="bud-blink">'+
          '<circle cx="91" cy="58" r="3" fill="#2A2A2A"/>'+
          '<circle cx="109" cy="58" r="3" fill="#2A2A2A"/>'+
        '</g>'+
      '</g>'+
      /* rosy cheeks */
      '<circle cx="80" cy="66" r="4.5" fill="#FF9E8A" opacity="0.45"/>'+
      '<circle cx="120" cy="66" r="4.5" fill="#FF9E8A" opacity="0.45"/>'+
      /* smile */
      '<path d="M87 66 Q100 79 113 66" stroke="#2A2A2A" stroke-width="3" fill="none" stroke-linecap="round"/>'+
    '</svg>';
    return animated ? '<div class="bud-jump-wrap">'+svg+'</div>' : svg;
  }

  function chloeSVG(opts){
    opts = opts || {};
    opts.hair = 'pigtails';
    opts.hairColor = opts.hairColor || '#4A2E17';
    opts.shortsColor = opts.shortsColor || '#2F5B8C';
    opts.pose = opts.pose || 'jump';
    opts.bottomStyle = opts.bottomStyle || 'skirt';
    return stickKidSVG(opts);
  }

  function sarahSVG(opts){
    opts = opts || {};
    opts.hair = 'plain';
    opts.hairColor = opts.hairColor || '#5A3820';
    opts.shortsColor = opts.shortsColor || '#3D5A80';
    opts.pose = opts.pose || 'wave';
    opts.bottomStyle = opts.bottomStyle || 'shorts';
    return stickKidSVG(opts);
  }

  function jonSVG(opts){
    opts = opts || {};
    opts.hair = 'bald';
    opts.shirtColor = opts.shirtColor || '#D9362E';
    opts.shortsColor = opts.shortsColor || '#1E1E1E';
    opts.badgeColor = opts.badgeColor || '#FFFFFF';
    opts.pose = opts.pose || 'run';
    opts.bottomStyle = opts.bottomStyle || 'shorts';
    return stickKidSVG(opts);
  }

  function gt1LogoSVG(size){
    size = size || 40;
    return '<svg viewBox="0 0 237.39 246.98" width="'+size+'" height="'+(size*1.04)+'" xmlns="http://www.w3.org/2000/svg">' +
      `<g>
              <path class="gt1-a" d="M35.6,63.33c-1.04,0.57-2.1,0.83-3.19,0.79c-1.08-0.04-2.1-0.43-3.05-1.15l2.6-3.3   c0.67,0.45,1.34,0.62,2.02,0.5c0.68-0.12,1.3-0.53,1.86-1.23c0.57-0.72,0.84-1.42,0.82-2.1c-0.02-0.68-0.31-1.24-0.87-1.68   c-0.45-0.36-0.94-0.51-1.45-0.46s-1.02,0.21-1.52,0.5c-0.5,0.29-1.14,0.71-1.92,1.29c-1.08,0.77-2,1.35-2.78,1.75   c-0.78,0.4-1.63,0.59-2.56,0.59c-0.93-0.01-1.88-0.39-2.85-1.15c-0.91-0.71-1.52-1.57-1.84-2.55s-0.33-2.03-0.05-3.14   c0.29-1.1,0.84-2.18,1.67-3.24c1.25-1.59,2.64-2.57,4.19-2.96c1.55-0.38,3.05-0.09,4.51,0.89l-2.67,3.39   c-0.55-0.39-1.16-0.5-1.84-0.36c-0.67,0.15-1.28,0.57-1.82,1.26c-0.47,0.6-0.7,1.2-0.67,1.81s0.33,1.13,0.92,1.59   c0.41,0.32,0.86,0.46,1.34,0.4c0.49-0.06,0.97-0.22,1.46-0.49c0.49-0.27,1.13-0.69,1.92-1.25c1.08-0.77,2.01-1.35,2.8-1.75   c0.79-0.4,1.66-0.6,2.6-0.59c0.94,0.01,1.89,0.38,2.85,1.13c0.82,0.65,1.42,1.46,1.79,2.44s0.44,2.04,0.21,3.19   c-0.23,1.15-0.79,2.29-1.67,3.42C37.59,61.94,36.64,62.76,35.6,63.33z"></path>
              <path class="gt1-a" d="M39.07,41.57l5.26,5.35c0.37,0.37,0.72,0.55,1.06,0.54c0.34-0.01,0.73-0.22,1.15-0.64l1.3-1.28l2.32,2.36   l-1.76,1.73c-2.36,2.32-4.66,2.33-6.91,0.04l-5.24-5.33l-1.32,1.29l-2.26-2.3l1.32-1.3l-2.69-2.74l2.82-2.77l2.69,2.74l2.48-2.43   l2.26,2.3L39.07,41.57z"></path>
              <path class="gt1-a" d="M44.28,36.93c-0.22-1.35-0.1-2.6,0.37-3.77c0.47-1.17,1.24-2.14,2.3-2.94c0.93-0.69,1.88-1.11,2.85-1.25   s1.88-0.09,2.73,0.17l-1.32-1.77l3.17-2.36l9.27,12.44l-3.17,2.36l-1.36-1.82c0.03,0.88-0.17,1.78-0.59,2.69   c-0.43,0.91-1.1,1.71-2.03,2.41c-1.05,0.78-2.2,1.22-3.46,1.33c-1.26,0.1-2.51-0.15-3.74-0.76c-1.23-0.61-2.32-1.55-3.27-2.82   C45.08,39.58,44.5,38.28,44.28,36.93z M53.92,31.95c-0.71-0.32-1.42-0.44-2.15-0.35s-1.38,0.35-1.96,0.78   c-0.58,0.44-1.02,0.98-1.3,1.63c-0.28,0.65-0.37,1.37-0.27,2.14c0.1,0.78,0.43,1.54,0.99,2.29c0.56,0.75,1.2,1.29,1.92,1.62   c0.73,0.33,1.45,0.46,2.17,0.39c0.72-0.07,1.37-0.32,1.94-0.75c0.58-0.43,1.02-0.99,1.31-1.66c0.29-0.67,0.38-1.39,0.28-2.16   c-0.11-0.77-0.45-1.54-1.02-2.3C55.27,32.82,54.63,32.28,53.92,31.95z"></path>
              <path class="gt1-a" d="M71.21,17.7c1.54,0.53,2.79,1.72,3.73,3.59l4.11,8.12l-3.5,1.77l-3.87-7.64c-0.56-1.1-1.26-1.8-2.11-2.12   c-0.85-0.31-1.75-0.23-2.7,0.25c-0.97,0.49-1.58,1.17-1.83,2.04c-0.26,0.87-0.11,1.86,0.45,2.96l3.87,7.64l-3.5,1.77l-7.01-13.84   l3.5-1.77l0.87,1.72c0.16-0.84,0.52-1.61,1.07-2.32c0.55-0.71,1.26-1.28,2.13-1.72C68.07,17.33,69.66,17.18,71.21,17.7z"></path>
              <path class="gt1-a" d="M77.79,17.02c0.24-1.34,0.79-2.49,1.63-3.43c0.84-0.94,1.9-1.61,3.17-1.99c0.96-0.29,1.95-0.37,2.95-0.21   c1,0.15,1.87,0.5,2.6,1.04l-2.15-7.04l3.8-1.16l6.06,19.81l-3.8,1.16L91.37,23c-0.24,0.87-0.71,1.66-1.42,2.37   c-0.7,0.7-1.61,1.22-2.71,1.56c-1.25,0.38-2.49,0.41-3.72,0.08c-1.23-0.33-2.33-0.98-3.28-1.97c-0.96-0.99-1.67-2.24-2.13-3.76   C77.65,19.79,77.55,18.37,77.79,17.02z M88.55,15.59c-0.56-0.54-1.19-0.9-1.9-1.06c-0.71-0.16-1.42-0.14-2.11,0.08   s-1.29,0.58-1.77,1.1c-0.49,0.52-0.81,1.16-0.98,1.92c-0.17,0.76-0.11,1.59,0.16,2.48c0.27,0.89,0.69,1.62,1.26,2.18   s1.21,0.92,1.92,1.1s1.4,0.16,2.08-0.05c0.7-0.21,1.29-0.59,1.79-1.12c0.5-0.53,0.83-1.18,0.99-1.94c0.16-0.76,0.1-1.6-0.18-2.51   S89.11,16.14,88.55,15.59z"></path>
              <path class="gt1-a" d="M96.07,5.87c-0.53-0.35-0.84-0.85-0.96-1.5c-0.11-0.64,0.02-1.22,0.4-1.73c0.38-0.51,0.9-0.83,1.58-0.94   c0.68-0.12,1.28,0,1.81,0.35c0.53,0.35,0.84,0.85,0.96,1.5s-0.02,1.22-0.39,1.73c-0.38,0.51-0.9,0.83-1.58,0.94   C97.2,6.34,96.59,6.22,96.07,5.87z M100.1,7.71l2.66,15.28l-3.86,0.67L96.24,8.38L100.1,7.71z"></path>
              <path class="gt1-a" d="M118.16,7.68c1.2,1.11,1.85,2.7,1.96,4.79l0.47,9.09l-3.92,0.2l-0.44-8.56c-0.06-1.23-0.42-2.16-1.07-2.79   s-1.5-0.92-2.57-0.86c-1.08,0.06-1.92,0.43-2.51,1.12c-0.59,0.69-0.85,1.66-0.79,2.89l0.44,8.56l-3.92,0.2l-0.8-15.49l3.92-0.2   l0.1,1.93c0.49-0.7,1.13-1.26,1.92-1.68c0.79-0.42,1.67-0.66,2.64-0.71C115.44,6.07,116.96,6.58,118.16,7.68z"></path>
              <path class="gt1-a" d="M133.94,7.73c0.82,0.56,1.43,1.23,1.85,2.01l0.26-2.2l3.92,0.46l-1.83,15.52c-0.17,1.43-0.61,2.67-1.31,3.72   c-0.71,1.05-1.67,1.84-2.9,2.36c-1.23,0.52-2.66,0.69-4.29,0.49c-2.19-0.26-3.92-0.98-5.2-2.17c-1.28-1.19-1.91-2.67-1.88-4.45   l3.87,0.46c0.12,0.73,0.49,1.34,1.12,1.84c0.63,0.5,1.42,0.8,2.39,0.92c1.13,0.13,2.09-0.1,2.87-0.69   c0.78-0.59,1.26-1.58,1.42-2.95l0.28-2.39c-0.59,0.66-1.35,1.18-2.29,1.56c-0.94,0.38-1.97,0.5-3.1,0.37   c-1.3-0.15-2.44-0.63-3.44-1.42c-1-0.79-1.73-1.83-2.21-3.12c-0.48-1.29-0.62-2.72-0.44-4.29c0.18-1.56,0.66-2.9,1.42-4.03   c0.76-1.13,1.72-1.96,2.86-2.48c1.14-0.52,2.37-0.71,3.69-0.55C132.14,6.83,133.12,7.18,133.94,7.73z M134.87,12.75   c-0.29-0.72-0.73-1.3-1.32-1.74c-0.59-0.44-1.24-0.7-1.97-0.78c-0.72-0.08-1.41,0.01-2.06,0.29c-0.65,0.28-1.21,0.74-1.67,1.37   c-0.46,0.63-0.75,1.41-0.86,2.34c-0.11,0.93-0.02,1.76,0.28,2.5c0.3,0.74,0.74,1.33,1.31,1.78s1.22,0.71,1.92,0.79   c0.72,0.09,1.42-0.01,2.09-0.3s1.23-0.75,1.69-1.38s0.73-1.42,0.84-2.37C135.25,14.3,135.16,13.47,134.87,12.75z"></path>
              <path class="gt1-a" d="M157.41,8.57l-4.24,11.33c-0.46,1.24-0.5,2.31-0.09,3.21c0.4,0.9,1.19,1.57,2.36,2   c1.19,0.44,2.23,0.46,3.12,0.05c0.89-0.41,1.57-1.24,2.04-2.48l4.24-11.33l3.7,1.38l-4.23,11.3c-0.58,1.56-1.41,2.75-2.49,3.57   c-1.08,0.82-2.28,1.29-3.61,1.41c-1.33,0.12-2.69-0.08-4.07-0.6c-1.36-0.51-2.5-1.25-3.41-2.2c-0.91-0.96-1.48-2.1-1.73-3.41   s-0.08-2.75,0.51-4.31l4.23-11.3L157.41,8.57z"></path>
              <path class="gt1-a" d="M176.77,22.27c1.01,0.04,2,0.35,2.98,0.93c1.14,0.68,2,1.57,2.6,2.68c0.59,1.11,0.85,2.34,0.77,3.7   c-0.08,1.35-0.52,2.71-1.33,4.08c-0.81,1.37-1.79,2.41-2.96,3.15c-1.16,0.73-2.38,1.11-3.64,1.15c-1.27,0.03-2.47-0.29-3.61-0.97   c-0.98-0.58-1.72-1.29-2.23-2.14s-0.82-1.71-0.92-2.6l-4.9,8.26l-3.37-2l11.68-19.7l3.37,2l-1.14,1.93   C174.87,22.38,175.77,22.23,176.77,22.27z M179.09,29.24c0.02-0.78-0.15-1.48-0.51-2.11c-0.36-0.62-0.85-1.12-1.48-1.49   c-0.61-0.36-1.28-0.55-2-0.55s-1.43,0.19-2.11,0.59c-0.68,0.4-1.26,1-1.74,1.8c-0.48,0.8-0.73,1.6-0.75,2.39   c-0.02,0.79,0.14,1.5,0.49,2.13s0.83,1.13,1.44,1.49c0.63,0.37,1.3,0.56,2.03,0.55s1.43-0.2,2.11-0.6c0.68-0.4,1.26-1.01,1.75-1.83   C178.82,30.81,179.07,30.02,179.09,29.24z"></path>
              <path class="gt1-a" d="M207.29,40.5l-2.18,2.3l-3.78-3.58l-11.27,11.89l-2.85-2.7l11.27-11.89l-3.78-3.58l2.18-2.3L207.29,40.5z"></path>
              <path class="gt1-a" d="M196.45,56.74c-0.22-1.35-0.07-2.67,0.45-3.95c0.53-1.29,1.41-2.43,2.65-3.41c1.24-0.99,2.56-1.58,3.94-1.79   c1.38-0.21,2.71-0.04,3.99,0.5s2.38,1.39,3.3,2.56c0.93,1.17,1.51,2.43,1.75,3.8c0.24,1.36,0.1,2.7-0.42,4   c-0.52,1.3-1.39,2.45-2.64,3.43c-1.24,0.99-2.56,1.58-3.96,1.77c-1.4,0.19-2.74,0.02-4.01-0.53c-1.28-0.55-2.39-1.41-3.33-2.59   C197.25,59.35,196.67,58.09,196.45,56.74z M202.5,59.64c0.66,0.28,1.38,0.34,2.15,0.21c0.77-0.14,1.55-0.51,2.32-1.13   c1.15-0.92,1.8-1.93,1.94-3.03s-0.14-2.09-0.84-2.97c-0.7-0.88-1.59-1.36-2.68-1.46c-1.09-0.1-2.21,0.31-3.37,1.23   c-1.16,0.92-1.81,1.91-1.98,2.98c-0.16,1.07,0.1,2.04,0.8,2.92C201.29,58.95,201.84,59.36,202.5,59.64z"></path>
            </g>
            <g>
              <path class="gt1-a" d="M22.92,160.53l-3.03,0.92l-1.52-4.98l-15.67,4.78l-1.14-3.75l15.67-4.78l-1.52-4.98l3.03-0.92L22.92,160.53z"></path>
              <path class="gt1-a" d="M21,162.68l3.3-1.47l2.74,6.17l-18.65,8.29l-1.64-3.68l15.35-6.82L21,162.68z"></path>
              <path class="gt1-a" d="M36.8,187.21c0.25,1.73,0.02,3.38-0.69,4.93c-0.71,1.55-1.87,2.9-3.46,4.04s-3.24,1.79-4.92,1.95   c-1.69,0.16-3.31-0.16-4.87-0.96c-1.56-0.8-2.94-2.04-4.13-3.71l-3.97-5.56l15.9-11.36l3.97,5.56   C35.82,183.77,36.55,185.47,36.8,187.21z M25.49,194.31c1.56,0.26,3.17-0.2,4.83-1.38s2.62-2.56,2.91-4.14   c0.28-1.58-0.17-3.2-1.37-4.87l-1.61-2.25l-10.5,7.5l1.61,2.26C22.55,193.08,23.93,194.05,25.49,194.31z"></path>
              <path class="gt1-a" d="M42.03,197.47l-11.37,10.55l-2.67-2.87l11.37-10.55L42.03,197.47z M41.38,193.08   c0.01-0.63,0.25-1.17,0.73-1.62c0.48-0.44,1.03-0.65,1.67-0.61s1.18,0.31,1.65,0.81c0.47,0.51,0.7,1.08,0.69,1.71   c-0.01,0.63-0.25,1.17-0.73,1.62c-0.48,0.44-1.04,0.65-1.67,0.61s-1.18-0.31-1.65-0.81S41.37,193.72,41.38,193.08z"></path>
              <path class="gt1-a" d="M42.07,202.85c1.26-0.53,2.51-0.69,3.75-0.5c1.24,0.19,2.37,0.71,3.38,1.57c0.88,0.75,1.51,1.58,1.87,2.49   c0.36,0.92,0.52,1.81,0.46,2.69l1.42-1.69l3.02,2.54l-9.99,11.87l-3.02-2.54l1.46-1.73c-0.85,0.23-1.77,0.24-2.76,0.04   c-0.99-0.21-1.92-0.68-2.81-1.43c-1-0.84-1.69-1.87-2.08-3.07c-0.39-1.21-0.43-2.48-0.12-3.82c0.31-1.34,0.97-2.61,2-3.83   C39.68,204.24,40.81,203.38,42.07,202.85z M49.12,211.11c0.15-0.76,0.1-1.49-0.15-2.17c-0.25-0.69-0.66-1.26-1.21-1.73   c-0.56-0.47-1.19-0.77-1.88-0.89c-0.7-0.13-1.42-0.05-2.15,0.22c-0.73,0.27-1.4,0.77-2,1.48c-0.6,0.71-0.98,1.46-1.14,2.24   c-0.16,0.78-0.12,1.52,0.12,2.21c0.24,0.69,0.63,1.26,1.17,1.72c0.56,0.47,1.2,0.77,1.92,0.9c0.72,0.13,1.44,0.05,2.17-0.23   s1.39-0.79,2.01-1.51C48.58,212.62,48.97,211.87,49.12,211.11z"></path>
              <path class="gt1-a" d="M63.65,215.26c1,0.04,1.99,0.35,2.98,0.92c1.15,0.67,2.02,1.55,2.62,2.66c0.6,1.1,0.87,2.33,0.8,3.69   s-0.5,2.72-1.29,4.09c-0.8,1.37-1.77,2.43-2.93,3.17c-1.16,0.74-2.37,1.13-3.63,1.18c-1.27,0.04-2.47-0.27-3.62-0.94   c-1-0.58-1.76-1.29-2.28-2.12c-0.52-0.83-0.82-1.69-0.91-2.58l-1.11,1.91l-3.39-1.97l10.42-17.91l3.39,1.97l-3.76,6.46   C61.74,215.39,62.65,215.22,63.65,215.26z M66.02,222.22c0.01-0.78-0.16-1.48-0.53-2.1s-0.86-1.12-1.49-1.48   c-0.61-0.36-1.28-0.54-2-0.54s-1.42,0.2-2.1,0.61c-0.68,0.41-1.25,1.01-1.72,1.82c-0.47,0.81-0.71,1.61-0.73,2.39   s0.15,1.5,0.51,2.13c0.36,0.63,0.84,1.12,1.46,1.48c0.63,0.37,1.31,0.54,2.04,0.54c0.73-0.01,1.43-0.21,2.11-0.62   c0.68-0.41,1.26-1.02,1.74-1.84C65.76,223.8,66,223.01,66.02,222.22z"></path>
              <path class="gt1-a" d="M85.05,234.23l-10.61-4c-0.31,1.08-0.25,2.04,0.17,2.88s1.11,1.43,2.05,1.79c1.36,0.51,2.55,0.29,3.57-0.66   l3.96,1.49c-0.95,1.24-2.18,2.08-3.71,2.54c-1.53,0.45-3.16,0.35-4.88-0.3c-1.4-0.53-2.54-1.31-3.41-2.35   c-0.88-1.04-1.41-2.24-1.6-3.61s-0.01-2.8,0.55-4.28c0.57-1.5,1.37-2.71,2.41-3.61c1.04-0.91,2.22-1.46,3.55-1.65   c1.33-0.2,2.71-0.03,4.14,0.51c1.38,0.52,2.5,1.28,3.37,2.29s1.4,2.17,1.59,3.49c0.19,1.32,0.02,2.69-0.51,4.1   C85.49,233.38,85.28,233.84,85.05,234.23z M82.28,230.38c0.34-0.95,0.28-1.83-0.17-2.65c-0.45-0.82-1.16-1.41-2.12-1.77   c-0.91-0.34-1.78-0.36-2.6-0.04c-0.83,0.32-1.5,0.94-2,1.86L82.28,230.38z"></path>
              <path class="gt1-a" d="M94.53,230.56l-1.71,7.31c-0.12,0.51-0.08,0.91,0.11,1.19c0.19,0.29,0.58,0.5,1.16,0.63l1.77,0.41l-0.75,3.22   l-2.4-0.56c-3.22-0.75-4.46-2.69-3.73-5.82l1.7-7.28l-1.8-0.42l0.73-3.13l1.8,0.42l0.87-3.74l3.84,0.9l-0.87,3.74l3.38,0.79   l-0.73,3.13L94.53,230.56z"></path>
              <path class="gt1-a" d="M114.44,239.08l-11.28-1.13c-0.02,1.12,0.28,2.04,0.91,2.74c0.62,0.7,1.44,1.1,2.44,1.2   c1.45,0.15,2.54-0.37,3.28-1.56l4.21,0.42c-0.59,1.44-1.57,2.58-2.93,3.41c-1.36,0.83-2.96,1.15-4.8,0.97   c-1.49-0.15-2.79-0.61-3.9-1.39s-1.94-1.8-2.48-3.08c-0.54-1.27-0.73-2.7-0.57-4.28c0.16-1.6,0.62-2.97,1.4-4.11   c0.77-1.14,1.77-1.98,3.01-2.51s2.61-0.72,4.14-0.57c1.47,0.15,2.75,0.59,3.85,1.34c1.1,0.75,1.91,1.73,2.43,2.96   c0.53,1.23,0.71,2.59,0.56,4.09C114.65,238.14,114.56,238.64,114.44,239.08z M110.78,236.07c0.08-1-0.2-1.84-0.84-2.52   c-0.65-0.67-1.48-1.06-2.5-1.17c-0.97-0.1-1.81,0.11-2.53,0.63c-0.72,0.52-1.2,1.29-1.46,2.32L110.78,236.07z"></path>
              <path class="gt1-a" d="M121.14,245.06c-1.03-0.41-1.85-0.99-2.48-1.75c-0.62-0.76-0.99-1.61-1.09-2.56l3.94-0.19   c0.1,0.59,0.42,1.07,0.95,1.44s1.18,0.53,1.94,0.5c0.75-0.04,1.32-0.21,1.73-0.53c0.41-0.32,0.6-0.71,0.57-1.18   c-0.02-0.5-0.3-0.87-0.82-1.1c-0.53-0.23-1.35-0.46-2.49-0.71c-1.17-0.22-2.13-0.47-2.88-0.73c-0.75-0.26-1.41-0.69-1.97-1.28   c-0.56-0.59-0.87-1.41-0.92-2.45c-0.04-0.86,0.17-1.65,0.63-2.38c0.46-0.73,1.14-1.32,2.05-1.78c0.9-0.45,1.98-0.71,3.23-0.77   c1.85-0.09,3.34,0.3,4.48,1.17c1.14,0.87,1.81,2.09,2,3.65l-3.75,0.18c-0.08-0.61-0.37-1.09-0.84-1.43   c-0.47-0.34-1.09-0.5-1.86-0.46c-0.71,0.03-1.25,0.19-1.62,0.47s-0.54,0.65-0.52,1.12c0.03,0.52,0.3,0.91,0.84,1.15   c0.53,0.25,1.36,0.48,2.47,0.71c1.13,0.23,2.07,0.47,2.81,0.74c0.74,0.26,1.39,0.7,1.95,1.29c0.56,0.6,0.88,1.41,0.94,2.44   c0.04,0.89-0.17,1.71-0.63,2.44c-0.46,0.73-1.14,1.32-2.05,1.76c-0.9,0.45-1.97,0.7-3.2,0.75   C123.32,245.64,122.17,245.47,121.14,245.06z"></path>
              <path class="gt1-a" d="M151.22,220.84l0.8,3.06l-5.04,1.31l4.13,15.85l-3.79,0.99l-4.13-15.85l-5.04,1.31l-0.8-3.06L151.22,220.84z"></path>
              <path class="gt1-a" d="M163.04,236.33c-1.36-0.13-2.6-0.61-3.71-1.45s-1.98-1.99-2.62-3.44c-0.63-1.45-0.88-2.88-0.72-4.27   c0.16-1.39,0.66-2.63,1.5-3.73c0.85-1.09,1.95-1.94,3.32-2.54s2.74-0.84,4.12-0.71s2.63,0.6,3.76,1.43   c1.13,0.83,2.01,1.97,2.64,3.43c0.63,1.45,0.87,2.88,0.69,4.28c-0.17,1.4-0.69,2.65-1.54,3.75c-0.86,1.1-1.98,1.95-3.36,2.55   C165.76,236.23,164.4,236.46,163.04,236.33z M167.39,231.22c0.43-0.57,0.68-1.24,0.75-2.02s-0.1-1.63-0.5-2.53   c-0.59-1.35-1.4-2.24-2.43-2.65c-1.03-0.42-2.05-0.4-3.08,0.05s-1.73,1.19-2.1,2.22c-0.38,1.03-0.27,2.22,0.32,3.57   s1.38,2.24,2.38,2.67c0.99,0.43,2,0.42,3.03-0.03C166.41,232.22,166.96,231.79,167.39,231.22z"></path>
              <path class="gt1-a" d="M178.18,212.13c0.98-0.1,1.89,0.02,2.71,0.35l-1.21-1.85l3.3-2.17l8.58,13.06c0.79,1.2,1.25,2.43,1.39,3.7   c0.14,1.26-0.1,2.49-0.7,3.68c-0.6,1.19-1.59,2.23-2.97,3.14c-1.84,1.21-3.63,1.77-5.37,1.69c-1.74-0.08-3.18-0.82-4.31-2.2   l3.25-2.14c0.56,0.48,1.24,0.71,2.04,0.69c0.8-0.02,1.61-0.3,2.42-0.83c0.95-0.62,1.54-1.42,1.76-2.38   c0.22-0.96-0.05-2.02-0.81-3.17l-1.32-2.01c-0.02,0.88-0.27,1.77-0.74,2.67c-0.48,0.89-1.19,1.65-2.14,2.28   c-1.09,0.72-2.28,1.09-3.55,1.12c-1.27,0.03-2.51-0.29-3.7-0.97c-1.19-0.68-2.23-1.68-3.1-3.01c-0.86-1.31-1.36-2.64-1.51-4   c-0.14-1.36,0.05-2.6,0.59-3.74c0.54-1.14,1.36-2.07,2.47-2.79C176.22,212.6,177.19,212.23,178.18,212.13z M182.11,215.37   c-0.69-0.36-1.39-0.52-2.12-0.48c-0.73,0.04-1.4,0.27-2.01,0.67s-1.07,0.92-1.39,1.55c-0.32,0.63-0.45,1.34-0.4,2.12   c0.05,0.78,0.34,1.56,0.85,2.34c0.51,0.78,1.12,1.36,1.82,1.73s1.42,0.55,2.15,0.52c0.73-0.03,1.39-0.24,1.98-0.63   c0.61-0.4,1.08-0.92,1.41-1.58c0.33-0.65,0.47-1.37,0.4-2.14c-0.06-0.77-0.35-1.56-0.88-2.36S182.8,215.74,182.11,215.37z"></path>
              <path class="gt1-a" d="M202.12,203.2l-8.33,7.7c0.83,0.76,1.71,1.14,2.65,1.13c0.94,0,1.78-0.35,2.52-1.03   c1.07-0.99,1.41-2.15,1.01-3.49l3.1-2.87c0.68,1.4,0.89,2.88,0.61,4.45c-0.28,1.57-1.1,2.98-2.46,4.23c-1.1,1.01-2.3,1.68-3.62,2   c-1.32,0.32-2.64,0.26-3.95-0.18c-1.31-0.44-2.5-1.24-3.58-2.41c-1.09-1.18-1.81-2.43-2.15-3.77c-0.34-1.33-0.31-2.64,0.11-3.92   c0.42-1.28,1.19-2.44,2.32-3.48c1.08-1,2.27-1.66,3.56-1.99c1.29-0.33,2.56-0.28,3.83,0.14c1.27,0.42,2.41,1.18,3.44,2.29   C201.55,202.43,201.87,202.82,202.12,203.2z M197.43,203.95c-0.7-0.73-1.51-1.07-2.45-1.04c-0.93,0.04-1.78,0.4-2.53,1.1   c-0.71,0.66-1.11,1.43-1.2,2.31c-0.09,0.88,0.17,1.76,0.77,2.63L197.43,203.95z"></path>
              <path class="gt1-a" d="M203.09,193.1l5.76,4.81c0.4,0.33,0.77,0.48,1.11,0.44c0.34-0.04,0.7-0.29,1.09-0.75l1.17-1.4l2.54,2.12   l-1.58,1.89c-2.12,2.54-4.41,2.77-6.87,0.72l-5.74-4.79l-1.18,1.42l-2.47-2.06l1.18-1.42l-2.94-2.46l2.53-3.03l2.94,2.46l2.23-2.67   l2.47,2.06L203.09,193.1z"></path>
              <path class="gt1-a" d="M211.25,176.7c0.92-0.5,1.94-0.7,3.06-0.61c1.12,0.1,2.27,0.52,3.46,1.26l7.7,4.84l-2.09,3.32l-7.25-4.56   c-1.04-0.66-2.01-0.9-2.9-0.73c-0.89,0.17-1.62,0.7-2.18,1.6c-0.58,0.92-0.75,1.82-0.52,2.7c0.23,0.88,0.86,1.65,1.91,2.31   l7.25,4.56l-2.09,3.32l-17.54-11.03l2.09-3.32l6.04,3.8c-0.3-0.78-0.39-1.63-0.27-2.55c0.12-0.92,0.46-1.81,1-2.68   C209.55,177.95,210.33,177.2,211.25,176.7z"></path>
              <path class="gt1-a" d="M227.54,161.32l-4.38,10.46c1.07,0.35,2.03,0.33,2.88-0.07s1.47-1.05,1.86-1.98c0.56-1.34,0.39-2.54-0.53-3.59   l1.63-3.9c1.2,0.99,2,2.26,2.4,3.8c0.4,1.54,0.24,3.17-0.48,4.87c-0.58,1.38-1.4,2.48-2.47,3.32c-1.07,0.84-2.29,1.33-3.67,1.47   c-1.38,0.14-2.79-0.09-4.26-0.71c-1.48-0.62-2.65-1.47-3.52-2.54c-0.87-1.07-1.37-2.28-1.52-3.61c-0.15-1.34,0.07-2.71,0.67-4.12   c0.57-1.36,1.37-2.46,2.41-3.29s2.22-1.32,3.54-1.46c1.33-0.14,2.68,0.08,4.08,0.66C226.7,160.84,227.15,161.07,227.54,161.32z    M223.58,163.94c-0.94-0.37-1.82-0.35-2.66,0.07c-0.83,0.42-1.45,1.1-1.85,2.05c-0.38,0.9-0.42,1.76-0.13,2.6   c0.29,0.84,0.88,1.53,1.79,2.07L223.58,163.94z"></path>
              <path class="gt1-a" d="M221.92,149.71c-0.24-0.91-0.22-1.86,0.05-2.87l3.97,1.08l-0.27,1c-0.32,1.19-0.29,2.16,0.11,2.92   c0.4,0.75,1.29,1.32,2.67,1.7l7.46,2.02l-1.02,3.78l-14.97-4.05l1.02-3.78l2.32,0.63C222.61,151.42,222.16,150.62,221.92,149.71z"></path>
            </g>
            <path class="gt1-b" d="M123.64,198.27h-12.39c-0.6,0-1.09-0.49-1.09-1.09v-68.64c0-0.6-0.49-1.09-1.09-1.09l-23.88,0.06  c-0.6,0-1.09-0.48-1.09-1.08l-0.02-9.29c0-0.6,0.49-1.09,1.09-1.09h64.54c0.6,0,1.09,0.49,1.09,1.09v11.22  c0,0.6-0.49,1.09-1.09,1.09h-23.9c-0.6,0-1.09,0.49-1.09,1.09v66.66C124.72,197.79,124.24,198.27,123.64,198.27z"></path>
            <path class="gt1-c" d="M157.95,65.37h9.17c0.6,0,1.09,0.49,1.09,1.09v97.71c0,0.6-0.49,1.09-1.09,1.09h-15.11  c-0.6,0-1.09-0.49-1.09-1.09V84.51c0-0.72-0.68-1.24-1.38-1.05l-15.41,4.28c-0.58,0.16-1.19-0.19-1.34-0.77l-3.15-12.1  c-0.15-0.56,0.17-1.13,0.72-1.31l23.82-7.6C155.4,65.57,156.67,65.37,157.95,65.37z"></path>
            <path class="gt1-d" d="M111.66,155c-2.47,1.57-5.13,2.94-7.99,4.11c-2.86,1.18-5.93,2.1-9.22,2.76c-3.29,0.66-6.73,1-10.34,1  c-6.42,0-12.26-1.08-17.5-3.23c-5.25-2.15-9.73-5.13-13.45-8.93c-3.72-3.8-6.6-8.28-8.63-13.45c-2.04-5.17-3.05-10.77-3.05-16.8  c0-5.79,1.04-11.28,3.11-16.44c2.07-5.17,4.99-9.69,8.75-13.57c3.76-3.88,8.24-6.95,13.45-9.22c5.21-2.27,10.9-3.41,17.09-3.41  c3.6,0,6.87,0.26,9.81,0.76c2.94,0.51,5.66,1.23,8.16,2.17c2.51,0.94,4.87,2.1,7.11,3.47c1.94,1.19,3.83,2.54,5.68,4.05  c0.47,0.38,0.53,1.08,0.14,1.54l-7.77,9.26c-0.38,0.46-1.06,0.51-1.52,0.14c-1.3-1.06-2.63-2.05-3.99-2.95  c-1.64-1.1-3.37-2.02-5.17-2.76c-1.8-0.74-3.78-1.33-5.93-1.76c-2.15-0.43-4.52-0.65-7.11-0.65c-3.76,0-7.26,0.77-10.51,2.3  c-3.25,1.53-6.07,3.63-8.46,6.3c-2.39,2.67-4.27,5.77-5.64,9.3c-1.37,3.53-2.06,7.3-2.06,11.3c0,4.24,0.66,8.16,2,11.77  c1.33,3.61,3.23,6.73,5.7,9.36c2.47,2.63,5.4,4.69,8.81,6.18c3.41,1.49,7.22,2.24,11.45,2.24c3.91,0,7.58-0.57,10.98-1.71  c3.21-1.07,6.01-2.48,8.42-4.22c0.28-0.21,0.45-0.54,0.45-0.89v-13.83c0-0.6-0.49-1.09-1.09-1.09H84.5c-0.6,0-1.09-0.49-1.09-1.09  v-10.4c0-0.6,0.49-1.09,1.09-1.09h32.83c0.6,0,1.09,0.49,1.09,1.09v26c0,4.98-2.48,9.66-6.68,12.34  C111.71,154.97,111.68,154.99,111.66,155z"></path>` +
    '</svg>';
  }

  document.getElementById('gt1-slot-hero').innerHTML = gt1LogoSVG(150);

  var backArrowSVG = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">'+
    '<path d="M15 6L9 12L15 18" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>'+
  '</svg>';
  document.querySelectorAll('.back-btn').forEach(function(btn){ btn.innerHTML = backArrowSVG; });
  document.getElementById('door-avatar-kids').innerHTML = chloeSVG({size:76, animated:false});
  document.getElementById('door-avatar-adult').innerHTML = sarahSVG({size:76, animated:false});
  document.getElementById('door-avatar-friends').innerHTML = jonSVG({size:76, animated:false});

  document.getElementById('meetTeamTeaserAvatars').innerHTML =
    '<div>'+chloeSVG({size:38, animated:false})+'</div>' +
    '<div>'+sarahSVG({size:38, animated:false})+'</div>' +
    '<div>'+jonSVG({size:38, animated:false})+'</div>';
  document.getElementById('meetTeamTeaser').addEventListener('click', function(){ goto('view-meet-team'); });

  document.getElementById('meetTeamChloe').innerHTML = chloeSVG({size:70, animated:false});
  document.getElementById('meetTeamSarah').innerHTML = sarahSVG({size:70, animated:false});
  document.getElementById('meetTeamJon').innerHTML = jonSVG({size:70, animated:false});
  document.getElementById('bud-zone-slot').innerHTML = chloeSVG({size:110});
  var characterTriggers = {};
  function makeCharacterClickable(elId, greetings){
    var wrap = document.getElementById(elId);
    if(!wrap) return;
    wrap.classList.add('bud-click-wrap');
    var greetingEl = document.createElement('div');
    greetingEl.className = 'bud-greeting';
    wrap.appendChild(greetingEl);
    function trigger(){
      sfxPeek();
      greetingEl.textContent = greetings[Math.floor(Math.random() * greetings.length)];
      greetingEl.classList.add('show');
      wrap.classList.remove('bud-clicked');
      void wrap.offsetWidth;
      wrap.classList.add('bud-clicked');
      clearTimeout(wrap._greetTimeout);
      wrap._greetTimeout = setTimeout(function(){ greetingEl.classList.remove('show'); }, 2400);
    }
    wrap.addEventListener('click', trigger);
    characterTriggers[elId] = trigger;
  }
  makeCharacterClickable('bud-zone-slot', [
    "Hi there! 👋", "Hello, friend!", "Hiya!", "Great to see you!",
    "How are you today?", "You've got this!", "Ready for an adventure?", "Yay, you're here!"
  ]);
  document.getElementById('bud-zone-slot-adult').innerHTML = sarahSVG({size:150});
  makeCharacterClickable('bud-zone-slot-adult', [
    "Hello there! 👋", "How are things today?", "Great to see you!",
    "You're doing brilliantly.", "Here if you need anything.", "Hiya!"
  ]);
  document.getElementById('bud-story-slot').innerHTML = chloeSVG({size:80, animated:false});
  document.getElementById('sarah-story-slot').innerHTML = sarahSVG({size:80, animated:false});
  document.getElementById('jon-story-slot').innerHTML = jonSVG({size:80, animated:false});
  document.getElementById('bud-day-slot').innerHTML = chloeSVG({size:60, animated:false});

  document.getElementById('ziggy-zone-slot').innerHTML = jonSVG({size:110});
  makeCharacterClickable('ziggy-zone-slot', [
    "Hi, I'm Jon! 👋", "Hey there!", "Hiya, friend!", "So great you're here!",
    "How's it going today?", "You're a great friend!", "Nice to see you!"
  ]);
  document.getElementById('ziggy-story-slot').innerHTML = jonSVG({size:60, animated:false});

  document.getElementById('gt1-slot-brand').innerHTML = gt1LogoSVG(34);
  document.getElementById('gt1-slot-panel').innerHTML = gt1LogoSVG(52);
  document.getElementById('gt1-slot-justdiagnosed').innerHTML = gt1LogoSVG(44);

  /* ============ Sound engine (Web Audio synthesis, Kids Zone only) ============ */
  var soundEnabled = true;
  var audioCtx = null;

  function ensureAudioCtx(){
    if(!audioCtx){
      try{ audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }catch(e){ audioCtx = null; }
    }
    if(audioCtx && audioCtx.state === 'suspended'){ audioCtx.resume(); }
    return audioCtx;
  }

  function playTone(freq, duration, opts){
    if(!soundEnabled) return;
    var ctx = ensureAudioCtx();
    if(!ctx) return;
    opts = opts || {};
    var osc = ctx.createOscillator();
    var gain = ctx.createGain();
    osc.type = opts.type || 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    if(opts.slideTo){
      osc.frequency.exponentialRampToValueAtTime(opts.slideTo, ctx.currentTime + duration);
    }
    var vol = opts.volume != null ? opts.volume : 0.15;
    gain.gain.setValueAtTime(vol, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration + 0.03);
  }

  function sfxClick(){
    playTone(520, 0.05, {type:'square', volume:0.07});
  }

  function sfxCorrect(){
    [523.25, 659.25, 783.99].forEach(function(freq, i){
      setTimeout(function(){ playTone(freq, 0.16, {type:'triangle', volume:0.14}); }, i*85);
    });
  }

  function sfxWrong(){
    // silly descending "wah-wah" trombone slide
    playTone(320, 0.55, {type:'sawtooth', volume:0.09, slideTo:110});
  }

  function sfxMatch(){
    // cheerful little "pop" chime
    playTone(660, 0.1, {type:'sine', volume:0.14});
    setTimeout(function(){ playTone(880, 0.16, {type:'sine', volume:0.14}); }, 80);
  }

  function sfxMismatch(){
    // gentle low "boop", not harsh
    playTone(180, 0.14, {type:'square', volume:0.07});
  }

  function sfxBadge(){
    // fuller fanfare for badge unlocks
    [523.25, 659.25, 783.99, 1046.5].forEach(function(freq, i){
      setTimeout(function(){ playTone(freq, 0.2, {type:'triangle', volume:0.16}); }, i*95);
    });
  }

  function sfxPeek(){
    playTone(494, 0.1, {type:'sine', volume:0.09});
    setTimeout(function(){ playTone(740, 0.14, {type:'sine', volume:0.1}); }, 90);
  }

  /* ============ Kids Zone: recorded voice/reaction clips ============ */
  var voiceClipEls = {};
  var VOICE_CLIP_VOLUME = 0.55;
  var AUDIO_BASE_PATH = 'audio/';

  function getVoiceClip(key){
    if(voiceClipEls[key]) return voiceClipEls[key];
    try{
      var audio = new Audio(AUDIO_BASE_PATH + key + '.mp3');
      audio.volume = VOICE_CLIP_VOLUME;
      voiceClipEls[key] = audio;
      return audio;
    }catch(e){
      return null;
    }
  }

  function playClip(key){
    if(!soundEnabled) return;
    var audio = getVoiceClip(key);
    if(!audio) return;
    try{
      audio.currentTime = 0;
      var p = audio.play();
      if(p && p.catch){ p.catch(function(){}); }
    }catch(e){}
  }

  /* ============ Background music engine (both zones, independent volumes/toggles) ============ */
  var adultMusicEnabled = true;
  var kidsMusicEnabled = true;
  var audioEls = {};
  var currentTrackByZone = { adult: null, kids: null, friends: null };
  var TRACK_VOLUME_ADULT = 0.17;
  var TRACK_VOLUME_KIDS = 0.14;
  var TRACK_VOLUME_FRIENDS = 0.14;
  var friendsMusicEnabled = true;

  function getAudioDataUri(key){
    return AUDIO_BASE_PATH + key + '.mp3';
  }

  function getZoneAudio(key){
    if(audioEls[key]) return audioEls[key];
    try{
      var audio = new Audio();
      audio.loop = true;
      audio.volume = 0;
      audio.src = getAudioDataUri(key);
      audioEls[key] = audio;
      return audio;
    }catch(e){
      return null;
    }
  }

  function fadeAudio(audio, toVol, duration){
    var steps = 14;
    var stepTime = duration / steps;
    var startVol = audio.volume;
    var delta = (toVol - startVol) / steps;
    var i = 0;
    clearInterval(audio._fadeInterval);
    audio._fadeInterval = setInterval(function(){
      i++;
      audio.volume = Math.max(0, Math.min(1, startVol + delta * i));
      if(i >= steps){
        clearInterval(audio._fadeInterval);
        if(toVol === 0){ audio.pause(); }
      }
    }, stepTime);
  }

  function setZoneTrack(zone, key){
    try{
      var enabled = zone === 'kids' ? kidsMusicEnabled : (zone === 'friends' ? friendsMusicEnabled : adultMusicEnabled);
      var vol = zone === 'kids' ? TRACK_VOLUME_KIDS : (zone === 'friends' ? TRACK_VOLUME_FRIENDS : TRACK_VOLUME_ADULT);
      if(currentTrackByZone[zone] === key) return;
      if(currentTrackByZone[zone] && audioEls[currentTrackByZone[zone]]){
        fadeAudio(audioEls[currentTrackByZone[zone]], 0, 800);
      }
      currentTrackByZone[zone] = key;
      if(!key) return;
      var audio = getZoneAudio(key);
      if(!audio) return;
      if(audio.paused){
        var p = audio.play();
        if(p && p.catch){ p.catch(function(){}); }
      }
      fadeAudio(audio, enabled ? vol : 0, 900);
    }catch(e){}
  }

  function stopZoneAudio(zone){
    if(currentTrackByZone[zone] && audioEls[currentTrackByZone[zone]]){
      fadeAudio(audioEls[currentTrackByZone[zone]], 0, 700);
    }
    currentTrackByZone[zone] = null;
  }

  function musicForView(id){
    if(id === 'view-adult-home' || id === 'view-adult-basics') return {zone:'adult', key:'adultMusicHome'};
    if(id === 'view-adult-scenario') return {zone:'adult', key:'adultMusicScenario'};
    if(id === 'view-adult-selfcare') return {zone:'adult', key:'adultMusicMood'};
    if(id === 'view-adult-justdiagnosed') return {zone:'adult', key:'adultMusicMood'};
    if(id === 'view-adult-equipment') return {zone:'adult', key:'adultMusicHome'};
    if(id === 'view-adult-school') return {zone:'adult', key:'adultMusicHome'};
    if(id === 'view-kids-home') return {zone:'kids', key:'kidsMusicHome'};
    if(id === 'view-kids-guardian') return {zone:'kids', key:'kidsMusicGuardian'};
    if(id === 'view-kids-symptom') return {zone:'kids', key:'kidsMusicSymptom'};
    if(id === 'view-kids-myths') return {zone:'kids', key:'kidsMusicMyths'};
    if(id === 'view-kids-day') return {zone:'kids', key:'kidsMusicDay'};
    if(id === 'view-kids-feelings') return {zone:'kids', key:'kidsMusicGuardian'};
    if(id === 'view-kids-explain') return {zone:'kids', key:'kidsMusicMyths'};
    if(id === 'view-kids-equipment') return {zone:'kids', key:'kidsMusicSymptom'};
    if(id === 'view-kids-littlewins') return {zone:'kids', key:'kidsMusicHome'};
    if(id === 'view-kids-badges') return {zone:'kids', key:'kidsMusicBadges'};
    if(id === 'view-friends-home') return {zone:'friends', key:'kidsMusicHome'};
    if(id === 'view-friends-knowledge') return {zone:'friends', key:'kidsMusicGuardian'};
    if(id === 'view-friends-understand') return {zone:'friends', key:'kidsMusicGuardian'};
    if(id === 'view-friends-questions') return {zone:'friends', key:'kidsMusicMyths'};
    if(id === 'view-friends-feelings') return {zone:'friends', key:'kidsMusicGuardian'};
    if(id === 'view-friends-tips') return {zone:'friends', key:'kidsMusicSymptom'};
    if(id === 'view-friends-scenario') return {zone:'friends', key:'kidsMusicDay'};
    if(id === 'view-friends-badges') return {zone:'friends', key:'kidsMusicBadges'};
    return null; // landing page stays silent
  }

  /* ============ State ============ */
  var state = {
    zone: null,
    badges: { guardian:false, symptom:false, myths:false, day:false, feelings:false, pack:false, explain:false, kit:false, wins:false },
  };

  var kidsBadgeMeta = [
    {key:'guardian', name:'Crew Friend', icon:'📖'},
    {key:'symptom',  name:'Symptom Spotter', icon:'🎯'},
    {key:'myths',    name:'Myth Buster',     icon:'🔍'},
    {key:'day',      name:'Day Master',      icon:'🎒'},
    {key:'feelings', name:'Feelings Friend',  icon:'💛'},
    {key:'pack',     name:'Bag Packer',      icon:'🧳'},
    {key:'explain',  name:'Great Explainer', icon:'💭'},
    {key:'kit',      name:'Kit Star',        icon:'🔧'},
    {key:'wins',     name:'Little Winner',   icon:'🌟'},
    {key:'wall',     name:'All Star',        icon:'⭐'},
  ];
  var KIDS_BADGE_TOTAL = 9;

  function earnBadge(key){
    if(state.badges[key]) return;
    state.badges[key] = true;
    renderBadgeProgress();
    launchConfetti();
    sfxBadge();
    playClip('sfxWow');
  }

  function renderBadgeProgress(){
    var earned = Object.keys(state.badges).filter(function(k){ return state.badges[k]; }).length;
    document.getElementById('kidsBadgeCount').textContent = earned + ' / ' + KIDS_BADGE_TOTAL + ' badges';
    document.getElementById('kidsProgressFill').style.width = (earned / KIDS_BADGE_TOTAL * 100) + '%';
    renderBadgeWall();
  }

  function renderBadgeWall(){
    var wall = document.getElementById('badgeWall');
    var earnedCount = Object.keys(state.badges).filter(function(k){return state.badges[k];}).length;
    var html = '';
    kidsBadgeMeta.forEach(function(b){
      var earned = b.key === 'wall' ? earnedCount >= KIDS_BADGE_TOTAL : state.badges[b.key];
      html += '<div class="badge-item '+(earned?'earned':'locked')+'">' +
                '<div class="badge-circle">'+b.icon+'</div>' +
                '<div class="badge-name">'+b.name+'</div>' +
              '</div>';
    });
    wall.innerHTML = html;

    var cert = document.getElementById('badgeCertificate');
    if(cert){
      cert.classList.toggle('hidden', earnedCount < KIDS_BADGE_TOTAL);
    }
  }

  /* ============ Navigation ============ */
  var allViews = ['view-landing','view-meet-team','view-kids-home','view-kids-guardian','view-kids-symptom','view-kids-myths','view-kids-day','view-kids-feelings','view-kids-explain','view-kids-equipment','view-kids-littlewins','view-kids-badges',
                   'view-adult-home','view-adult-basics','view-adult-scenario','view-adult-selfcare','view-adult-justdiagnosed','view-adult-equipment','view-adult-school',
                   'view-friends-home','view-friends-understand','view-friends-knowledge','view-friends-questions','view-friends-feelings','view-friends-tips','view-friends-scenario','view-friends-badges'];
  var currentViewId = 'view-landing';
  var autoGreetedZones = {};

  function goto(id){
    currentViewId = id;
    allViews.forEach(function(v){ document.getElementById(v).classList.add('hidden'); });
    document.getElementById(id).classList.remove('hidden');
    window.scrollTo({top:0,behavior:'smooth'});

    var topbar = document.getElementById('topbar');
    if(id === 'view-landing' || id === 'view-meet-team'){
      topbar.classList.add('hidden');
    } else {
      topbar.classList.remove('hidden');
    }
    if(id.indexOf('view-kids') === 0){
      document.body.classList.remove('mode-adult', 'mode-friends');
      document.getElementById('brand-label').textContent = 'Kids Zone';
    } else if(id.indexOf('view-adult') === 0){
      document.body.classList.add('mode-adult');
      document.body.classList.remove('mode-friends');
      document.getElementById('brand-label').textContent = 'Grown-Ups Zone';
    } else if(id.indexOf('view-friends') === 0){
      document.body.classList.add('mode-friends');
      document.body.classList.remove('mode-adult');
      document.getElementById('brand-label').textContent = 'Siblings & Friends Zone';
    } else if(id === 'view-meet-team'){
      document.body.classList.remove('mode-adult', 'mode-friends');
    }

    var track = musicForView(id);
    ['adult', 'kids', 'friends'].forEach(function(z){
      if(track && track.zone === z){
        setZoneTrack(z, track.key);
      } else {
        stopZoneAudio(z);
      }
    });

    var zoneHomeCharacter = { 'view-kids-home':'bud-zone-slot', 'view-adult-home':'bud-zone-slot-adult', 'view-friends-home':'ziggy-zone-slot' };
    if(zoneHomeCharacter[id] && !autoGreetedZones[id]){
      autoGreetedZones[id] = true;
      (function(elId){
        setTimeout(function(){
          if(characterTriggers[elId]){ characterTriggers[elId](); }
        }, 700);
      })(zoneHomeCharacter[id]);
    }
  }

  document.querySelectorAll('[data-zone]').forEach(function(btn){
    btn.addEventListener('click', function(){
      var zone = btn.getAttribute('data-zone');
      state.zone = zone;
      var homeView = zone === 'kids' ? 'view-kids-home' : (zone === 'friends' ? 'view-friends-home' : 'view-adult-home');
      goto(homeView);
    });
  });
  document.querySelectorAll('[data-goto]').forEach(function(btn){
    btn.addEventListener('click', function(){
      var dest = btn.getAttribute('data-goto');
      if(dest.indexOf('view-kids') === 0 || dest.indexOf('view-friends') === 0){ sfxClick(); }
      goto(dest);
    });
  });
  document.getElementById('switchZoneBtn').addEventListener('click', function(){
    goto('view-landing');
  });
  function setZoneSilent(zone, silent, btnEl){
    soundEnabled = !silent;
    if(zone === 'kids'){ kidsMusicEnabled = !silent; }
    else if(zone === 'adult'){ adultMusicEnabled = !silent; }
    else if(zone === 'friends'){ friendsMusicEnabled = !silent; }
    btnEl.textContent = silent ? '🔇' : '🔊';
    var key = currentTrackByZone[zone];
    if(key && audioEls[key]){
      var vol = zone === 'kids' ? TRACK_VOLUME_KIDS : (zone === 'friends' ? TRACK_VOLUME_FRIENDS : TRACK_VOLUME_ADULT);
      fadeAudio(audioEls[key], silent ? 0 : vol, 500);
    }
  }

  document.getElementById('kidsSoundToggle').addEventListener('click', function(){
    setZoneSilent('kids', soundEnabled, this);
  });

  document.getElementById('adultSoundToggle').addEventListener('click', function(){
    setZoneSilent('adult', soundEnabled, this);
  });

  document.getElementById('friendsSoundToggle').addEventListener('click', function(){
    setZoneSilent('friends', soundEnabled, this);
  });

  /* ============ Kids: Meet Your Guardian (story slideshow) ============ */
  var storySlides = [
    "Hi, I'm Chloe, I'm here to help you understand Type 1 Diabetes, or T1D for short!",
    "Your body needs a helper called insulin to move energy (sugar) from your blood into your cells.",
    "With T1D, your body's insulin-makers stopped working. That's nobody's fault, it's not something you did.",
    "You give your body the insulin it needs instead, and check your blood sugar to keep everything balanced.",
    "I found it helpful to give diabetes a name and make it my buddy, what would you name yours?",
    "Here's a handy way to remember the main signs to watch for, the 4Ts: Thirsty, Toilet, Tired, Thinner. If you ever notice these, tell an adult.",
    "You've also got a brilliant team around you, from family and friends, like Sarah and Jon, to those at the hospital who help look after you, like nurses, doctors, dietitians and others. They're the best people to ask if you ever have a question about your treatment.",
    "It might feel like a lot at first, but millions of kids live brilliant, active lives with T1D, playing any sport, going to sleepovers, eating what they like. You've got this, and I've got you!"
  ];
  var storyIndex = 0;
  function renderStory(){
    document.getElementById('storyText').textContent = storySlides[storyIndex];
    var dots = storySlides.map(function(_,i){ return '<span class="dot '+(i===storyIndex?'active':'')+'"></span>'; }).join('');
    document.getElementById('storyDots').innerHTML = dots;
    document.getElementById('storyBack').style.visibility = storyIndex === 0 ? 'hidden' : 'visible';
    document.getElementById('storyNext').textContent = storyIndex === storySlides.length - 1 ? "Finish" : "Next";
    var isTeamSlide = storySlides[storyIndex].indexOf('brilliant team') !== -1;
    document.getElementById('crew-team-avatars').classList.toggle('hidden', !isTeamSlide);
  }
  document.getElementById('storyNext').addEventListener('click', function(){
    sfxClick();
    if(storyIndex < storySlides.length - 1){
      storyIndex++;
      renderStory();
    } else {
      earnBadge('guardian');
      goto('view-kids-home');
      storyIndex = 0;
    }
  });
  document.getElementById('storyBack').addEventListener('click', function(){
    sfxClick();
    if(storyIndex > 0){ storyIndex--; renderStory(); }
  });
  renderStory();

  /* ============ Kids: Symptom Spotter (matching game) ============ */
  var matchPairs = [
    {id:'t1a', pair:'t1', type:'word', label:'Toilet'}, {id:'t1b', pair:'t1', type:'icon', label:'🚻'},
    {id:'t2a', pair:'t2', type:'word', label:'Thirsty'}, {id:'t2b', pair:'t2', type:'icon', label:'🥤'},
    {id:'t3a', pair:'t3', type:'word', label:'Tired'}, {id:'t3b', pair:'t3', type:'icon', label:'🥱'},
    {id:'t4a', pair:'t4', type:'word', label:'Thinner'}, {id:'t4b', pair:'t4', type:'icon', label:'👕'},
  ];
  var matchState = { flipped: [], matched: [] };

  function shuffle(arr){
    var a = arr.slice();
    for(var i=a.length-1;i>0;i--){
      var j = Math.floor(Math.random()*(i+1));
      var tmp=a[i]; a[i]=a[j]; a[j]=tmp;
    }
    return a;
  }

  function renderMatchGrid(){
    var grid = document.getElementById('matchGrid');
    var cards = shuffle(matchPairs);
    grid.innerHTML = cards.map(function(c){
      return '<button class="match-card" data-id="'+c.id+'" data-pair="'+c.pair+'">?</button>';
    }).join('');
    grid.querySelectorAll('.match-card').forEach(function(el){
      el.addEventListener('click', function(){ handleMatchClick(el); });
    });
  }

  function handleMatchClick(el){
    var id = el.getAttribute('data-id');
    if(matchState.matched.indexOf(id) !== -1) return;
    if(matchState.flipped.indexOf(id) !== -1) return;
    if(matchState.flipped.length >= 2) return;

    var card = matchPairs.find(function(c){ return c.id === id; });
    el.textContent = card.label;
    el.classList.add('revealed', 'type-' + card.type);
    matchState.flipped.push(id);
    sfxClick();

    if(matchState.flipped.length === 2){
      var firstId = matchState.flipped[0], secondId = matchState.flipped[1];
      var first = matchPairs.find(function(c){return c.id===firstId;});
      var second = matchPairs.find(function(c){return c.id===secondId;});
      if(first.pair === second.pair){
        matchState.matched.push(firstId, secondId);
        matchState.flipped = [];
        sfxMatch();
        playClip('sfxMmmhmm');
        document.querySelectorAll('.match-card').forEach(function(c){
          if(c.getAttribute('data-id')===firstId || c.getAttribute('data-id')===secondId){
            c.classList.add('matched');
          }
        });
        if(matchState.matched.length === matchPairs.length){
          document.getElementById('matchComplete').classList.remove('hidden');
          earnBadge('symptom');
        }
      } else {
        sfxMismatch();
        setTimeout(function(){
          document.querySelectorAll('.match-card').forEach(function(c){
            if(c.getAttribute('data-id')===firstId || c.getAttribute('data-id')===secondId){
              c.textContent = '?';
              c.classList.remove('revealed', 'type-word', 'type-icon');
              c.classList.add('shake');
              setTimeout(function(){ c.classList.remove('shake'); },350);
            }
          });
          matchState.flipped = [];
        }, 700);
      }
    }
  }
  renderMatchGrid();

  /* ============ Kids: Myth Busters ============ */
  var mythItems = [
    {statement:"You can catch Type 1 Diabetes from someone else, like a cold.", answer:'myth', explain:"T1D isn't contagious. It happens when the immune system affects the pancreas, you can't catch it from anyone."},
    {statement:"Eating too much sugar as a kid causes Type 1 Diabetes.", answer:'myth', explain:"T1D isn't caused by diet or how much sugar someone eats. It's an autoimmune condition."},
    {statement:"Kids with T1D can still play sports and eat cake at parties.", answer:'truth', explain:"Yes! With the right planning, kids with T1D can do all the things their friends do."},
    {statement:"People with T1D need insulin because their body stopped making it.", answer:'truth', explain:"Correct, the pancreas stops producing insulin, so it needs to be given another way."},
    {statement:"Kids with T1D have to miss out on sleepovers and parties.", answer:'myth', explain:"You can go and have fun just like anyone else, just take your insulin and keep an eye on your glucose."},
    {statement:"People with T1D can still become athletes, film stars, or even Prime Minister.", answer:'truth', explain:"Absolutely, plenty of people with T1D have gone on to do amazing things, including winning Olympic medals."},
    {statement:"You can tell someone has T1D just by looking at them.", answer:'myth', explain:"You can't tell from the outside. T1D isn't something that shows in how someone looks."},
    {statement:"Type 1 and Type 2 diabetes are the same thing.", answer:'myth', explain:"They're different conditions with different causes. T1D isn't linked to diet or lifestyle."},
    {statement:"Insulin cures Type 1 Diabetes.", answer:'myth', explain:"Insulin manages T1D and keeps the body working properly, but there's currently no cure."},
    {statement:"It's a good idea for your school to know about your T1D.", answer:'truth', explain:"Teachers and staff knowing helps them support you and know what to do if you ever need help."},
    {statement:"A low blood sugar can be dangerous if it's not treated.", answer:'truth', explain:"That's why it's important to treat lows quickly and let an adult know when it happens."},
  ];
  var mythIndex = 0;
  var mythAnswers = [];

  function renderMyth(){
    var item = mythItems[mythIndex];
    document.getElementById('mythStatement').textContent = item.statement;

    var dots = mythItems.map(function(_,i){
      return '<span class="'+(i<mythIndex?'done':'')+'"></span>';
    }).join('');
    document.getElementById('mythProgress').innerHTML = dots;

    document.getElementById('mythBack').classList.toggle('hidden', mythIndex === 0);

    var already = mythAnswers[mythIndex];
    var fb = document.getElementById('mythFeedback');
    var nextBtn = document.getElementById('mythNext');

    if(already){
      var correct = already.correct;
      fb.classList.remove('hidden');
      fb.innerHTML = '<strong>'+(correct ? "You got it! " : "Not quite, ") + (item.answer === 'truth' ? "That's true." : "That's false.") + '</strong><br>' + item.explain;
      document.querySelectorAll('.myth-choice').forEach(function(b){
        b.disabled = true;
        b.style.opacity = b.getAttribute('data-answer') === already.chosen ? 1 : .4;
      });
      nextBtn.classList.remove('hidden');
    } else {
      fb.classList.add('hidden');
      nextBtn.classList.add('hidden');
      document.querySelectorAll('.myth-choice').forEach(function(b){ b.disabled = false; b.style.opacity = 1; });
    }
  }

  document.querySelectorAll('.myth-choice').forEach(function(btn){
    btn.addEventListener('click', function(){
      var item = mythItems[mythIndex];
      var chosen = btn.getAttribute('data-answer');
      var correct = chosen === item.answer;
      mythAnswers[mythIndex] = {chosen:chosen, correct:correct};
      var fb = document.getElementById('mythFeedback');
      fb.classList.remove('hidden');
      fb.innerHTML = '<strong>'+(correct ? "You got it! " : "Not quite, ") + (item.answer === 'truth' ? "That's true." : "That's false.") + '</strong><br>' + item.explain;
      document.querySelectorAll('.myth-choice').forEach(function(b){ b.disabled = true; b.style.opacity = .6; });
      document.getElementById('mythNext').classList.remove('hidden');
      if(correct){ sfxCorrect(); playClip('sfxYay'); } else { sfxWrong(); playClip('sfxHuh'); }
    });
  });

  document.getElementById('mythBack').addEventListener('click', function(){
    sfxClick();
    if(mythIndex > 0){ mythIndex--; renderMyth(); }
  });

  document.getElementById('mythNext').addEventListener('click', function(){
    mythIndex++;
    if(mythIndex >= mythItems.length){
      earnBadge('myths');
      playClip('sfxWoo');
      mythIndex = 0;
      mythAnswers = [];
      goto('view-kids-home');
    } else {
      renderMyth();
    }
  });
  renderMyth();

  /* ============ Kids: A Day in My Life (branching stories) ============ */
  var dayStories = {
    school: {
      title: "A School Day",
      icon: "🎒",
      desc: "Follow Max through class, PE and lunch.",
      nodes: {
        start: {
          type: 'packing',
          bagName: 'school bag',
          items: [
            {id:'insulin', label:'Insulin pen', need:true},
            {id:'meter', label:'Blood glucose meter', need:true},
            {id:'hypo', label:'Hypo treatment', need:true},
            {id:'book', label:'Reading book', need:false},
            {id:'pencilcase', label:'Pencil case', need:false},
            {id:'dino', label:'Toy dinosaur', need:false},
          ],
          next: 'morning_intro'
        },
        morning_intro: {
          text: "Morning! Max's bag is packed. What should Max do before breakfast?",
          choices: [
            {label:"Just eat breakfast, sort it out later", next:'morning_wrong'},
            {label:"Check blood sugar and take insulin for breakfast", next:'morning_right'},
          ]
        },
        morning_wrong: {
          text: "It's best not to skip this step, checking first means Max's body gets exactly what it needs. Let's try again.",
          choices: [{label:"Okay, try again", next:'morning_intro'}]
        },
        morning_right: {
          text: "Nice one! Max checks, takes the right amount of insulin, and enjoys breakfast. Now it's PE lesson, before heading out, what should Max do?",
          choices: [
            {label:"Just go straight out and play", next:'pe_wrong'},
            {label:"Grab the diabetes kit in case levels dip during exercise", next:'pe_right'},
          ]
        },
        pe_wrong: {
          text: "Exercise can make blood sugar drop, so it's good to have the kit close by, just in case. Let's try that again.",
          choices: [{label:"Okay, try again", next:'morning_right'}]
        },
        pe_right: {
          text: "Smart thinking! PE goes brilliantly, Max scores a goal! At lunch, Max suddenly feels shaky and a bit wobbly. What now?",
          choices: [
            {label:"Ignore it and keep playing with friends", next:'lunch_wrong'},
            {label:"Tell a teacher and check blood sugar", next:'lunch_right'},
          ]
        },
        lunch_wrong: {
          text: "Feeling shaky is a sign worth telling an adult about straight away, even if it feels like a fuss. Let's try that moment again.",
          choices: [{label:"Okay, try again", next:'pe_right'}]
        },
        lunch_right: {
          text: "Great choice, Max tells the teacher, treats the low, and feels better in a few minutes. Lessons carry on as normal. At the end of the day, before heading home, what should Max do?",
          choices: [
            {label:"Just grab your bag and rush out the door", next:'hometime_wrong'},
            {label:"Check your kit is packed and let mum know how the day went", next:'hometime_right'},
          ]
        },
        hometime_wrong: {
          text: "It only takes a moment to check everything's packed, that way nothing gets left behind for tomorrow. Let's try that again.",
          choices: [{label:"Okay, try again", next:'lunch_right'}]
        },
        hometime_right: {
          text: "Perfect! Max heads home with everything packed, and tells mum all about the low at lunch and how it was handled. By home time, Max has had a totally normal day: class, PE, lunch with friends, and handled a wobble like a pro. That's what living well with T1D looks like!",
          choices: [{label:"Finish", next:'FINISH'}]
        }
      }
    },

    party: {
      title: "Birthday Party",
      icon: "🎂",
      desc: "Cake, games and a party with friends.",
      nodes: {
        start: {
          text: "It's your friend's birthday party, there's cake, games and juice! Before you tuck into a slice of cake, what do you do?",
          choices: [
            {label:"Just eat as much cake as you like without thinking about it", next:'cake_wrong'},
            {label:"Enjoy a slice and count the carbs for your insulin, just like at home", next:'cake_right'},
          ]
        },
        cake_wrong: {
          text: "Having T1D doesn't mean skipping cake, it just means counting the carbs so your insulin matches. Let's try that again.",
          choices: [{label:"Okay, try again", next:'start'}]
        },
        cake_right: {
          text: "Perfect! You enjoy your cake and join in with musical statues, you're brilliant at it! Near the end, your friend's mum asks if there's anything you need before you head home. What do you say?",
          choices: [
            {label:"Nothing, I'm all sorted, thanks!", next:'partybag'},
            {label:"Say nothing and just hope it's fine", next:'party_wrong'},
          ]
        },
        party_wrong: {
          text: "It only takes a second to double check you've got everything you need before you go. Let's try that bit again.",
          choices: [{label:"Okay, try again", next:'cake_right'}]
        },
        partybag: {
          text: "On your way out, you get a party bag full of sweets. What do you do?",
          choices: [
            {label:"Eat them all right away without thinking about insulin", next:'partybag_wrong'},
            {label:"Save them for later and count the carbs when you do have them", next:'party_end'},
          ]
        },
        partybag_wrong: {
          text: "Eating a big bag of sweets all in one go without planning for it can send your levels high pretty fast. Let's think about that again.",
          choices: [{label:"Okay, try again", next:'partybag'}]
        },
        party_end: {
          text: "Nice thinking! You head home with a full party bag and a great plan for enjoying it later. You had a brilliant time, cake, games, dancing, and handling everything like a pro. That's what having T1D at a party looks like: still just as fun!",
          choices: [{label:"Finish", next:'FINISH'}]
        }
      }
    },

    sleepover: {
      title: "Sleepover Adventure",
      icon: "🛏️",
      desc: "A night at your best friend's house.",
      nodes: {
        start: {
          type: 'packing',
          bagName: 'overnight bag',
          items: [
            {id:'insulin', label:'Insulin pen', need:true},
            {id:'meter', label:'Blood glucose meter', need:true},
            {id:'hypo', label:'Hypo treatment', need:true},
            {id:'teddy', label:'Teddy bear', need:false},
            {id:'comic', label:'Comic book', need:false},
            {id:'torch', label:'Torch', need:false},
          ],
          next: 'before_bed'
        },
        before_bed: {
          text: "Bag packed! Before bed, you show your friend's mum where your kit is and what to do if you feel low overnight. How do you handle that?",
          choices: [
            {label:"It feels a bit awkward, but you explain it anyway", next:'morning'},
            {label:"Decide not to say anything and just manage alone", next:'tell_wrong'},
          ]
        },
        tell_wrong: {
          text: "Letting a grown-up know isn't embarrassing, it's what keeps you safe overnight. Let's try that conversation again.",
          choices: [{label:"Okay, try again", next:'before_bed'}]
        },
        morning: {
          text: "It's morning at the sleepover, pancakes for breakfast! Before you eat, what do you do?",
          choices: [
            {label:"Just dig in, you can sort it out after", next:'morning_wrong'},
            {label:"Check your blood sugar and take insulin for the pancakes, just like at home", next:'sleepover_end'},
          ]
        },
        morning_wrong: {
          text: "Checking first means your body gets what it needs right from the start, let's try that again.",
          choices: [{label:"Okay, try again", next:'morning'}]
        },
        sleepover_end: {
          text: "Lovely! You enjoy pancakes with your friend, pack up your things, and head home after a brilliant night. Everyone knew what to do, and you handled every bit of it like a pro.",
          choices: [{label:"Finish", next:'FINISH'}]
        }
      }
    },

    sportsday: {
      title: "Sports Day",
      icon: "🏃",
      desc: "Races, ribbons, and keeping an eye on levels.",
      nodes: {
        start: {
          type: 'packing',
          bagName: 'sports bag',
          items: [
            {id:'insulin', label:'Insulin pen', need:true},
            {id:'meter', label:'Blood glucose meter', need:true},
            {id:'hypo', label:'Hypo treatment', need:true},
            {id:'cards', label:'Trading cards', need:false},
            {id:'socks', label:'Spare socks', need:false},
            {id:'comic', label:'Comic book', need:false},
          ],
          next: 'race_intro'
        },
        race_intro: {
          text: "It's Sports Day, three races today! Before the first one, what should you check?",
          choices: [
            {label:"Nothing, just run!", next:'check_wrong'},
            {label:"Check your blood sugar and keep your hypo kit nearby", next:'check_right'},
          ]
        },
        check_wrong: {
          text: "Exercise can make levels drop fast, so it's worth checking before you race. Let's line up at the start again.",
          choices: [{label:"Okay, try again", next:'race_intro'}]
        },
        check_right: {
          text: "Good call! You're in a great range and win the sack race! Before the next one, you start to feel a bit wobbly and shaky. What now?",
          choices: [
            {label:"Push through and race anyway", next:'wobbly_wrong'},
            {label:"Tell your teacher and check your levels first", next:'recover'},
          ]
        },
        wobbly_wrong: {
          text: "Racing while feeling wobbly isn't safe, telling an adult and checking first is the right call. Let's try that moment again.",
          choices: [{label:"Okay, try again", next:'check_right'}]
        },
        recover: {
          text: "Good move, you treat the low and start to feel better. Before joining the last race, what do you do?",
          choices: [
            {label:"Jump straight back in without checking again", next:'recover_wrong'},
            {label:"Check your levels once more to make sure you're really ready", next:'sportsday_end'},
          ]
        },
        recover_wrong: {
          text: "It's best to confirm you've recovered before jumping into more exercise, levels can dip again quickly. Let's try that again.",
          choices: [{label:"Okay, try again", next:'recover'}]
        },
        sportsday_end: {
          text: "Great call! You're back in range and ready to go. You join the final race, cheer your team on, and even take home a ribbon. You handled Sports Day like a pro!",
          choices: [{label:"Finish", next:'FINISH'}]
        }
      }
    },

    holiday: {
      title: "Going on Holiday",
      icon: "✈️",
      desc: "Packing a suitcase, and making it through airport security.",
      nodes: {
        start: {
          type: 'packing',
          bagName: 'suitcase',
          items: [
            {id:'insulin', label:'Insulin and pens', need:true},
            {id:'meter', label:'Blood glucose meter', need:true},
            {id:'hypo', label:'Hypo treatment', need:true},
            {id:'letter', label:'Letter from your diabetes team', need:true},
            {id:'sunglasses', label:'Sunglasses', need:false},
            {id:'beachball', label:'Beach ball', need:false},
            {id:'comic', label:'Comic book', need:false},
          ],
          next: 'airport_intro'
        },
        airport_intro: {
          text: "Suitcase packed! You're at the airport, heading towards security. What's the best thing to do with your diabetes kit?",
          choices: [
            {label:"Bury it at the bottom of your suitcase to check in", next:'hide_wrong'},
            {label:"Keep it in your hand luggage and let security know you have it", next:'security_right'},
          ]
        },
        hide_wrong: {
          text: "Kit like insulin needs to stay with you, not packed away in the hold. It's also fine, and sensible, to tell security staff about it early. Let's try that again.",
          choices: [{label:"Okay, try again", next:'airport_intro'}]
        },
        security_right: {
          text: "Great thinking! At the scanner, the security officer asks if you're carrying anything medical. What do you do?",
          choices: [
            {label:"Say nothing and hope they don't notice", next:'scanner_wrong'},
            {label:"Tell them about your diabetes kit and show your letter if asked", next:'scanner_right'},
          ]
        },
        scanner_wrong: {
          text: "Being upfront about medical kit makes things quicker and easier, security staff deal with this all the time. Let's try that again.",
          choices: [{label:"Okay, try again", next:'security_right'}]
        },
        scanner_right: {
          text: "Perfect! They may check your kit separately or ask a few questions, that's completely normal. How do you feel about the extra check?",
          choices: [
            {label:"A bit impatient, but you wait calmly", next:'holiday_end'},
            {label:"Annoyed, and you complain loudly", next:'patience_wrong'},
          ]
        },
        patience_wrong: {
          text: "Extra checks can feel like a hassle, but they're just part of keeping everyone safe. A calm wait gets you through just as quickly. Let's try that again.",
          choices: [{label:"Okay, try again", next:'scanner_right'}]
        },
        holiday_end: {
          text: "You're through security, kit and all, and it's time to relax! Being prepared meant the airport bit went smoothly, so now it's just sunshine, sandcastles, and a well-earned holiday. Nice work!",
          choices: [{label:"Finish", next:'FINISH'}]
        }
      }
    }
  };

  var currentDayKey = null;

  function renderDayList(){
    var list = document.getElementById('dayList');
    list.innerHTML = Object.keys(dayStories).map(function(key){
      var s = dayStories[key];
      return '<button class="tile" data-day="'+key+'">' +
        '<div class="tile-icon" style="background:var(--kids-purple)">'+s.icon+'</div>' +
        '<div class="tile-title">'+s.title+'</div>' +
        '<p class="tile-desc">'+s.desc+'</p>' +
      '</button>';
    }).join('');
    list.querySelectorAll('[data-day]').forEach(function(btn){
      btn.addEventListener('click', function(){ sfxClick(); selectDay(btn.getAttribute('data-day')); });
    });
  }

  function selectDay(key){
    currentDayKey = key;
    document.getElementById('dayListWrap').classList.add('hidden');
    document.getElementById('dayPlayWrap').classList.remove('hidden');
    playClip('sfxLetsGo');
    renderDay('start');
  }

  document.getElementById('dayMainBack').addEventListener('click', function(){
    sfxClick();
    var playWrap = document.getElementById('dayPlayWrap');
    if(!playWrap.classList.contains('hidden')){
      // Mid-story: step back to the story picker rather than leaving the section
      playWrap.classList.add('hidden');
      document.getElementById('dayListWrap').classList.remove('hidden');
      currentDayKey = null;
    } else {
      // Already on the picker: leave the section
      goto('view-kids-home');
    }
  });

  function renderDay(nodeKey){
    if(nodeKey === 'FINISH'){
      earnBadge('day');
      playClip('sfxWoo');
      document.getElementById('dayPlayWrap').classList.add('hidden');
      document.getElementById('dayListWrap').classList.remove('hidden');
      currentDayKey = null;
      return;
    }
    var node = dayStories[currentDayKey].nodes[nodeKey];
    if(node.type === 'packing'){
      renderPackingStep(node);
      return;
    }
    document.getElementById('dayStoryUi').classList.remove('hidden');
    document.getElementById('dayPackingUi').classList.add('hidden');
    document.getElementById('dayText').textContent = node.text;
    var container = document.getElementById('dayChoices');
    container.innerHTML = '';
    node.choices.forEach(function(c){
      var btn = document.createElement('button');
      btn.className = 'btn' + (nodeKey.indexOf('wrong') !== -1 ? ' secondary' : '');
      btn.style.textAlign = 'left';
      btn.textContent = c.label;
      btn.addEventListener('click', function(){
        if(c.next.indexOf('wrong') !== -1){ sfxWrong(); playClip('sfxHuh'); } else { sfxCorrect(); playClip('sfxYay'); }
        renderDay(c.next);
      });
      container.appendChild(btn);
    });
  }
  renderDayList();

  /* ============ Kids: daily check-in ============ */
  var checkinResponses = {
    great: "Brilliant! Hope the rest of your day goes just as well.",
    okay: "Good to hear. Steady days are good days too.",
    meh: "Fair enough, not every day has to be amazing. Take it easy.",
    tough: "Sorry to hear that. Be a bit extra kind to yourself today, and tell a grown-up if you need to.",
  };
  document.querySelectorAll('.checkin-emoji').forEach(function(btn){
    btn.addEventListener('click', function(){
      document.querySelectorAll('.checkin-emoji').forEach(function(b){ b.classList.remove('selected'); });
      btn.classList.add('selected');
      sfxClick();
      var resp = document.getElementById('checkinResponse');
      resp.textContent = checkinResponses[btn.getAttribute('data-mood')];
      resp.classList.remove('hidden');
    });
  });

  /* ============ Kids: Your Feelings (worry sorter, breathing, telling a friend) ============ */
  var worryItems = [
    {worry:"What if I have a low and no one notices?", help:"That's why you learn the signs early and why trusted adults around you know what to look for too. You're not managing this completely alone."},
    {worry:"I feel different from my friends.", help:"Diabetes doesn't make you different, it just means that sometimes you have to do an extra step before carrying on. But it's important to remember everyone is different, that's what makes us unique! What is something that makes you unique?"},
    {worry:"Will this ever go away?", help:"T1D is something you'll always have, but it gets much easier to manage as you get more used to it. It doesn't stop you having a brilliant life."},
    {worry:"I don't know how to tell new people.", help:"You get to choose how much you share and when. A short, simple explanation is always enough."},
    {worry:"I worry I'm a burden to my parents.", help:"You are not a burden. The people looking after you want to, and love doing it, even on the harder days."},
    {worry:"Numbers feel like a test I can pass or fail.", help:"A number is just information, like a weather report. It tells you what to do next, it doesn't say anything about you as a person."},
  ];
  var worryGrid = document.getElementById('worryGrid');
  worryGrid.innerHTML = worryItems.map(function(item, i){
    return '<button class="tile" data-idx="'+i+'" style="text-align:left;">' +
      '<div class="tile-title" style="font-size:1rem;">"'+item.worry+'"</div>' +
      '<p class="tile-desc worry-detail hidden">'+item.help+'</p>' +
      '<p class="tile-desc worry-hint" style="font-weight:700; color:var(--kids-purple);">Tap to see what might help ↓</p>' +
    '</button>';
  }).join('');
  worryGrid.querySelectorAll('.tile').forEach(function(card){
    card.addEventListener('click', function(){
      sfxClick();
      card.querySelector('.worry-detail').classList.toggle('hidden');
      card.querySelector('.worry-hint').classList.toggle('hidden');
    });
  });

  var tellFriendItems = [
    {label:'The short version', text:'"I have Type 1 Diabetes, it means my body needs a bit of help with insulin. I just check things sometimes."'},
    {label:'If they ask about your kit', text:'"This checks my blood sugar so I know what my body needs. It only takes a second."'},
    {label:'If you\'d rather not explain right now', text:'"It\'s a health thing, I\'ll tell you more another time if you want!"'},
    {label:'If they ask why you\'re snacking at a weird time', text:'"I need to eat this now to keep my blood sugar steady, it\'s a diabetes thing."'},
    {label:'If they ask why you leave class sometimes', text:'"I just need to check my levels or sort something out, I\'ll be back in a minute."'},
    {label:'If someone teases you about it', text:'"It\'s not something I chose, and it\'s not something to make fun of."'},
    {label:'If a friend looks scared after seeing you treat a low', text:'"I\'m okay now, this is just part of managing it, I promise."'},
    {label:'If you\'re staying at a friend\'s house', text:'"I\'ve got everything I need in my bag, and your mum or dad knows what to do if I need help."'},
  ];
  document.getElementById('tellFriendGrid').innerHTML = tellFriendItems.map(function(item){
    return '<div class="tile" style="text-align:left;">' +
      '<div class="tile-title" style="font-size:1rem;">'+item.label+'</div>' +
      '<p class="tile-desc">'+item.text+'</p>' +
    '</div>';
  }).join('');

  var kidsBreathingActive = false;
  var kidsBreathingTimeout = null;
  var kidsBreathingPhases = [
    {label:'Breathe in...', duration:3000},
    {label:'Hold...', duration:2000},
    {label:'Breathe out...', duration:3000},
    {label:'Hold...', duration:2000},
  ];
  var kidsBreathingPhaseIdx = 0;
  function stepKidsBreathing(){
    var phase = kidsBreathingPhases[kidsBreathingPhaseIdx];
    document.getElementById('kidsBreathingLabel').textContent = phase.label;
    kidsBreathingTimeout = setTimeout(function(){
      kidsBreathingPhaseIdx = (kidsBreathingPhaseIdx + 1) % kidsBreathingPhases.length;
      stepKidsBreathing();
    }, phase.duration);
  }
  function startKidsBreathing(){
    kidsBreathingActive = true;
    document.getElementById('kidsBreathingCircle').style.animationPlayState = 'running';
    kidsBreathingPhaseIdx = 0;
    stepKidsBreathing();
    document.getElementById('kidsBreathingToggle').textContent = 'Stop';
  }
  function stopKidsBreathing(){
    kidsBreathingActive = false;
    document.getElementById('kidsBreathingCircle').style.animationPlayState = 'paused';
    clearTimeout(kidsBreathingTimeout);
    document.getElementById('kidsBreathingLabel').textContent = "Tap start when you're ready";
    document.getElementById('kidsBreathingToggle').textContent = 'Start';
  }
  document.getElementById('kidsBreathingToggle').addEventListener('click', function(){
    if(kidsBreathingActive){ stopKidsBreathing(); } else { startKidsBreathing(); }
  });

  document.getElementById('feelingsDoneBtn').addEventListener('click', function(){
    earnBadge('feelings');
    goto('view-kids-home');
  });

  /* ============ Kids: My Kit ============ */
  var equipmentKidsItems = [
    {icon:'<svg viewBox="0 0 100 100" width="30" height="30" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(-32 50 50)"><rect x="4" y="38" width="18" height="24" rx="6" fill="#1B3B66" stroke="#12294A" stroke-width="2"/><rect x="20" y="38" width="54" height="24" rx="5" fill="#2B6CB0" stroke="#1B3B66" stroke-width="2"/><rect x="28" y="45" width="38" height="10" rx="2" fill="#FFFFFF"/><rect x="74" y="44" width="10" height="12" rx="2" fill="#CBD5E0" stroke="#1B3B66" stroke-width="1.5"/><line x1="84" y1="50" x2="96" y2="50" stroke="#9AA5B1" stroke-width="2.5" stroke-linecap="round"/></g></svg>', name:'Insulin pen', fact:'This gives your body the insulin it needs, like a little helper for your body! It might feel like a quick pinch, but it\'s over in a flash.'},
    {emoji:'🩸', name:'Finger-prick tester', fact:'A tiny poke on your finger to see how you\'re doing. It only takes a couple of seconds, quicker than tying your shoelace!'},
    {emoji:'📟', name:'Insulin pump', fact:'A cool little gadget that can sit on your tummy or arm. It gives you insulin all through the day, so you might need fewer injections!'},
    {icon:'<svg viewBox="0 0 100 100" width="30" height="30" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="80" rx="30" ry="10" fill="#E8ECF1" stroke="#B9C2CC" stroke-width="2"/><circle cx="50" cy="55" r="32" fill="#FFFFFF" stroke="#2A2A2A" stroke-width="3"/><circle cx="50" cy="55" r="24" fill="none" stroke="#D8DEE5" stroke-width="1.5"/><circle cx="40" cy="50" r="4" fill="#2B6CB0"/><circle cx="60" cy="50" r="4" fill="#2B6CB0"/><circle cx="50" cy="64" r="2.5" fill="#2A2A2A"/><path d="M30 25 Q50 12 70 25" stroke="#2A2A2A" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>', name:'Sensor', fact:'A tiny sticker-like sensor that checks your sugar levels all by itself, no pokes needed! It just quietly does its job in the background.'},
    {emoji:'🎒', name:'Your kit bag', fact:'You\'ll have a little bag with everything you need, all in one place. Loads of kids like to decorate theirs with stickers to make it their own!'},
  ];
  document.getElementById('equipmentKidsGrid').innerHTML = equipmentKidsItems.map(function(item){
    return '<button class="tile" style="text-align:left;">' +
      '<div class="tile-icon" style="background:var(--kids-yellow); font-size:1.4rem;">'+(item.icon || item.emoji)+'</div>' +
      '<div class="tile-title" style="font-size:1rem;">'+item.name+'</div>' +
      '<p class="tile-desc worry-detail hidden">'+item.fact+'</p>' +
      '<p class="tile-desc worry-hint" style="font-weight:700; color:var(--kids-purple);">Tap to find out more ↓</p>' +
    '</button>';
  }).join('');
  document.getElementById('equipmentKidsGrid').querySelectorAll('.tile').forEach(function(card){
    card.addEventListener('click', function(){
      sfxClick();
      card.querySelector('.worry-detail').classList.toggle('hidden');
      card.querySelector('.worry-hint').classList.toggle('hidden');
    });
  });
  document.getElementById('equipmentDoneBtn').addEventListener('click', function(){
    earnBadge('kit');
    playClip('sfxYay');
    goto('view-kids-home');
  });

  /* ============ Kids: Little Wins ============ */
  var littleWinsItems = [
    {emoji:'🎮', title:'Cool Tech & Gadgets', points:[
      "You get cool, clever tech and gadgets most people never get to use, pumps, sensors, apps.",
      "You learn how to use medical tech before most adults even know what it is.",
    ]},
    {emoji:'🍎', title:'Food Know-How', points:[
      "You understand food better than most grown-ups.",
      "You learn what gives you energy, what keeps you steady, and what helps you feel good.",
      "You get to know carbs, snacks, and timing like a pro.",
      "You can make choices that help you feel strong and ready for anything.",
    ]},
    {emoji:'🧠', title:'Body Smarts', points:[
      "You know your body really well.",
      "You notice patterns other people miss.",
      "You can tell when you need a snack, a rest, or a boost.",
      "You learn more about how your body works than school teaches you.",
    ]},
    {emoji:'🏃', title:'Unstoppable', points:[
      "You can still do everything, sports, swimming, dancing, climbing, running, you can do it all.",
    ]},
    {emoji:'📣', title:'Your Cheer Squad', points:[
      "You get a whole team cheering for you, nurses, doctors, teachers, family, you have your own cheerleaders.",
      "You're never alone, there's loads of people with T1D.",
    ]},
    {emoji:'🌟', title:'Teaching Others', points:[
      "You get to teach others.",
      "Friends learn what your gadgets do.",
      "You get to explain things in your own way.",
      "You become the expert.",
    ]},
  ];
  document.getElementById('littleWinsGrid').innerHTML = littleWinsItems.map(function(item){
    var pointsHtml = item.points.map(function(p){ return '<li>'+p+'</li>'; }).join('');
    return '<button class="tile" style="text-align:left;">' +
      '<div class="tile-icon" style="background:var(--kids-yellow); font-size:1.4rem;">'+item.emoji+'</div>' +
      '<div class="tile-title" style="font-size:1rem;">'+item.title+'</div>' +
      '<ul class="tile-desc worry-detail hidden" style="margin:0; padding-left:18px; line-height:1.6;">'+pointsHtml+'</ul>' +
      '<p class="tile-desc worry-hint" style="font-weight:700; color:var(--kids-purple);">Tap to see ↓</p>' +
    '</button>';
  }).join('');
  document.getElementById('littleWinsGrid').querySelectorAll('.tile').forEach(function(card){
    card.addEventListener('click', function(){
      sfxClick();
      card.querySelector('.worry-detail').classList.toggle('hidden');
      card.querySelector('.worry-hint').classList.toggle('hidden');
    });
  });
  document.getElementById('littleWinsDoneBtn').addEventListener('click', function(){
    earnBadge('wins');
    playClip('sfxYay');
    goto('view-kids-home');
  });

  /* ============ Kids: reusable packing mini-game (used inside Day in My Life stories) ============ */
  var packSelected = {};
  var packEarned = false;

  function renderPackingStep(node){
    document.getElementById('dayStoryUi').classList.add('hidden');
    document.getElementById('dayPackingUi').classList.remove('hidden');
    document.getElementById('dayPackingTitle').textContent = 'Pack your ' + node.bagName;
    document.getElementById('dayPackingIntro').textContent = "Tap everything you should pack, then check your " + node.bagName + ".";
    packSelected = {};
    var grid = document.getElementById('dayPackingGrid');
    var shuffled = shuffle(node.items);
    grid.innerHTML = shuffled.map(function(item){
      return '<button class="match-card" data-id="'+item.id+'" style="font-size:.75rem;">'+item.label+'</button>';
    }).join('');
    grid.querySelectorAll('.match-card').forEach(function(card){
      card.addEventListener('click', function(){
        var id = card.getAttribute('data-id');
        packSelected[id] = !packSelected[id];
        card.classList.toggle('revealed', packSelected[id]);
        sfxClick();
      });
    });
    document.getElementById('dayPackingFeedback').classList.add('hidden');
    document.getElementById('dayPackingContinueBtn').classList.add('hidden');

    var checkBtn = document.getElementById('dayPackingCheckBtn');
    var newCheckBtn = checkBtn.cloneNode(true); // strip old listeners between story visits
    checkBtn.parentNode.replaceChild(newCheckBtn, checkBtn);
    newCheckBtn.addEventListener('click', function(){
      var essentials = node.items.filter(function(item){ return item.need; });
      var extrasChosen = node.items.filter(function(item){ return !item.need && packSelected[item.id]; });
      var missingEssentials = essentials.filter(function(item){ return !packSelected[item.id]; });
      var fb = document.getElementById('dayPackingFeedback');
      fb.classList.remove('hidden');

      if(missingEssentials.length === 0){
        fb.style.color = '#2FB894';
        if(extrasChosen.length === 0){
          fb.textContent = "Perfect! That's everything you need, and nothing you don't.";
        } else {
          var essentialNames = essentials.map(function(item){ return item.label; }).join(', ');
          var extraNames = extrasChosen.map(function(item){ return item.label; }).join(' and ');
          fb.textContent = "You've packed everything you need, " + essentialNames + " are the must-haves. " + extraNames + (extrasChosen.length > 1 ? " aren't essential" : " isn't essential") + ", but there's nothing wrong with bringing " + (extrasChosen.length > 1 ? "them" : "it") + " along too, if there's room.";
        }
        sfxCorrect();
        playClip('sfxYay');
        if(!packEarned){ packEarned = true; earnBadge('pack'); }
        document.getElementById('dayPackingContinueBtn').classList.remove('hidden');
      } else {
        fb.style.color = '#FF6F61';
        fb.textContent = "Not quite, have another look. Think about what you'd need if your levels changed while you're out.";
        sfxWrong();
        playClip('sfxHuh');
      }
    });

    var continueBtn = document.getElementById('dayPackingContinueBtn');
    var newContinueBtn = continueBtn.cloneNode(true); // strip old listeners between story visits
    continueBtn.parentNode.replaceChild(newContinueBtn, continueBtn);
    newContinueBtn.addEventListener('click', function(){
      sfxClick();
      document.getElementById('dayPackingUi').classList.add('hidden');
      document.getElementById('dayStoryUi').classList.remove('hidden');
      renderDay(node.next);
    });
  }

  /* ============ Kids: Explain It ============ */
  var explainItems = [
    {q:"A friend asks: \"Why do you check your finger like that?\"", options:[
      {label:'"It checks my blood sugar so I know what my body needs."', correct:true},
      {label:'"Don\'t worry about it."', correct:false},
      {label:'"I\'m not allowed to tell you."', correct:false},
    ], why:'A short, honest answer usually satisfies the question without making it feel like a big secret.'},
    {q:"A friend asks: \"What's that beeping thing?\"", options:[
      {label:'"It\'s just my phone."', correct:false},
      {label:'"It\'s part of my kit, it helps me keep track of things."', correct:true},
      {label:'"It\'s nothing."', correct:false},
    ], why:'Naming it simply, without over-explaining, keeps it low-key and normal.'},
    {q:"A friend asks: \"Can you eat that? Aren't you diabetic?\"", options:[
      {label:'"No, I can\'t eat anything like that ever."', correct:false},
      {label:'"Yeah, I just need to think about it a bit, like taking insulin for it."', correct:true},
      {label:'"That\'s a rude question."', correct:false},
    ], why:'Most food is fine with the right insulin dose, a quick honest answer clears up the myth without shutting the conversation down.'},
    {q:"A friend seems worried after seeing you treat a low. What can you say?", options:[
      {label:'"I\'m fine, this happens sometimes and I know what to do."', correct:true},
      {label:'"Never speak of this again."', correct:false},
      {label:'"It\'s really scary, I don\'t know what just happened."', correct:false},
    ], why:'Calm, confident reassurance helps friends worry less next time it happens.'},
    {q:"A friend asks: \"Can I catch diabetes from you?\"", options:[
      {label:'"No, it\'s not contagious, you can\'t catch it from me."', correct:true},
      {label:'"Maybe, better stay away from me."', correct:false},
      {label:'"I\'m not sure."', correct:false},
    ], why:'A clear, simple fact clears up the myth straight away and stops it spreading further.'},
    {q:"A teammate asks why you stop to check something during a match.", options:[
      {label:'"It only takes a second, then I\'m straight back in."', correct:true},
      {label:'"I\'m not allowed to say."', correct:false},
      {label:'"Just ignore me."', correct:false},
    ], why:'A quick, matter-of-fact answer keeps things moving without making it feel like a big deal.'},
    {q:"Someone offers you a sweet and looks confused when you pause before answering.", options:[
      {label:'"It\'s fine, I just need a second to work out my insulin for it."', correct:true},
      {label:'"I can never eat sweets."', correct:false},
      {label:'"Just give it to me, it\'s fine."', correct:false},
    ], why:'This clears up the myth that treats are off-limits, while showing that a little planning is part of the process.'},
    {q:"A new kid at school points at your pump and asks, \"What's wrong with you?\"", options:[
      {label:'"Nothing\'s wrong, it\'s just part of how I manage my diabetes."', correct:true},
      {label:'"None of your business."', correct:false},
      {label:'"It\'s a long story."', correct:false},
    ], why:'Reframing it from "wrong" to "how I manage things" answers confidently without feeling defensive.'},
  ];
  var explainIndex = 0;

  function renderExplain(){
    var item = explainItems[explainIndex];
    document.getElementById('explainQuestion').textContent = item.q;
    var dots = explainItems.map(function(_, i){ return '<span class="'+(i < explainIndex ? 'done' : '')+'"></span>'; }).join('');
    document.getElementById('explainProgress').innerHTML = dots;
    document.getElementById('explainFeedback').classList.add('hidden');
    document.getElementById('explainNext').classList.add('hidden');
    var choices = document.getElementById('explainChoices');
    choices.innerHTML = '';
    item.options.forEach(function(opt){
      var btn = document.createElement('button');
      btn.className = 'btn secondary';
      btn.style.textAlign = 'left';
      btn.textContent = opt.label;
      btn.addEventListener('click', function(){
        var fb = document.getElementById('explainFeedback');
        fb.classList.remove('hidden');
        fb.innerHTML = '<strong>'+(opt.correct ? "Great answer! " : "There's a better way to say it. ")+'</strong><br>' + item.why;
        document.querySelectorAll('#explainChoices button').forEach(function(b){ b.disabled = true; b.style.opacity = .6; });
        document.getElementById('explainNext').classList.remove('hidden');
        if(opt.correct){ sfxCorrect(); playClip('sfxYay'); } else { sfxWrong(); playClip('sfxHuh'); }
      });
      choices.appendChild(btn);
    });
  }
  document.getElementById('explainNext').addEventListener('click', function(){
    explainIndex++;
    if(explainIndex >= explainItems.length){
      earnBadge('explain');
      playClip('sfxWoo');
      explainIndex = 0;
      goto('view-kids-home');
    } else {
      renderExplain();
    }
  });
  renderExplain();

  /* ============ Adult: Just Diagnosed ============ */
  var justDiagnosedQuestionGroups = [
    {group:'Understanding the basics', qs:[
      'What exactly is happening in my child\'s body?',
      'What will a typical day of care look like for us?',
    ]},
    {group:'Insulin & equipment', qs:[
      'What insulin or device will we be using, and how does it work?',
      'What supplies do we need, and how do we reorder them?',
      'How do I know which equipment is right for my child?',
    ]},
    {group:'Food & daily life', qs:[
      'Is this about avoiding foods, or balancing them, what does that mean day to day?',
      'How do we manage parties, sports, and days out?',
    ]},
    {group:'School & childcare', qs:[
      'What does school need to know, and who explains it to them?',
      'Can we get a written care plan to share with school or carers?',
    ]},
    {group:'Emergencies', qs:[
      'What signs mean we need to act immediately?',
      'What\'s the out-of-hours or emergency contact number?',
    ]},
    {group:'Ongoing support', qs:[
      'How often will we have follow-up appointments?',
      'Is there a psychologist, dietitian, or counsellor on the team if we need one?',
      'Are there local or online support groups for families?',
      'What support is there for my child and me?',
    ]},
  ];
  document.getElementById('justDiagnosedQuestions').innerHTML = justDiagnosedQuestionGroups.map(function(g){
    return '<div class="panel" style="margin-bottom:14px;">' +
      '<h4 style="font-family:\'Archivo\',sans-serif; color:var(--adult-slate); font-size:0.975rem; margin-bottom:8px;">'+g.group+'</h4>' +
      '<ul style="margin:0; padding-left:20px; font-size:0.95rem; line-height:1.7;">' +
        g.qs.map(function(q){ return '<li>'+q+'</li>'; }).join('') +
      '</ul>' +
    '</div>';
  }).join('');

  /* ============ Adult: Understanding the Equipment ============ */
  var equipmentItems = [
    {name:'Insulin pen', what:'A device for manually injecting insulin, usually at mealtimes and at set points through the day.', expect:'Injections happen several times a day, typically into the tummy, thigh, or upper arm, with sites rotated to avoid soreness. Pens are simple to use, with a dial to set the dose before injecting.'},
    {name:'Blood glucose meter (finger-prick testing)', what:'A handheld device that measures blood sugar from a small drop of blood, usually from the fingertip.', expect:'A quick finger prick with a small lancet, then a test strip gives a reading in seconds. Still commonly used alongside other devices, including to double-check a sensor reading if something seems off.'},
    {name:'Insulin pump', what:'A small device, worn on the body, that delivers insulin continuously through a thin tube (a cannula) placed just under the skin.', expect:'The cannula is usually changed every 2 to 3 days. The pump delivers a steady background dose plus extra insulin at mealtimes, programmed via buttons or a connected app. Many families find it reduces the number of separate injections considerably.'},
    {name:'Continuous glucose monitor (CGM)', what:'A small sensor worn on the skin, often the arm, that measures glucose levels continuously without needing a finger prick each time.', expect:'Sensors are typically replaced every 1 to 2 weeks. Readings show on a phone app or a separate reader, often with alerts that sound for highs and lows, useful overnight especially.'},
    {name:'Hybrid closed loop system', what:'A pump and a CGM working together, with software that automatically adjusts background insulin delivery based on real-time glucose readings.', expect:'Mealtime doses are usually still entered manually, but a lot of the moment-to-moment adjustment is automated. Not every family uses one, it depends on what\'s suitable and available through their diabetes team.'},
  ];
  var equipmentGrid = document.getElementById('equipmentGrid');
  equipmentGrid.innerHTML = equipmentItems.map(function(item,i){
    return '<div class="decoder-card" data-idx="'+i+'">' +
      '<div class="decoder-see">'+item.name+'</div>' +
      '<div class="decoder-toggle-hint">Tap to see what to expect ↓</div>' +
      '<div class="decoder-detail">' +
        '<div class="label">What it is</div><div>'+item.what+'</div>' +
        '<div class="label">What to expect</div><div>'+item.expect+'</div>' +
      '</div>' +
    '</div>';
  }).join('');
  equipmentGrid.querySelectorAll('.decoder-card').forEach(function(card){
    card.addEventListener('click', function(){
      card.querySelector('.decoder-detail').classList.toggle('show');
    });
  });

  /* ============ Adult: Working with School ============ */
  var schoolItems = [
    {see:'Care plans', note:'A written plan, agreed with the diabetes team, that covers day-to-day management and what to do in an emergency. School staff should have easy access to it, not just a copy in a filing cabinet.'},
    {see:'Exam access arrangements', note:'Schools can usually arrange things like permission to check levels or treat during an exam, extra time if needed, or a separate room. Worth raising well before exam season, not the week of.'},
    {see:'School trips', note:'Plan ahead: who\'s trained to help, where supplies are kept, and what the emergency contact chain looks like away from the usual building. A short written plan for the trip specifically helps everyone feel prepared.'},
    {see:'Starting a new year or a new school', note:'Every new teacher, TA, or school means starting the explanation again. It can help to have a one-page summary ready to hand over quickly, rather than rebuilding it from scratch each time.'},
  ];
  var schoolGrid = document.getElementById('schoolGrid');
  schoolGrid.innerHTML = schoolItems.map(function(item,i){
    return '<div class="decoder-card" data-idx="'+i+'">' +
      '<div class="decoder-see">'+item.see+'</div>' +
      '<div class="decoder-toggle-hint">Tap to find out more ↓</div>' +
      '<div class="decoder-detail">' +
        '<div class="label">Worth knowing</div><div>'+item.note+'</div>' +
      '</div>' +
    '</div>';
  }).join('');
  schoolGrid.querySelectorAll('.decoder-card').forEach(function(card){
    card.addEventListener('click', function(){
      card.querySelector('.decoder-detail').classList.toggle('show');
    });
  });

  var breathingActive = false;
  var breathingInterval = null;
  var breathingPhases = ['Breathe in...', 'Hold...', 'Breathe out...', 'Hold...'];
  var breathingPhaseIdx = 0;

  function startBreathing(){
    breathingActive = true;
    document.getElementById('breathingCircle').style.animationPlayState = 'running';
    breathingPhaseIdx = 0;
    document.getElementById('breathingLabel').textContent = breathingPhases[0];
    breathingInterval = setInterval(function(){
      breathingPhaseIdx = (breathingPhaseIdx + 1) % 4;
      document.getElementById('breathingLabel').textContent = breathingPhases[breathingPhaseIdx];
    }, 4000);
    document.getElementById('breathingToggle').textContent = 'Stop';
  }
  function stopBreathing(){
    breathingActive = false;
    document.getElementById('breathingCircle').style.animationPlayState = 'paused';
    clearInterval(breathingInterval);
    document.getElementById('breathingLabel').textContent = "Tap start when you're ready";
    document.getElementById('breathingToggle').textContent = 'Start';
  }
  document.getElementById('breathingToggle').addEventListener('click', function(){
    if(breathingActive){ stopBreathing(); } else { startBreathing(); }
  });

  document.getElementById('smallWinSubmit').addEventListener('click', function(){
    var input = document.getElementById('smallWinInput');
    var resp = document.getElementById('smallWinResponse');
    var entry = document.getElementById('smallWinEntry');
    var text = input.value.trim();
    if(!text) return;
    resp.textContent = 'Nice, hold onto that one.';
    resp.classList.remove('hidden');
    entry.textContent = '😊 ' + text;
    entry.classList.remove('hidden');
    input.value = '';
  });

  /* ============ Adult: Scenario Trainer (multiple scenarios) ============ */
  var scenarios = {
    quiet_before_lunch: {
      title: "Quiet and irritable before lunch",
      icon: "🍽️",
      tag: "Classroom",
      desc: "A normally chatty child has gone quiet and snappy mid-morning.",
      nodes: {
        start: {
          text: "It's 20 minutes before lunch. A normally chatty 8-year-old with T1D has gone quiet, is staring blankly, and snaps when you ask if she's okay. What do you do first?",
          choices: [
            {label:"Ask her to try harder to focus on her work", next:'a_wrong'},
            {label:"Check her blood glucose per her care plan, calmly and without drawing attention", next:'a_right'},
            {label:"Send her to sit outside the room to calm down", next:'a_wrong2'},
          ]
        },
        a_right: {
          text: "Good call. Her reading comes back low. What next?",
          choices: [
            {label:"Follow her care plan to treat the low, then let her rest before returning to work", next:'end_good'},
            {label:"Tell her to push through until lunch, which is soon anyway", next:'end_caution'},
          ]
        },
        a_wrong: {
          feedback:'caution',
          text: "Withdrawal and snapping near mealtimes can be an early sign of a low. Treating it as a focus or behaviour issue can delay getting her the help she needs.",
          choices: [{label:"Try again", next:'start'}]
        },
        a_wrong2: {
          feedback:'caution',
          text: "Isolating her could delay recognising a low and leave her unsupervised while unwell. It's safer to check her blood glucose first.",
          choices: [{label:"Try again", next:'start'}]
        },
        end_good: {
          feedback:'good',
          text: "Exactly right. Treating the low first, calmly and without singling her out, addresses the real cause and helps her recover before returning to normal activity.",
          choices: [{label:"Restart scenario", next:'start'}]
        },
        end_caution: {
          feedback:'caution',
          text: "Pushing through a confirmed low can let it worsen. Once it's identified, it should be treated per her care plan before resuming lessons.",
          choices: [{label:"Try again", next:'a_right'}]
        }
      }
    },

    snack_refusal: {
      title: "Refusing a snack",
      icon: "🍎",
      tag: "Meal time",
      desc: "A child insists they don't want their scheduled snack and gets tearful when pushed.",
      nodes: {
        start: {
          text: "It's scheduled snack time. A 10-year-old refuses to eat, folds his arms and says \"I don't want it, leave me alone.\" What's your first move?",
          choices: [
            {label:"Insist he eats it right now because it's on his plan", next:'b_wrong'},
            {label:"Give him a calm moment, then gently ask how he's feeling and check levels if needed", next:'b_right'},
          ]
        },
        b_wrong: {
          feedback:'caution',
          text: "Forcing the issue can turn snack time into a power struggle and doesn't tell you why he's refusing, which matters, especially if he's feeling unwell.",
          choices: [{label:"Try again", next:'start'}]
        },
        b_right: {
          text: "He says he feels a bit sick and doesn't want to eat. Blood glucose comes back high. What now?",
          choices: [
            {label:"Follow his care plan for a high reading, and reassure him refusing food when unwell is understandable, you'll find a way that works", next:'end_good'},
            {label:"Tell him he has to eat the snack anyway, plan is the plan", next:'end_caution'},
          ]
        },
        end_good: {
          feedback:'good',
          text: "Right approach. Feeling sick with a high reading is a real physical state, not defiance. Following his care plan and staying flexible on delivery (timing, type of food) keeps trust intact.",
          choices: [{label:"Restart scenario", next:'start'}]
        },
        end_caution: {
          feedback:'caution',
          text: "Forcing food when he feels sick from a high reading can make things worse and damages trust for next time. His care plan should guide what happens with a high, not the snack schedule alone.",
          choices: [{label:"Try again", next:'b_right'}]
        }
      }
    },

    quiet_during_test: {
      title: "Struggling to focus during a test",
      icon: "📝",
      tag: "Classroom",
      desc: "A usually strong student seems foggy and is getting answers wrong she'd normally get right.",
      nodes: {
        start: {
          text: "Halfway through a test, a child who's usually confident looks glazed over, re-reads the same question repeatedly, and gets simple answers wrong. What's your first thought?",
          choices: [
            {label:"She must not have revised, make a note to discuss after", next:'c_wrong'},
            {label:"This could be a blood glucose issue, quietly check in and check her levels", next:'c_right'},
          ]
        },
        c_wrong: {
          feedback:'caution',
          text: "Sudden foggy thinking in a child who's normally on top of things is worth checking physically first, assuming it's about effort or revision can mean a real issue goes unnoticed.",
          choices: [{label:"Try again", next:'start'}]
        },
        c_right: {
          text: "Her reading is high. She hadn't noticed anything was wrong herself. What's the best next step?",
          choices: [
            {label:"Follow her care plan, and offer extra time to finish the test once she's settled", next:'end_good'},
            {label:"Let her finish the test as-is so she doesn't lose marks for time", next:'end_caution'},
          ]
        },
        end_good: {
          feedback:'good',
          text: "Good judgement. High readings can genuinely impair concentration, it isn't about effort. Treating first and offering reasonable adjustment afterwards is fair to her and to the test result.",
          choices: [{label:"Restart scenario", next:'start'}]
        },
        end_caution: {
          feedback:'caution',
          text: "Letting her push through means the test result won't reflect what she actually knows, and delays getting her levels back on track.",
          choices: [{label:"Try again", next:'c_right'}]
        }
      }
    },

    low_during_sport: {
      title: "Shaky during sports day",
      icon: "🏃",
      tag: "PE / activity",
      desc: "A child becomes shaky and unsteady partway through an outdoor race.",
      nodes: {
        start: {
          text: "Midway through a sports day race, a child slows down, looks pale and unsteady, and says her legs feel wobbly. What do you do first?",
          choices: [
            {label:"Cheer her on to finish the race, she's so close", next:'d_wrong'},
            {label:"Stop her, sit her down, and check blood glucose right away", next:'d_right'},
          ]
        },
        d_wrong: {
          feedback:'caution',
          text: "Pushing through when a child looks pale and unsteady during exercise isn't safe, this combination of signs needs checking immediately, not encouragement to keep going.",
          choices: [{label:"Try again", next:'start'}]
        },
        d_right: {
          text: "Good instinct, exercise can cause levels to drop quickly. Her reading confirms a low. What next?",
          choices: [
            {label:"Treat the low per her care plan and let her rest before any further activity", next:'end_good'},
            {label:"Let her rest for a minute then rejoin the next race", next:'end_caution'},
          ]
        },
        end_good: {
          feedback:'good',
          text: "Correct. Treating the low fully and confirming recovery before any further exercise avoids a second drop, activity itself can keep pulling levels down after treatment.",
          choices: [{label:"Restart scenario", next:'start'}]
        },
        end_caution: {
          feedback:'caution',
          text: "A short rest isn't the same as confirming she's recovered. Returning to activity too soon after a low, especially outdoors, risks a repeat drop.",
          choices: [{label:"Try again", next:'d_right'}]
        }
      }
    },

    pump_alarm: {
      title: "Pump alarm during a test",
      icon: "📳",
      tag: "Classroom",
      desc: "A pump keeps beeping mid-test and the child looks anxious to respond.",
      nodes: {
        start: {
          text: "During a silent test, a child's insulin pump keeps alarming. She looks embarrassed and doesn't move to check it. What do you do first?",
          choices: [
            {label:"Tell her to silence it and keep focusing on the test", next:'e_wrong'},
            {label:"Quietly let her know it's fine to respond to the alarm, following her care plan", next:'e_right'},
          ]
        },
        e_wrong: {
          feedback:'caution',
          text: "Pump alarms usually mean something needs attention. Telling her to ignore it risks letting a high or low go untreated during the test.",
          choices: [{label:"Try again", next:'start'}]
        },
        e_right: {
          text: "Good instinct. She checks her pump, it's a high reading needing a correction dose. What's the best next step?",
          choices: [
            {label:"Insist she waits until the test finishes", next:'end_caution'},
            {label:"Let her sort it discreetly per her care plan, and offer extra time on the test if needed", next:'end_good'},
          ]
        },
        end_caution: {
          feedback:'caution',
          text: "Delaying treatment for a confirmed high can let it climb further, and makes it harder for her to concentrate on the rest of the test.",
          choices: [{label:"Try again", next:'e_right'}]
        },
        end_good: {
          feedback:'good',
          text: "Exactly right. Letting her manage the alarm quietly, and offering reasonable extra time, respects her independence while keeping things fair and safe.",
          choices: [{label:"Restart scenario", next:'start'}]
        }
      }
    },

    class_party: {
      title: "An unplanned class party",
      icon: "🧁",
      tag: "Classroom",
      desc: "Cupcakes arrive unannounced and a child isn't sure what to do.",
      nodes: {
        start: {
          text: "A parent has brought in cupcakes for an impromptu class celebration, it wasn't planned, so it caught everyone off guard. A 9-year-old with T1D hangs back, unsure what to do. What's your first move?",
          choices: [
            {label:"Quietly tell her she can't have one this time", next:'f_wrong'},
            {label:"Let her decide, and offer to help work out the carbs together if she wants one", next:'f_right'},
          ]
        },
        f_wrong: {
          feedback:'caution',
          text: "Automatically excluding her can feel isolating, and it isn't usually necessary, most treats can be managed with the right insulin dose.",
          choices: [{label:"Try again", next:'start'}]
        },
        f_right: {
          text: "She decides she'd like a cupcake. What's the best way to handle it?",
          choices: [
            {label:"Let her eat it now and sort out insulin whenever there's time", next:'end_caution'},
            {label:"Help her check the carbs and take insulin before or shortly after eating, per her care plan", next:'end_good'},
          ]
        },
        end_caution: {
          feedback:'caution',
          text: "Delaying insulin for food she's already eaten can lead to a bigger spike than necessary, timing matters, even for small treats.",
          choices: [{label:"Try again", next:'f_right'}]
        },
        end_good: {
          feedback:'good',
          text: "Well handled. She gets to join in like everyone else, and covering the carbs properly means she can enjoy the treat without a big spike afterwards.",
          choices: [{label:"Restart scenario", next:'start'}]
        }
      }
    },

    school_trip: {
      title: "Unusually tired on a school trip",
      icon: "🚌",
      tag: "Off-site",
      desc: "A child seems more worn out than usual after a lot of walking on a trip.",
      nodes: {
        start: {
          text: "On a school trip involving a lot of walking, a 10-year-old with T1D starts lagging behind, looking pale and worn out, more than the other kids. What do you do first?",
          choices: [
            {label:"Assume it's just a long day and keep the group moving to stay on schedule", next:'g_wrong'},
            {label:"Pause the group and check his blood glucose", next:'g_right'},
          ]
        },
        g_wrong: {
          feedback:'caution',
          text: "Extra walking and activity can cause levels to drop without obvious warning signs at first. Pale and unusually tired is worth checking on the spot, not once the schedule allows.",
          choices: [{label:"Try again", next:'start'}]
        },
        g_right: {
          text: "Good call, his reading is low. What's the best next step, given you're away from school?",
          choices: [
            {label:"Treat the low per his care plan and wait until he's recovered before continuing", next:'end_good'},
            {label:"Give him something quick and keep the group moving to avoid falling behind", next:'end_caution'},
          ]
        },
        end_caution: {
          feedback:'caution',
          text: "Continuing to walk before he's actually recovered risks another drop, especially away from easy support. It's worth the short delay to confirm he's steady.",
          choices: [{label:"Try again", next:'g_right'}]
        },
        end_good: {
          feedback:'good',
          text: "Exactly right. Treating fully and confirming recovery before continuing matters even more off-site, where help isn't as close by.",
          choices: [{label:"Restart scenario", next:'start'}]
        }
      }
    },

    downplaying_symptoms: {
      title: "\"I'm fine, let me keep playing\"",
      icon: "🙅",
      tag: "PE / activity",
      desc: "A child insists they're okay despite looking off, because they don't want to leave the game.",
      nodes: {
        start: {
          text: "Midway through a five-a-side game, a child looks a bit pale and is slower than usual, but insists \"I'm fine, let me keep playing\" when you ask. What do you do?",
          choices: [
            {label:"Take their word for it, they know their own body best", next:'h_wrong'},
            {label:"Gently insist on a quick check anyway, even though they say they're fine", next:'h_right'},
          ]
        },
        h_wrong: {
          feedback:'caution',
          text: "Kids often downplay symptoms because they don't want to stop playing or feel singled out. \"I'm fine\" isn't reliable enough on its own when the signs say otherwise.",
          choices: [{label:"Try again", next:'start'}]
        },
        h_right: {
          text: "Good instinct, his reading is low. He's annoyed about stopping the game. What's the best way to handle that?",
          choices: [
            {label:"Acknowledge it's frustrating, treat the low, and let him rejoin once he's recovered", next:'end_good'},
            {label:"Let him play on for a few more minutes since he seems okay, then check again", next:'end_caution'},
          ]
        },
        end_caution: {
          feedback:'caution',
          text: "Once a low is confirmed, playing on, even briefly, risks it dropping further. It's worth pausing fully before any more activity.",
          choices: [{label:"Try again", next:'h_right'}]
        },
        end_good: {
          feedback:'good',
          text: "Exactly right. Naming that it's frustrating validates how he feels, while still treating the low properly before he returns to play.",
          choices: [{label:"Restart scenario", next:'start'}]
        }
      }
    },

    anger_outburst: {
      title: "A sudden outburst",
      icon: "😠",
      tag: "Classroom",
      desc: "A child who's normally easygoing suddenly shouts and refuses instructions.",
      nodes: {
        start: {
          text: "A normally easygoing 9-year-old suddenly shouts at a classmate and refuses to follow a simple instruction, completely out of character. What's your first move?",
          choices: [
            {label:"Treat it as a behaviour issue and follow the usual discipline steps", next:'i_wrong'},
            {label:"Consider whether this could be a low or high before responding to it as behaviour", next:'i_right'},
          ]
        },
        i_wrong: {
          feedback:'caution',
          text: "Sudden, out-of-character anger can be a physical symptom rather than defiance. Treating it purely as a discipline issue can miss what's actually going on and feels unfair to the child once things settle.",
          choices: [{label:"Try again", next:'start'}]
        },
        i_right: {
          text: "Good thinking, his reading comes back low. Once he's treated and calmer, what's the best next step?",
          choices: [
            {label:"Move straight on and mention the outburst in his behaviour log as normal", next:'end_caution'},
            {label:"Have a brief, calm chat once he's recovered, and don't treat it as a discipline matter", next:'end_good'},
          ]
        },
        end_caution: {
          feedback:'caution',
          text: "Logging it as a standard behaviour incident, without noting the low, could lead to it being misread as a pattern of defiance rather than a physical cause.",
          choices: [{label:"Try again", next:'i_right'}]
        },
        end_good: {
          feedback:'good',
          text: "Exactly right. Once the cause is understood, treating it as a one-off physical event rather than a discipline issue keeps things fair to him.",
          choices: [{label:"Restart scenario", next:'start'}]
        }
      }
    },

    unbriefed_supply: {
      title: "A supply teacher who wasn't told",
      icon: "📋",
      tag: "Classroom",
      desc: "The regular teacher is off, and the cover staff has no idea the child has T1D.",
      nodes: {
        start: {
          text: "You're covering a class you don't know. Nobody mentioned that one of the children has T1D. Partway through the morning, she seems unusually quiet and slow to respond. What do you do first?",
          choices: [
            {label:"Assume it's nothing serious since no one flagged anything before class", next:'j_wrong'},
            {label:"Quickly check the class file or ask another staff member if there's anything you should know", next:'j_right'},
          ]
        },
        j_wrong: {
          feedback:'caution',
          text: "Not being told isn't the same as there being nothing to know. A quick check of the file or a colleague can surface important information fast.",
          choices: [{label:"Try again", next:'start'}]
        },
        j_right: {
          text: "Good move, you find out she has T1D and there's a care plan on file. What's the best next step?",
          choices: [
            {label:"Read the key points now and check on her straight away", next:'end_good'},
            {label:"Carry on with the lesson and read it properly at lunchtime", next:'end_caution'},
          ]
        },
        end_caution: {
          feedback:'caution',
          text: "If she's already showing signs, waiting until lunchtime to read the care plan could mean a low or high goes unaddressed for too long.",
          choices: [{label:"Try again", next:'j_right'}]
        },
        end_good: {
          feedback:'good',
          text: "Exactly right. A minute spent reading the key points now, and checking on her, is far better than assuming it can wait.",
          choices: [{label:"Restart scenario", next:'start'}]
        }
      }
    },

    early_years_accident: {
      title: "A toileting accident in early years",
      icon: "🧸",
      tag: "Early years",
      desc: "A young child has a toileting accident that could be ordinary or could be a sign of a high.",
      nodes: {
        start: {
          text: "A 5-year-old with T1D has a toileting accident, the second one this week. At this age it's easy to assume it's just a developmental thing. What do you do?",
          choices: [
            {label:"Treat it as a normal developmental accident, nothing to flag", next:'k_wrong'},
            {label:"Mention it to her parents and consider whether it could be linked to her glucose levels", next:'k_right'},
          ]
        },
        k_wrong: {
          feedback:'caution',
          text: "At this age it's easy to assume accidents are just developmental, but needing the toilet often is also a classic sign of a high. It's worth flagging rather than dismissing.",
          choices: [{label:"Try again", next:'start'}]
        },
        k_right: {
          text: "Good thinking. Her parents mention her levels have been running high this week. What's the best way to handle it going forward?",
          choices: [
            {label:"Keep an eye out and mention any further accidents to her parents promptly", next:'end_good'},
            {label:"Assume it was a one-off now that it's been mentioned once", next:'end_caution'},
          ]
        },
        end_caution: {
          feedback:'caution',
          text: "A pattern is more useful than a single data point. Continuing to notice and mention it helps her parents and care team spot trends.",
          choices: [{label:"Try again", next:'k_right'}]
        },
        end_good: {
          feedback:'good',
          text: "Exactly right. Staying alert to a pattern, not just one incident, helps catch something that might otherwise be missed at this age.",
          choices: [{label:"Restart scenario", next:'start'}]
        }
      }
    },

    handover_gap: {
      title: "A missed handover",
      icon: "📞",
      tag: "Communication",
      desc: "A low happens during the school day, but the parent only finds out that evening.",
      nodes: {
        start: {
          text: "A child had a low at school this afternoon. It was treated fine at the time, but nobody mentioned it to his parents at pickup. His mum only finds out that evening when he mentions it himself. What should happen differently?",
          choices: [
            {label:"Nothing, it was handled fine at the time so there's nothing to pass on", next:'l_wrong'},
            {label:"Have a quick, simple way of letting parents know when something like this happens", next:'l_right'},
          ]
        },
        l_wrong: {
          feedback:'caution',
          text: "Even when a low is handled well in the moment, parents still need to know it happened, it helps them spot patterns and adjust plans at home.",
          choices: [{label:"Try again", next:'start'}]
        },
        l_right: {
          text: "Good thinking. What's a practical way to make sure this information reaches parents reliably?",
          choices: [
            {label:"Agree a simple end-of-day note or message as standard practice, even a one-line one", next:'end_good'},
            {label:"Rely on the child to remember to mention it themselves", next:'end_caution'},
          ]
        },
        end_caution: {
          feedback:'caution',
          text: "Relying on a child, especially a younger one, to reliably report a medical event isn't a dependable system on its own.",
          choices: [{label:"Try again", next:'l_right'}]
        },
        end_good: {
          feedback:'good',
          text: "Exactly right. A quick, consistent handover, even a single line, means nothing falls through the cracks between school and home.",
          choices: [{label:"Restart scenario", next:'start'}]
        }
      }
    },

    silly_unfocused: {
      title: "Acting silly and struggling to focus",
      icon: "🤪",
      tag: "Classroom",
      desc: "A usually focused child gets giggly, silly, and can't concentrate, easy to mistake for messing around.",
      nodes: {
        start: {
          text: "During a lesson, a child who's usually focused starts giggling, acting silly, and can't seem to follow simple instructions. It's out of character for her. What do you do first?",
          choices: [
            {label:"Tell her to stop messing around and focus on her work", next:'m_wrong'},
            {label:"Check her blood glucose per her care plan, calmly and without singling her out", next:'m_right'},
          ]
        },
        m_wrong: {
          feedback:'caution',
          text: "Unusual silliness or sudden trouble concentrating can be a sign of a low, not just messing about. Treating it as a behaviour issue first can delay getting her the help she needs.",
          choices: [{label:"Try again", next:'start'}]
        },
        m_right: {
          text: "Good call. Her reading comes back low. What next?",
          choices: [
            {label:"Follow her care plan to treat the low, then let her rest before continuing the lesson", next:'end_good'},
            {label:"Tell her to wait until the lesson break, which is only a few minutes away", next:'end_caution'},
          ]
        },
        end_caution: {
          feedback:'caution',
          text: "Waiting delays treatment. Once a low is identified, it should be treated straight away rather than put off until a more convenient moment.",
          choices: [{label:"Try again", next:'m_right'}]
        },
        end_good: {
          feedback:'good',
          text: "Exactly right. A low can look a lot like silliness or distraction, especially when it's out of character. Treating it promptly and calmly, without embarrassing her, helps her recover quickly and get back to the lesson.",
          choices: [{label:"Restart scenario", next:'start'}]
        }
      }
    }
  };

  var currentScenarioKey = null;

  function renderScenarioList(){
    var list = document.getElementById('scenarioList');
    list.innerHTML = Object.keys(scenarios).map(function(key){
      var s = scenarios[key];
      return '<button class="tile" data-scenario="'+key+'">' +
        '<div class="tile-icon" style="background:#DCE9E6">'+s.icon+'</div>' +
        '<div class="tile-title">'+s.title+'</div>' +
        '<p class="tile-desc">'+s.desc+'</p>' +
      '</button>';
    }).join('');
    list.querySelectorAll('[data-scenario]').forEach(function(btn){
      btn.addEventListener('click', function(){
        selectScenario(btn.getAttribute('data-scenario'));
      });
    });
  }

  function selectScenario(key){
    currentScenarioKey = key;
    document.getElementById('scenarioListWrap').classList.add('hidden');
    document.getElementById('scenarioPlayWrap').classList.remove('hidden');
    renderScenario('start');
  }

  document.getElementById('scenarioMainBack').addEventListener('click', function(){
    var playWrap = document.getElementById('scenarioPlayWrap');
    if(!playWrap.classList.contains('hidden')){
      // Mid-scenario: step back to the scenario picker rather than leaving the section
      playWrap.classList.add('hidden');
      document.getElementById('scenarioListWrap').classList.remove('hidden');
      currentScenarioKey = null;
    } else {
      // Already on the picker: leave the section
      goto('view-adult-home');
    }
  });

  function renderScenario(nodeKey){
    var scenario = scenarios[currentScenarioKey].nodes;
    var node = scenario[nodeKey];
    var panel = document.getElementById('scenarioPanel');
    var html = '<div class="'+(node.feedback ? 'scenario-feedback '+node.feedback : 'scenario-step')+'">' + node.text + '</div>';
    html += '<div class="scenario-choices" style="margin-top:16px;">';
    node.choices.forEach(function(c){
      html += '<button class="scenario-choice" data-next="'+c.next+'">'+c.label+'</button>';
    });
    html += '</div>';
    panel.innerHTML = html;
    panel.querySelectorAll('.scenario-choice').forEach(function(btn){
      btn.addEventListener('click', function(){ renderScenario(btn.getAttribute('data-next')); });
    });
  }
  renderScenarioList();

  /* ============ Confetti (lightweight) ============ */
  function launchConfetti(){
    var wrap = document.createElement('div');
    wrap.className = 'confetti-burst';
    var colors = ['#FFC94D','#FF6F61','#3FCDA8','#8B7CF6','#3B9EFF'];
    for(var i=0;i<24;i++){
      var piece = document.createElement('div');
      var size = 6 + Math.random()*6;
      piece.style.position = 'absolute';
      piece.style.left = (45 + Math.random()*10) + '%';
      piece.style.top = '20%';
      piece.style.width = size+'px';
      piece.style.height = size+'px';
      piece.style.background = colors[i % colors.length];
      piece.style.borderRadius = Math.random() > .5 ? '50%' : '3px';
      piece.style.opacity = '1';
      piece.style.transform = 'translateY(0)';
      piece.style.transition = 'transform 1.1s ease-out, opacity 1.1s ease-out';
      wrap.appendChild(piece);
    }
    document.body.appendChild(wrap);
    requestAnimationFrame(function(){
      requestAnimationFrame(function(){
        Array.prototype.forEach.call(wrap.children, function(p){
          var dx = (Math.random()-0.5) * 300;
          var dy = 200 + Math.random()*250;
          p.style.transform = 'translate('+dx+'px,'+dy+'px) rotate('+(Math.random()*360)+'deg)';
          p.style.opacity = '0';
        });
      });
    });
    setTimeout(function(){ wrap.remove(); }, 1300);
  }

  /* ============ Bud: random side-peek-and-wave (Kids Zone only) ============ */
  document.getElementById('bud-peek-inner').innerHTML = chloeSVG({size:90, animated:false});

  function showBudPeek(){
    if(currentViewId.indexOf('view-kids') !== 0){ return; }
    var wrap = document.getElementById('bud-peek');
    var fromLeft = Math.random() < 0.5;
    var topPct = 15 + Math.random()*55;
    wrap.style.top = topPct + '%';
    wrap.classList.remove('from-left', 'from-right', 'show');
    void wrap.offsetWidth; // force reflow so the next class change re-triggers the transition
    wrap.classList.add(fromLeft ? 'from-left' : 'from-right');
    requestAnimationFrame(function(){
      wrap.classList.add('show');
      sfxPeek();
    });
    setTimeout(function(){
      wrap.classList.remove('show');
    }, 2600);
  }

  function scheduleBudPeek(){
    var delay = 18000 + Math.random()*22000; // every 18-40 seconds
    setTimeout(function(){
      if(currentViewId.indexOf('view-kids') === 0){ showBudPeek(); }
      scheduleBudPeek();
    }, delay);
  }
  scheduleBudPeek();

  /* ============ Siblings & Friends Zone ============ */
  var friendsBadges = { understand:false, questions:false, feelings:false, tips:false, scenario:false, knowledge:false };
  var FRIENDS_BADGE_TOTAL = 6;
  var friendsBadgeMeta = [
    {key:'understand', name:'Story Listener', icon:'💡'},
    {key:'questions',  name:'Question Asker', icon:'❓'},
    {key:'feelings',   name:'Feelings Friend', icon:'💛'},
    {key:'tips',       name:'Great Friend',   icon:'🤝'},
    {key:'scenario',   name:'Quick Thinker',  icon:'🎮'},
    {key:'knowledge',  name:'T1D Know-It-All', icon:'🧠'},
    {key:'wall',       name:'Super Friend',   icon:'🌟'},
  ];

  function renderFriendsBadgeWall(){
    var wall = document.getElementById('friendsBadgeWall');
    if(!wall) return;
    var earnedCount = Object.keys(friendsBadges).filter(function(k){ return friendsBadges[k]; }).length;
    var html = '';
    friendsBadgeMeta.forEach(function(b){
      var earned = b.key === 'wall' ? earnedCount >= FRIENDS_BADGE_TOTAL : friendsBadges[b.key];
      html += '<div class="badge-item '+(earned?'earned':'locked')+'">' +
                '<div class="badge-circle">'+b.icon+'</div>' +
                '<div class="badge-name">'+b.name+'</div>' +
              '</div>';
    });
    wall.innerHTML = html;
    var cert = document.getElementById('friendsCertificate');
    if(cert){
      cert.classList.toggle('hidden', earnedCount < FRIENDS_BADGE_TOTAL);
    }
  }

  function earnFriendsBadge(key){
    if(friendsBadges[key]) return;
    friendsBadges[key] = true;
    var earned = Object.keys(friendsBadges).filter(function(k){ return friendsBadges[k]; }).length;
    document.getElementById('friendsBadgeCount').textContent = earned + ' / ' + FRIENDS_BADGE_TOTAL + ' done';
    document.getElementById('friendsProgressFill').style.width = (earned / FRIENDS_BADGE_TOTAL * 100) + '%';
    renderFriendsBadgeWall();
    launchConfetti();
    sfxBadge();
    playClip('sfxWow');
  }
  renderFriendsBadgeWall();

  /* ---- What's Going On? (story slideshow) ---- */
  var friendsStorySlides = [
    "Hi, I'm Jon! Your friend, brother or sister has something called Type 1 Diabetes, T1D for short.",
    "It means their body needs a bit of help to turn food into energy. They can't catch it from anyone, and you can't catch it from them.",
    "Sometimes they need to check things or use a little device. It might beep sometimes, that's totally normal!",
    "It's not their fault, and it won't stop them being your friend, or doing fun things with you.",
    "Sometimes they might need a moment to sort something out. That's okay, they still want to play with you!",
    "If they ever seem wobbly, tired, or a bit off, they might need to check their levels or have a snack. That's just part of their day, a bit like brushing your teeth!",
    "They can still do sleepovers, parties, sports, and all the things you do. They just carry a few extra bits with them.",
    "The best thing you can do? Just be you, be patient, and include them like always."
  ];
  var friendsStoryIndex = 0;
  function renderFriendsStory(){
    document.getElementById('friendsStoryText').textContent = friendsStorySlides[friendsStoryIndex];
    var dots = friendsStorySlides.map(function(_,i){ return '<span class="dot '+(i===friendsStoryIndex?'active':'')+'"></span>'; }).join('');
    document.getElementById('friendsStoryDots').innerHTML = dots;
    document.getElementById('friendsStoryBack').style.visibility = friendsStoryIndex === 0 ? 'hidden' : 'visible';
    document.getElementById('friendsStoryNext').textContent = friendsStoryIndex === friendsStorySlides.length - 1 ? "Finish" : "Next";
  }
  document.getElementById('friendsStoryNext').addEventListener('click', function(){
    sfxClick();
    if(friendsStoryIndex < friendsStorySlides.length - 1){
      friendsStoryIndex++;
      renderFriendsStory();
    } else {
      earnFriendsBadge('understand');
      friendsStoryIndex = 0;
      goto('view-friends-home');
    }
  });
  document.getElementById('friendsStoryBack').addEventListener('click', function(){
    sfxClick();
    if(friendsStoryIndex > 0){ friendsStoryIndex--; renderFriendsStory(); }
  });
  renderFriendsStory();

  /* ---- What Should I Know? ---- */
  var friendsKnowledgeItems = [
    {q:"What actually is Type 1 Diabetes?", a:"It means the body's insulin-makers have stopped working. Insulin is needed to turn food into energy, so without it, the body needs a bit of help doing that job instead."},
    {q:"Is it contagious, or anyone's fault?", a:"No to both. You can't catch it, and nobody caused it, not them, not their parents, not anyone. It's just something that happened."},
    {q:"What are the 4Ts?", a:"Thirsty, Toilet, Tired, Thinner, the main signs that someone's levels might need attention. If you ever notice these in someone, it's worth mentioning to a grown-up."},
    {q:"What equipment might they use?", a:"Things like an insulin pen or pump, and a sensor or finger-prick tester to check their levels. Some of it beeps sometimes, that's just it doing its job."},
    {q:"Does it ever go away?", a:"No, T1D is lifelong, but it becomes much more manageable over time. Most people get really good at handling it, and it stops feeling like a big deal day to day."},
    {q:"Who helps look after them?", a:"A whole team, family, friends like you, and a hospital team of nurses, doctors and dietitians. Nobody manages T1D on their own."},
  ];
  var friendsKnowledgeGrid = document.getElementById('friendsKnowledgeGrid');
  friendsKnowledgeGrid.innerHTML = friendsKnowledgeItems.map(function(item){
    return '<button class="tile" style="text-align:left;">' +
      '<div class="tile-title" style="font-size:1rem;">'+item.q+'</div>' +
      '<p class="tile-desc worry-detail hidden">'+item.a+'</p>' +
      '<p class="tile-desc worry-hint" style="font-weight:700; color:var(--friends-blue);">Tap to find out ↓</p>' +
    '</button>';
  }).join('');
  friendsKnowledgeGrid.querySelectorAll('.tile').forEach(function(card){
    card.addEventListener('click', function(){
      sfxClick();
      card.querySelector('.worry-detail').classList.toggle('hidden');
      card.querySelector('.worry-hint').classList.toggle('hidden');
    });
  });
  document.getElementById('friendsKnowledgeDoneBtn').addEventListener('click', function(){
    earnFriendsBadge('knowledge');
    goto('view-friends-home');
  });

  /* ---- Questions You Might Have ---- */
  var friendsQuestionsItems = [
    {q:"Can I catch it from them?", a:"No, never. T1D isn't like a cold, you can't catch it from anyone."},
    {q:"Why do they check things so much?", a:"Their body needs a bit of extra help, so checking helps them stay well. It only takes a moment."},
    {q:"What's that beep?", a:"That's their device, not them! It's just doing its job, a bit like an alarm clock."},
    {q:"Is it going to happen to me too?", a:"It's very unlikely. It's just something their body does differently, it's not because of anything you or they did."},
    {q:"Why does mum occasionally check me too?", a:"That's not because anything's wrong with you. Parents sometimes keep half an eye on brothers and sisters too, just to be extra sure everyone's doing okay. It's a caring thing, not a worrying one."},
    {q:"What if I say the wrong thing?", a:"Don't be worried about saying the wrong thing, you're learning too and it's always okay to ask questions. Just remember to be sensitive about how you phrase things, and think how you would feel if someone asked you, before you say it."},
    {q:"Why do they get extra attention sometimes?", a:"Managing T1D takes a bit of extra care, especially if something isn't feeling right. It doesn't mean they're loved more, it just means they need a bit more help sometimes."},
    {q:"Will they always have to do this?", a:"Yes, T1D doesn't go away, but they get really good at managing it, and it becomes second nature much faster than you'd think."},
    {q:"Can they still come to sleepovers and parties?", a:"Yes! They just bring their kit along and might check things sometimes, but they can join in with everything."},
    {q:"Does it hurt when they check their blood sugar or take insulin?", a:"It might sting for a second, but it's quick, and they're well used to it. It's not a big deal to them."},
    {q:"What should I do if I'm worried about them?", a:"Tell a grown-up. That's always the right thing to do, even if it turns out to be nothing."},
    {q:"Can we still play together?", a:"Yes, absolutely! T1D doesn't stop you playing, having fun, or doing all the things you did before. They might just need a moment sometimes to check something or grab a snack, then it's game on again."},
    {q:"Can I do anything to help?", a:"Yes, loads! Here are a few ideas:<br>• Keep them company during checks, sit with them while they do a finger prick or sensor scan so they don't feel alone.<br>• Tell a grown-up if you notice them looking wobbly or tired, you could say \"Can we check on them?\"<br>• Choose a calm game like drawing, Lego, or puzzles if they need a quieter moment.<br>• Celebrate the wins, a quick \"You did great!\" after a sensor change or pump beep means more than you'd think.<br>• Learn the names of their gadgets, knowing \"pump\", \"sensor\", or \"kit\" helps them feel included and confident.<br>• Be patient with breaks, if they need a snack or a pause during play, wait kindly.<br>• Join in the routines, help set out their kit before a change, or help choose the sticker for a new sensor.<br>• Be the calm voice, if someone asks \"What's that beep?\", you can gently say \"It's just their gadget talking.\""},
  ];
  var friendsQuestionsGrid = document.getElementById('friendsQuestionsGrid');
  friendsQuestionsGrid.innerHTML = friendsQuestionsItems.map(function(item){
    return '<button class="tile" style="text-align:left;">' +
      '<div class="tile-title" style="font-size:1rem;">"'+item.q+'"</div>' +
      '<p class="tile-desc worry-detail hidden">'+item.a+'</p>' +
      '<p class="tile-desc worry-hint" style="font-weight:700; color:var(--friends-blue);">Tap to see the answer ↓</p>' +
    '</button>';
  }).join('');
  friendsQuestionsGrid.querySelectorAll('.tile').forEach(function(card){
    card.addEventListener('click', function(){
      sfxClick();
      card.querySelector('.worry-detail').classList.toggle('hidden');
      card.querySelector('.worry-hint').classList.toggle('hidden');
    });
  });
  document.getElementById('friendsQuestionsDoneBtn').addEventListener('click', function(){
    earnFriendsBadge('questions');
    goto('view-friends-home');
  });

  /* ---- Your Feelings Matter Too ---- */
  var friendsFeelingsItems = [
    {worry:"Sometimes I feel a bit jealous of all the attention they get.", help:"That's a really normal feeling, lots of brothers, sisters and friends feel this way sometimes. It doesn't make you a bad person, and it's okay to tell a grown-up how you feel."},
    {worry:"I get scared when something goes wrong.", help:"That's understandable, seeing someone you care about not feel well can be scary. Grown-ups and their care team know what to do, and it usually gets better quickly."},
    {worry:"Sometimes I don't know what to do to help.", help:"You don't have to fix anything. Just being there, and getting a grown-up if something seems wrong, is more than enough."},
    {worry:"I feel like I have to be extra good so I don't cause more stress.", help:"You don't have to be perfect. It's okay to just be yourself, and it's okay to need attention too."},
    {worry:"I worry about them when they're not with me.", help:"That shows how much you care. It's okay to worry a little, just remember they have people looking after them."},
    {worry:"I feel like I have to grow up faster than my friends.", help:"That's a lot to carry. It's okay to still just be a kid, you don't have to take on grown-up worries."},
    {worry:"I get annoyed when plans change because of it.", help:"That's a fair feeling. Plans changing is frustrating for anyone, it doesn't mean you don't care about them."},
    {worry:"I don't always know who to talk to about how I feel.", help:"A parent, teacher, or any grown-up you trust is a good place to start. Even writing it down can help."},
  ];
  var friendsFeelingsGrid = document.getElementById('friendsFeelingsGrid');
  friendsFeelingsGrid.innerHTML = friendsFeelingsItems.map(function(item){
    return '<button class="tile" style="text-align:left;">' +
      '<div class="tile-title" style="font-size:1rem;">"'+item.worry+'"</div>' +
      '<p class="tile-desc worry-detail hidden">'+item.help+'</p>' +
      '<p class="tile-desc worry-hint" style="font-weight:700; color:var(--friends-blue);">Tap to see what might help ↓</p>' +
    '</button>';
  }).join('');
  friendsFeelingsGrid.querySelectorAll('.tile').forEach(function(card){
    card.addEventListener('click', function(){
      sfxClick();
      card.querySelector('.worry-detail').classList.toggle('hidden');
      card.querySelector('.worry-hint').classList.toggle('hidden');
    });
  });
  document.getElementById('friendsFeelingsDoneBtn').addEventListener('click', function(){
    earnFriendsBadge('feelings');
    goto('view-friends-home');
  });

  /* ---- Being a Great Friend ---- */
  var friendsTipsItems = [
    {tip:"Be patient", why:"Sometimes they need a minute to check something or sort their levels out. A little patience goes a long way."},
    {tip:"Wait before starting the game", why:"If you're about to start a water fight or a game, give them a moment to join in first, it's no fun watching from the side!"},
    {tip:"Try not to keep asking what's beeping", why:"It's just their device doing its job. If you're curious, it's fine to ask once, but they don't need reminding every time."},
    {tip:"Remember it's T1D, not them", why:"If they seem a bit snappy or tired, it might be their levels, not really about you. It usually passes quickly."},
    {tip:"Include them", why:"They want to do the same things as everyone else. Just include them like normal, and ask if they need anything."},
    {tip:"Get a grown-up if something seems wrong", why:"If your friend or sibling seems really unwell, confused, or not themselves, that's a job for a grown-up, straight away."},
    {tip:"Learn a little bit about it", why:"You don't need to become an expert, but knowing the basics shows you care and helps you understand what's going on."},
    {tip:"Celebrate the wins with them", why:"Managing a tricky moment well is worth celebrating! A quick \"well done\" means more than you'd think."},
    {tip:"Don't treat them differently in front of others", why:"Being treated just like everyone else, especially in front of friends, is usually exactly what they want."},
  ];
  var friendsTipsGrid = document.getElementById('friendsTipsGrid');
  friendsTipsGrid.innerHTML = friendsTipsItems.map(function(item){
    return '<button class="tile" style="text-align:left;">' +
      '<div class="tile-title" style="font-size:1rem;">'+item.tip+'</div>' +
      '<p class="tile-desc worry-detail hidden">'+item.why+'</p>' +
      '<p class="tile-desc worry-hint" style="font-weight:700; color:var(--friends-blue);">Tap to see why ↓</p>' +
    '</button>';
  }).join('');
  friendsTipsGrid.querySelectorAll('.tile').forEach(function(card){
    card.addEventListener('click', function(){
      sfxClick();
      card.querySelector('.worry-detail').classList.toggle('hidden');
      card.querySelector('.worry-hint').classList.toggle('hidden');
    });
  });
  document.getElementById('friendsTipsDoneBtn').addEventListener('click', function(){
    earnFriendsBadge('tips');
    goto('view-friends-home');
  });

  /* ---- What Would You Do? (scenario quiz) ---- */
  var friendsScenarioItems = [
    {q:"You're about to start a water balloon fight and your friend is just finishing checking their blood sugar. What do you do?", options:[
      {label:"Start without them, they can catch up", correct:false},
      {label:"Wait a few seconds for them to join in", correct:true},
      {label:"Ask them to hurry up", correct:false},
    ], why:"It only takes a moment, and waiting means they get to join in properly from the start, not catch up halfway through."},
    {q:"Your sibling's pump keeps beeping during a movie. What do you do?", options:[
      {label:"Ask them what's wrong every time it beeps", correct:false},
      {label:"Let them sort it, it's just their device doing its job", correct:true},
      {label:"Tell them to turn it off", correct:false},
    ], why:"The beeping is completely normal. Letting them handle it without a fuss is the most helpful thing you can do."},
    {q:"Your friend seems a bit grumpy today, more than usual.", options:[
      {label:"Think they don't want to be your friend anymore", correct:false},
      {label:"Remember it might be their levels, not about you, and check in kindly", correct:true},
      {label:"Get annoyed back", correct:false},
    ], why:"Their mood might be about their levels, not you. A kind check-in helps more than taking it personally."},
    {q:"Your friend needs to eat something right in the middle of playing outside.", options:[
      {label:"Wait a moment while they do, then carry on playing", correct:true},
      {label:"Keep playing without them", correct:false},
      {label:"Tell them to eat later", correct:false},
    ], why:"Eating on time matters for how they feel. A short pause together means the game carries on properly for everyone."},
    {q:"You're at a sleepover and your friend needs to check their levels before bed. What do you do?", options:[
      {label:"Get ready for bed as normal while they sort it out", correct:true},
      {label:"Watch closely and ask lots of questions", correct:false},
      {label:"Tell them to hurry up so you can chat", correct:false},
    ], why:"Letting them get on with it, just like any other bedtime routine, is the most comfortable thing for everyone."},
    {q:"There's cake at a party and your friend pauses before having a slice.", options:[
      {label:"Wait a moment, they're probably just working out their insulin", correct:true},
      {label:"Tell them not to bother, it's just cake", correct:false},
      {label:"Feel awkward and stop eating your own slice too", correct:false},
    ], why:"A short pause to think it through is completely normal, there's no need to make it a big deal."},
  ];
  var friendsScenarioIndex = 0;
  function renderFriendsScenario(){
    var item = friendsScenarioItems[friendsScenarioIndex];
    document.getElementById('friendsScenarioQuestion').textContent = item.q;
    var dots = friendsScenarioItems.map(function(_,i){ return '<span class="'+(i < friendsScenarioIndex ? 'done' : '')+'"></span>'; }).join('');
    document.getElementById('friendsScenarioProgress').innerHTML = dots;
    document.getElementById('friendsScenarioFeedback').classList.add('hidden');
    document.getElementById('friendsScenarioNext').classList.add('hidden');
    var choices = document.getElementById('friendsScenarioChoices');
    choices.innerHTML = '';
    item.options.forEach(function(opt){
      var btn = document.createElement('button');
      btn.className = 'btn secondary';
      btn.style.textAlign = 'left';
      btn.textContent = opt.label;
      btn.addEventListener('click', function(){
        var fb = document.getElementById('friendsScenarioFeedback');
        fb.classList.remove('hidden');
        fb.innerHTML = '<strong>'+(opt.correct ? "Great choice! " : "There's a kinder way. ")+'</strong><br>' + item.why;
        document.querySelectorAll('#friendsScenarioChoices button').forEach(function(b){ b.disabled = true; b.style.opacity = .6; });
        document.getElementById('friendsScenarioNext').classList.remove('hidden');
        if(opt.correct){ sfxCorrect(); playClip('sfxYay'); } else { sfxWrong(); playClip('sfxHuh'); }
      });
      choices.appendChild(btn);
    });
  }
  document.getElementById('friendsScenarioNext').addEventListener('click', function(){
    friendsScenarioIndex++;
    if(friendsScenarioIndex >= friendsScenarioItems.length){
      earnFriendsBadge('scenario');
      playClip('sfxWoo');
      friendsScenarioIndex = 0;
      goto('view-friends-home');
    } else {
      renderFriendsScenario();
    }
  });
  renderFriendsScenario();

  /* ============ Init ============ */
  renderBadgeProgress();
  goto('view-landing');

  // Safety net: if a browser's autoplay policy ever silently blocks the
  // intended track, the next tap anywhere nudges it back to life, but only
  // if the person hasn't deliberately muted that zone.
  document.addEventListener('click', function(){
    ['adult','kids','friends'].forEach(function(zone){
      var enabled = zone === 'kids' ? kidsMusicEnabled : (zone === 'friends' ? friendsMusicEnabled : adultMusicEnabled);
      if(!enabled) return;
      var key = currentTrackByZone[zone];
      if(key && audioEls[key] && audioEls[key].paused){
        var p = audioEls[key].play();
        if(p && p.catch){ p.catch(function(){}); }
      }
    });
  });

})();
