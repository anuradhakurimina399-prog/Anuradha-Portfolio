import React from 'react';

export const AnuradhaPortrait: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 400 520"
      className={`w-full h-full ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Portrait of Kurimina Anuradha wearing yellow kurti and white dupatta"
    >
      <defs>
        {/* Background Marble & Ambient Lighting Gradients */}
        <linearGradient id="bgWall" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E1926" />
          <stop offset="50%" stopColor="#15121D" />
          <stop offset="100%" stopColor="#0B0910" />
        </linearGradient>

        <linearGradient id="marbleTileSeam" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(183, 154, 255, 0.05)" />
          <stop offset="50%" stopColor="rgba(230, 200, 160, 0.15)" />
          <stop offset="100%" stopColor="rgba(183, 154, 255, 0.05)" />
        </linearGradient>

        <linearGradient id="goldNumeralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E5C158" />
          <stop offset="50%" stopColor="#C49B38" />
          <stop offset="100%" stopColor="#8A681B" />
        </linearGradient>

        {/* Skin Gradients */}
        <linearGradient id="skinBase" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#DEAA88" />
          <stop offset="60%" stopColor="#D49977" />
          <stop offset="100%" stopColor="#C28766" />
        </linearGradient>

        <linearGradient id="skinShadow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C08463" />
          <stop offset="100%" stopColor="#A86E4F" />
        </linearGradient>

        {/* Yellow Kurti Gradients */}
        <linearGradient id="kurtiYellow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FACC15" />
          <stop offset="30%" stopColor="#EAB308" />
          <stop offset="80%" stopColor="#CA8A04" />
          <stop offset="100%" stopColor="#A16207" />
        </linearGradient>

        <linearGradient id="kurtiShadow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#CA8A04" />
          <stop offset="100%" stopColor="#854D0E" />
        </linearGradient>

        {/* White Dupatta Gradients */}
        <linearGradient id="dupattaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#F3F4F6" />
          <stop offset="100%" stopColor="#E5E7EB" />
        </linearGradient>

        <linearGradient id="dupattaShadow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(200, 195, 215, 0.4)" />
          <stop offset="100%" stopColor="rgba(140, 135, 160, 0.6)" />
        </linearGradient>

        {/* Hair Gradients */}
        <linearGradient id="hairBase" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#241E2B" />
          <stop offset="50%" stopColor="#17131D" />
          <stop offset="100%" stopColor="#0F0C14" />
        </linearGradient>

        <linearGradient id="hairSheen" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4A3E59" />
          <stop offset="100%" stopColor="#1A1522" />
        </linearGradient>

        {/* Ambient Glow */}
        <radialGradient id="portraitAura" cx="50%" cy="38%" r="55%">
          <stop offset="0%" stopColor="rgba(183, 154, 255, 0.22)" />
          <stop offset="45%" stopColor="rgba(224, 183, 217, 0.10)" />
          <stop offset="100%" stopColor="rgba(8, 8, 13, 0)" />
        </radialGradient>
      </defs>

      {/* --- BACKGROUND LAYER --- */}
      <rect width="400" height="520" fill="url(#bgWall)" />
      <rect width="400" height="520" fill="url(#portraitAura)" />

      {/* Marble wall seam lines from the original photo */}
      <line x1="0" y1="110" x2="400" y2="110" stroke="url(#marbleTileSeam)" strokeWidth="1.5" />
      <line x1="0" y1="260" x2="400" y2="260" stroke="url(#marbleTileSeam)" strokeWidth="1.5" />
      <line x1="0" y1="410" x2="400" y2="410" stroke="url(#marbleTileSeam)" strokeWidth="1.5" />

      {/* Elevator Lobby Number "02" in elegant gold from photo */}
      <g opacity="0.32" transform="translate(145, 160)">
        {/* Numeral 0 */}
        <path
          d="M20 5 C35 5 46 16 46 38 C46 60 35 72 20 72 C5 72 -6 60 -6 38 C-6 16 5 5 20 5 Z M20 18 C14 18 8 26 8 38 C8 50 14 59 20 59 C26 59 32 50 32 38 C32 26 26 18 20 18 Z"
          fill="url(#goldNumeralGrad)"
        />
        {/* Numeral 2 */}
        <path
          d="M62 20 C62 8 72 5 84 5 C97 5 107 13 107 24 C107 35 98 44 87 52 L64 70 L108 70 L108 78 L54 78 L54 70 L80 50 C90 42 96 35 96 25 C96 18 91 14 84 14 C76 14 73 19 72 24 Z"
          fill="url(#goldNumeralGrad)"
        />
      </g>

      {/* Left elevator panel accent indicator */}
      <rect x="25" y="320" width="30" height="75" rx="4" fill="#14111D" stroke="rgba(183, 154, 255, 0.2)" strokeWidth="1" opacity="0.4" />
      <circle cx="40" cy="342" r="6" fill="#A9B7FF" opacity="0.7" />
      <circle cx="40" cy="372" r="6" fill="#6A5A8A" opacity="0.5" />

      {/* --- BACK HAIR (Pinned & flowing behind shoulders) --- */}
      <path
        d="M125 190 C110 240 100 310 115 360 C125 390 140 400 150 400 C155 370 150 310 150 260 Z"
        fill="url(#hairBase)"
      />
      <path
        d="M275 190 C290 240 300 310 285 360 C275 390 260 400 250 400 C245 370 250 310 250 260 Z"
        fill="url(#hairBase)"
      />

      {/* --- BODY & CLOTHING --- */}
      {/* Yellow Kurti Torso & Shoulders */}
      <path
        d="M95 520 L95 385 C95 350 115 330 145 320 L168 316 L200 326 L232 316 L255 320 C285 330 305 350 305 385 L305 520 Z"
        fill="url(#kurtiYellow)"
      />

      {/* Kurti Sleeves */}
      <path
        d="M95 385 C90 415 88 470 92 520 L125 520 C122 470 120 420 125 385 Z"
        fill="url(#kurtiShadow)"
        opacity="0.6"
      />
      <path
        d="M305 385 C310 415 312 470 308 520 L275 520 C278 470 280 420 275 385 Z"
        fill="url(#kurtiShadow)"
        opacity="0.6"
      />

      {/* Kurti Neckline (Round curve) */}
      <path
        d="M168 316 C175 350 225 350 232 316 L200 326 Z"
        fill="#9A6B0A"
      />

      {/* Central Placket with Dark Buttons */}
      <rect x="196" y="342" width="8" height="178" fill="#B47B07" />
      <line x1="200" y1="342" x2="200" y2="520" stroke="#7A5003" strokeWidth="1" />

      {/* Small Kurti Buttons from the photo */}
      <circle cx="200" cy="365" r="2.8" fill="#2B1A04" stroke="#7A5003" strokeWidth="0.8" />
      <circle cx="200" cy="392" r="2.8" fill="#2B1A04" stroke="#7A5003" strokeWidth="0.8" />
      <circle cx="200" cy="419" r="2.8" fill="#2B1A04" stroke="#7A5003" strokeWidth="0.8" />
      <circle cx="200" cy="446" r="2.8" fill="#2B1A04" stroke="#7A5003" strokeWidth="0.8" />
      <circle cx="200" cy="473" r="2.8" fill="#2B1A04" stroke="#7A5003" strokeWidth="0.8" />

      {/* --- WHITE DUPATTA (Draped over both shoulders down the front) --- */}
      {/* Left Drape of White Dupatta */}
      <path
        d="M136 324 C142 340 148 400 144 460 C140 495 136 520 136 520 L188 520 C188 520 185 480 182 430 C180 380 185 340 178 322 C168 320 148 320 136 324 Z"
        fill="url(#dupattaGrad)"
      />
      {/* Left Dupatta Soft Fabric Folds & Shadow */}
      <path
        d="M160 324 C164 360 162 430 166 520"
        stroke="rgba(180, 175, 195, 0.45)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M148 340 C152 390 149 460 148 520"
        stroke="rgba(195, 190, 210, 0.3)"
        strokeWidth="1.2"
      />
      <path
        d="M174 330 C178 380 176 450 178 520"
        stroke="rgba(180, 175, 195, 0.35)"
        strokeWidth="1.5"
      />

      {/* Right Drape of White Dupatta */}
      <path
        d="M264 324 C258 340 252 400 256 460 C260 495 264 520 264 520 L212 520 C212 520 215 480 218 430 C220 380 215 340 222 322 C232 320 252 320 264 324 Z"
        fill="url(#dupattaGrad)"
      />
      {/* Right Dupatta Soft Fabric Folds & Shadow */}
      <path
        d="M240 324 C236 360 238 430 234 520"
        stroke="rgba(180, 175, 195, 0.45)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M252 340 C248 390 251 460 252 520"
        stroke="rgba(195, 190, 210, 0.3)"
        strokeWidth="1.2"
      />
      <path
        d="M226 330 C222 380 224 450 222 520"
        stroke="rgba(180, 175, 195, 0.35)"
        strokeWidth="1.5"
      />

      {/* --- NECK & COLLARBONE --- */}
      <path
        d="M182 250 L182 320 Q200 330 218 320 L218 250 Z"
        fill="url(#skinBase)"
      />
      {/* Soft neck shadow under jawline */}
      <path
        d="M182 250 C188 266 212 266 218 250 L218 268 C205 278 195 278 182 268 Z"
        fill="url(#skinShadow)"
        opacity="0.65"
      />

      {/* --- HEAD & FACE --- */}
      {/* Face Contour (Soft rounded jaw, warm expression) */}
      <path
        d="M152 170 C152 108 248 108 248 170 C248 215 234 256 200 256 C166 256 152 215 152 170 Z"
        fill="url(#skinBase)"
      />

      {/* Cheeks subtle warm rose glow */}
      <ellipse cx="168" cy="198" rx="14" ry="9" fill="#E88288" opacity="0.18" />
      <ellipse cx="232" cy="198" rx="14" ry="9" fill="#E88288" opacity="0.18" />

      {/* --- HAIR (Parted & Framing Face) --- */}
      <path
        d="M148 165 C146 100 254 100 252 165 C252 185 244 195 238 180 C230 150 218 128 200 128 C182 128 170 150 162 180 C156 195 148 185 148 165 Z"
        fill="url(#hairBase)"
      />
      {/* Clean center hairline part */}
      <line x1="200" y1="110" x2="200" y2="134" stroke="url(#skinBase)" strokeWidth="1.2" strokeLinecap="round" />

      {/* Subtle hair sheen highlighting the styled parted hair */}
      <path
        d="M165 132 C178 120 192 118 200 118"
        stroke="url(#hairSheen)"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M235 132 C222 120 208 118 200 118"
        stroke="url(#hairSheen)"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.75"
      />

      {/* Natural side hair strands curving behind ears */}
      <path d="M152 165 C150 195 154 215 160 225" stroke="#17131D" strokeWidth="2.5" fill="none" />
      <path d="M248 165 C250 195 246 215 240 225" stroke="#17131D" strokeWidth="2.5" fill="none" />

      {/* --- EARS & GOLD STUD EARRINGS (From Photo) --- */}
      {/* Left Ear */}
      <path d="M152 175 C147 175 145 186 148 196 C150 202 153 204 155 198 Z" fill="url(#skinBase)" />
      {/* Left Gold Stud Earring */}
      <circle cx="149" cy="192" r="3.2" fill="#E5C158" stroke="#8A681B" strokeWidth="0.8" />
      <circle cx="148" cy="191" r="1.2" fill="#FFFBEB" />

      {/* Right Ear */}
      <path d="M248 175 C253 175 255 186 252 196 C250 202 247 204 245 198 Z" fill="url(#skinBase)" />
      {/* Right Gold Stud Earring */}
      <circle cx="251" cy="192" r="3.2" fill="#E5C158" stroke="#8A681B" strokeWidth="0.8" />
      <circle cx="252" cy="191" r="1.2" fill="#FFFBEB" />

      {/* --- FOREHEAD BINDI (Small deep red circular bindi from photo) --- */}
      <circle cx="200" cy="153" r="2.8" fill="#B91C1C" stroke="#7F1D1D" strokeWidth="0.6" />
      <circle cx="199.2" cy="152.2" r="0.8" fill="#FCA5A5" opacity="0.6" />

      {/* --- EYEBROWS (Gently arched, natural dark brows) --- */}
      <path
        d="M166 161 Q176 156 186 160"
        stroke="#1E1624"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M214 160 Q224 156 234 161"
        stroke="#1E1624"
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      {/* --- EYES (Warm, almond shaped, smiling eyes) --- */}
      {/* Left Eye */}
      <g>
        {/* Eye White */}
        <path d="M167 172 Q176 167 185 172 Q176 177 167 172 Z" fill="#FFFFFF" />
        {/* Iris */}
        <ellipse cx="176" cy="172" rx="4.2" ry="4.2" fill="#2E1D16" />
        <circle cx="176" cy="172" r="2.2" fill="#0F0805" />
        {/* Catchlight */}
        <circle cx="177.5" cy="170.8" r="1.3" fill="#FFFFFF" />
        {/* Upper Eyelash line (smiling crinkle) */}
        <path d="M166 171 Q176 165 186 171" stroke="#1A111F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        {/* Lower eyelid */}
        <path d="M168 174 Q176 177 184 174" stroke="rgba(46, 29, 22, 0.4)" strokeWidth="0.8" fill="none" />
      </g>

      {/* Right Eye */}
      <g>
        {/* Eye White */}
        <path d="M215 172 Q224 167 233 172 Q224 177 215 172 Z" fill="#FFFFFF" />
        {/* Iris */}
        <ellipse cx="224" cy="172" rx="4.2" ry="4.2" fill="#2E1D16" />
        <circle cx="224" cy="172" r="2.2" fill="#0F0805" />
        {/* Catchlight */}
        <circle cx="225.5" cy="170.8" r="1.3" fill="#FFFFFF" />
        {/* Upper Eyelash line (smiling crinkle) */}
        <path d="M214 171 Q224 165 234 171" stroke="#1A111F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        {/* Lower eyelid */}
        <path d="M216 174 Q224 177 232 174" stroke="rgba(46, 29, 22, 0.4)" strokeWidth="0.8" fill="none" />
      </g>

      {/* --- NOSE (Straight, delicate definition) --- */}
      <path
        d="M200 162 L198 184 Q195 189 200 190 Q205 189 202 184"
        stroke="#B37857"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
      {/* Subtle Nostril shadows */}
      <path d="M194 188 Q197 186 199 188" stroke="#9A6142" strokeWidth="1.1" strokeLinecap="round" fill="none" />
      <path d="M206 188 Q203 186 201 188" stroke="#9A6142" strokeWidth="1.1" strokeLinecap="round" fill="none" />

      {/* --- RADIANT WARM SMILE WITH CLEAN WHITE TEETH (Matching Photo) --- */}
      {/* Philtrum line */}
      <line x1="200" y1="192" x2="200" y2="198" stroke="#B37857" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />

      {/* Open Smile Mouth Cavity & Lips */}
      {/* Upper Lip */}
      <path
        d="M183 205 Q192 201 200 203 Q208 201 217 205 Q208 208 200 208 Q192 208 183 205 Z"
        fill="#B85867"
      />

      {/* Smile Opening with clean white teeth arch */}
      <path
        d="M184 206 Q200 220 216 206 Q208 223 200 223 Q192 223 184 206 Z"
        fill="#661924"
      />
      {/* Clean White Teeth */}
      <path
        d="M186 207 Q200 216 214 207 Q209 216 200 216 Q191 216 186 207 Z"
        fill="#FFFFFF"
      />
      {/* Subtle individual tooth divider indications */}
      <line x1="196" y1="208" x2="196" y2="213" stroke="#E5E7EB" strokeWidth="0.6" />
      <line x1="200" y1="208" x2="200" y2="214" stroke="#D1D5DB" strokeWidth="0.7" />
      <line x1="204" y1="208" x2="204" y2="213" stroke="#E5E7EB" strokeWidth="0.6" />

      {/* Lower Lip */}
      <path
        d="M185 214 Q200 226 215 214 Q200 229 185 214 Z"
        fill="#C46272"
      />
      {/* Smile dimple creases */}
      <path d="M179 204 Q181 209 183 213" stroke="#B37857" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.7" />
      <path d="M221 204 Q219 209 217 213" stroke="#B37857" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.7" />

      {/* Chin soft highlight */}
      <ellipse cx="200" cy="238" rx="8" ry="4" fill="#E8BBA0" opacity="0.4" />
    </svg>
  );
};
