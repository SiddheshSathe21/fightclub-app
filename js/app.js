function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useRef = _React.useRef,
  useCallback = _React.useCallback;

// ==================== CONSTANTS ====================

var UNLOCK_PHRASES = ['i understand', 'break the rules', 'i am jack', 'i want to fight', 'tyler'];

// 30-level rank system across 6 stages
var STAGES = [{
  stage: 1,
  name: 'Awareness',
  color: '#4a7a73',
  accent: '#5c9e96'
}, {
  stage: 2,
  name: 'Discipline',
  color: '#007A6E',
  accent: '#00a896'
}, {
  stage: 3,
  name: 'Strength',
  color: '#00897B',
  accent: '#00BFA5'
}, {
  stage: 4,
  name: 'Control',
  color: '#1565C0',
  accent: '#1E88E5'
}, {
  stage: 5,
  name: 'Leadership',
  color: '#6A1B9A',
  accent: '#AB47BC'
}, {
  stage: 6,
  name: 'Legacy',
  color: '#B71C1C',
  accent: '#EF5350'
}];
var RANKS = [
// Stage 1 — Awareness (teal family)
{
  level: 1,
  stage: 1,
  name: 'Observer',
  xpMin: 0,
  xpMax: 60,
  color: '#4a7a73'
}, {
  level: 2,
  stage: 1,
  name: 'Seeker',
  xpMin: 60,
  xpMax: 130,
  color: '#4a7a73'
}, {
  level: 3,
  stage: 1,
  name: 'Learner',
  xpMin: 130,
  xpMax: 210,
  color: '#5c9e96'
}, {
  level: 4,
  stage: 1,
  name: 'Initiate',
  xpMin: 210,
  xpMax: 300,
  color: '#5c9e96'
}, {
  level: 5,
  stage: 1,
  name: 'Awakened',
  xpMin: 300,
  xpMax: 400,
  color: '#6db8ae'
},
// Stage 2 — Discipline (deep teal)
{
  level: 6,
  stage: 2,
  name: 'Apprentice',
  xpMin: 400,
  xpMax: 510,
  color: '#007A6E'
}, {
  level: 7,
  stage: 2,
  name: 'Builder',
  xpMin: 510,
  xpMax: 630,
  color: '#007A6E'
}, {
  level: 8,
  stage: 2,
  name: 'Focused',
  xpMin: 630,
  xpMax: 760,
  color: '#009688'
}, {
  level: 9,
  stage: 2,
  name: 'Driven',
  xpMin: 760,
  xpMax: 900,
  color: '#009688'
}, {
  level: 10,
  stage: 2,
  name: 'Challenger',
  xpMin: 900,
  xpMax: 1050,
  color: '#00a896'
},
// Stage 3 — Strength (bright teal → green)
{
  level: 11,
  stage: 3,
  name: 'Fighter',
  xpMin: 1050,
  xpMax: 1210,
  color: '#00897B'
}, {
  level: 12,
  stage: 3,
  name: 'Warrior',
  xpMin: 1210,
  xpMax: 1380,
  color: '#00BFA5'
}, {
  level: 13,
  stage: 3,
  name: 'Resilient',
  xpMin: 1380,
  xpMax: 1560,
  color: '#1DE9D4'
}, {
  level: 14,
  stage: 3,
  name: 'Determined',
  xpMin: 1560,
  xpMax: 1750,
  color: '#1DE9D4'
}, {
  level: 15,
  stage: 3,
  name: 'Unbreakable',
  xpMin: 1750,
  xpMax: 1950,
  color: '#64ffda'
},
// Stage 4 — Control (blue)
{
  level: 16,
  stage: 4,
  name: 'Strategist',
  xpMin: 1950,
  xpMax: 2160,
  color: '#1565C0'
}, {
  level: 17,
  stage: 4,
  name: 'Commander',
  xpMin: 2160,
  xpMax: 2380,
  color: '#1E88E5'
}, {
  level: 18,
  stage: 4,
  name: 'Veteran',
  xpMin: 2380,
  xpMax: 2610,
  color: '#42A5F5'
}, {
  level: 19,
  stage: 4,
  name: 'Disciplined',
  xpMin: 2610,
  xpMax: 2850,
  color: '#64B5F6'
}, {
  level: 20,
  stage: 4,
  name: 'Master',
  xpMin: 2850,
  xpMax: 3100,
  color: '#90CAF9'
},
// Stage 5 — Leadership (purple)
{
  level: 21,
  stage: 5,
  name: 'Mentor',
  xpMin: 3100,
  xpMax: 3360,
  color: '#6A1B9A'
}, {
  level: 22,
  stage: 5,
  name: 'Influencer',
  xpMin: 3360,
  xpMax: 3630,
  color: '#7B1FA2'
}, {
  level: 23,
  stage: 5,
  name: 'Leader',
  xpMin: 3630,
  xpMax: 3910,
  color: '#8E24AA'
}, {
  level: 24,
  stage: 5,
  name: 'Champion',
  xpMin: 3910,
  xpMax: 4200,
  color: '#AB47BC'
}, {
  level: 25,
  stage: 5,
  name: 'Pioneer',
  xpMin: 4200,
  xpMax: 4500,
  color: '#CE93D8'
},
// Stage 6 — Legacy (crimson / gold)
{
  level: 26,
  stage: 6,
  name: 'Icon',
  xpMin: 4500,
  xpMax: 4810,
  color: '#B71C1C'
}, {
  level: 27,
  stage: 6,
  name: 'Legend',
  xpMin: 4810,
  xpMax: 5130,
  color: '#C62828'
}, {
  level: 28,
  stage: 6,
  name: 'Visionary',
  xpMin: 5130,
  xpMax: 5460,
  color: '#E53935'
}, {
  level: 29,
  stage: 6,
  name: 'Unstoppable',
  xpMin: 5460,
  xpMax: 5800,
  color: '#EF5350'
}, {
  level: 30,
  stage: 6,
  name: 'Ascendant',
  xpMin: 5800,
  xpMax: 99999,
  color: '#FF8A65'
}];

// ---- MAN CHALLENGES ----
var MAN_CHALLENGES = [
// PHYSICAL FITNESS
{
  id: 'm1',
  gender: 'man',
  title: 'MORNING WALK',
  desc: 'Take a brisk 1-hour walk every morning for 5 days this week. Walk at a comfortable pace that gets your heart moving. Early morning air, clear thoughts, and a healthy body are all yours for the price of one hour.',
  difficulty: 'MODERATE',
  xp: 55,
  category: 'PHYSICAL FITNESS',
  mission: 'A man who moves his body every morning moves through life differently.'
}, {
  id: 'm2',
  gender: 'man',
  title: 'BODYWEIGHT BASICS',
  desc: 'Do 25 push-ups, 25 squats, and 25 sit-ups every day for 5 days this week. Rest between sets if needed. These three exercises together build real strength and take less than 15 minutes. Start where you are and build from there.',
  difficulty: 'HARD',
  xp: 60,
  category: 'PHYSICAL FITNESS',
  mission: 'Strength built daily, even in small amounts, compounds into something real.'
}, {
  id: 'm3',
  gender: 'man',
  title: 'EVENING STRETCH ROUTINE',
  desc: 'Spend 15 minutes stretching every evening for 5 days this week. Focus on your back, legs, and shoulders. Stretching reduces tension, improves posture, and helps you sleep better. Your body carries you everywhere — take care of it.',
  difficulty: 'EASY',
  xp: 35,
  category: 'PHYSICAL FITNESS',
  mission: 'A flexible body and a flexible mind both start with small daily effort.'
}, {
  id: 'm4',
  gender: 'man',
  title: 'EAT CLEAN FOR 5 DAYS',
  desc: 'For 5 days this week, cook your own meals using fresh ingredients — vegetables, rice, lentils, eggs, fruit. Avoid fast food and packaged snacks as much as possible. You do not need a perfect diet, just 5 days of real, simple food.',
  difficulty: 'MODERATE',
  xp: 55,
  category: 'HEALTHY HABITS',
  mission: 'Clean food is one of the simplest investments you can make in yourself.'
},
// DISCIPLINE & MIND
{
  id: 'm5',
  gender: 'man',
  title: 'EARLY RISER WEEK',
  desc: 'Wake up 45 minutes earlier than your usual time for 5 days this week. Use that extra time for exercise, reading, journaling, or planning your day quietly before it begins. The morning belongs to those who wake up for it.',
  difficulty: 'HARD',
  xp: 60,
  category: 'DISCIPLINE',
  mission: 'Win the morning and you carry that energy into everything that follows.'
}, {
  id: 'm6',
  gender: 'man',
  title: 'PHONE-FREE MORNINGS',
  desc: 'For 5 days this week, do not touch your phone for the first 45 minutes after waking up. Use that time to stretch, make tea, eat a real breakfast, or sit quietly. Starting your day on your own terms changes how the whole day feels.',
  difficulty: 'MODERATE',
  xp: 50,
  category: 'DIGITAL BALANCE',
  mission: 'Your first hour belongs to you, not to a screen.'
}, {
  id: 'm7',
  gender: 'man',
  title: '10-MINUTE DAILY MEDITATION',
  desc: 'Sit quietly for 10 minutes every day this week. Focus on your breathing. When your mind wanders, gently return to your breath. This practice builds focus, reduces anxiety, and gives you a calmer response to daily challenges.',
  difficulty: 'EASY',
  xp: 40,
  category: 'MENTAL WELLBEING',
  mission: 'Ten quiet minutes every day builds a calmer, clearer mind over time.'
}, {
  id: 'm8',
  gender: 'man',
  title: 'READ 30 MINUTES EVERY DAY',
  desc: 'Read for at least 30 minutes every day this week — a biography, a history book, a philosophy text, or anything that teaches you something real. Put the phone down and pick up a book. Your mind will thank you by the end of the week.',
  difficulty: 'EASY',
  xp: 40,
  category: 'LEARNING',
  mission: 'A man who reads widely understands the world more deeply.'
},
// SKILLS & CHARACTER
{
  id: 'm9',
  gender: 'man',
  title: 'LEARN AND PRACTISE A SKILL',
  desc: 'Choose one practical skill to work on this week — cooking a new dish, basic home repairs, learning 10 words of a new language, drawing, or budgeting. Spend 20 to 30 minutes on it daily. Small daily practice builds real ability.',
  difficulty: 'EASY',
  xp: 45,
  category: 'CRAFT & SKILL',
  mission: 'Every skill you build adds to who you are and what you can offer.'
}, {
  id: 'm10',
  gender: 'man',
  title: 'KNOW YOUR FINANCES',
  desc: 'Write down all your income and expenses for the past month. Categorise them clearly. Identify one area where you could save more and set a small savings goal for next month. Financial clarity is a form of freedom.',
  difficulty: 'HARD',
  xp: 55,
  category: 'FINANCIAL MASTERY',
  mission: 'The man who understands his money is not controlled by it.'
}, {
  id: 'm11',
  gender: 'man',
  title: 'WRITE YOUR VALUES',
  desc: 'Write down 5 to 8 personal values that define who you want to be — honesty, responsibility, kindness, courage, discipline. For each one, write one concrete action you will take this week to live by it. Values without action are just words.',
  difficulty: 'EASY',
  xp: 40,
  category: 'CHARACTER',
  mission: 'The life you live reflects the values you actually hold, not the ones you say you do.'
},
// RELATIONSHIPS & COMMUNITY
{
  id: 'm12',
  gender: 'man',
  title: 'SHOW UP FOR SOMEONE',
  desc: 'Identify one person in your life who could use your support this week — a family member, friend, or neighbour. Do something genuinely helpful for them: cook for them, assist with a task, offer your time, or simply listen without distraction.',
  difficulty: 'EASY',
  xp: 45,
  category: 'RELATIONSHIPS',
  mission: 'The people who show up consistently are the ones who are remembered.'
}, {
  id: 'm13',
  gender: 'man',
  title: 'KEEP ONE PROMISE',
  desc: 'Think of one commitment you made — to yourself or someone else — that you have been putting off. This week, complete it or take a significant step toward it. Keeping your word, even in small things, builds a trustworthy character.',
  difficulty: 'MODERATE',
  xp: 60,
  category: 'INTEGRITY',
  mission: 'A man who keeps his word builds something that money cannot buy.'
}, {
  id: 'm14',
  gender: 'man',
  title: 'COMMUNITY HOUR',
  desc: 'Give one hour to your neighbourhood or community this week — help a local elder, join a clean-up effort, assist at a local institution, or support a neighbour with something practical. Being useful to others gives life real meaning.',
  difficulty: 'EASY',
  xp: 40,
  category: 'CITIZENSHIP',
  mission: 'A man who gives to his community makes it stronger for everyone, including himself.'
},
// ROOTS & CULTURE
{
  id: 'm15',
  gender: 'man',
  title: 'LEARN FROM YOUR HERITAGE',
  desc: 'This week, learn one thing from your own cultural tradition — a recipe passed down in your family, a historical figure from your community, a craft your grandparents knew, or a local language skill. Your roots are a source of strength.',
  difficulty: 'EASY',
  xp: 45,
  category: 'CULTURAL ROOTS',
  mission: 'A man connected to his roots stands more steadily in the world.'
}, {
  id: 'm16',
  gender: 'man',
  title: 'MENTOR A YOUNGER PERSON',
  desc: 'Spend genuine time with a younger sibling, cousin, student, or neighbour this week. Teach them a skill, help with homework, share an honest life lesson, or simply give them your full attention for an hour. Guidance changes lives.',
  difficulty: 'MODERATE',
  xp: 55,
  category: 'LEADERSHIP',
  mission: 'Every man was once a young person who needed someone to believe in him.'
}];

// ---- WOMAN CHALLENGES ----
var WOMAN_CHALLENGES = [
// PHYSICAL FITNESS
{
  id: 'w1',
  gender: 'woman',
  title: 'MORNING WALK',
  desc: 'Take a 45-minute walk every morning for 5 days this week. Walk at a comfortable pace that feels energising. Morning walks improve mood, boost energy, support health, and give you quiet thinking time before the day gets busy.',
  difficulty: 'MODERATE',
  xp: 50,
  category: 'PHYSICAL FITNESS',
  mission: 'A woman who moves her body with intention moves through life with more energy.'
}, {
  id: 'w2',
  gender: 'woman',
  title: 'DAILY HOME WORKOUT',
  desc: 'Do 20 squats, 15 push-ups (or wall push-ups if needed), and a 2-minute plank hold every day for 5 days. Rest between exercises as needed. These are simple, safe movements that build real strength at home with no equipment required.',
  difficulty: 'HARD',
  xp: 55,
  category: 'PHYSICAL FITNESS',
  mission: 'Strength built at home is still real strength.'
}, {
  id: 'w3',
  gender: 'woman',
  title: 'COOK 4 MEALS FROM SCRATCH',
  desc: 'Cook at least 4 home meals this week using fresh, simple ingredients. Choose recipes from your own family or cultural tradition when possible. Cooking nourishes your body, connects you to your culture, and builds a valuable daily habit.',
  difficulty: 'EASY',
  xp: 40,
  category: 'NOURISHMENT',
  mission: 'Food prepared with care does more than feed — it grounds you.'
}, {
  id: 'w4',
  gender: 'woman',
  title: 'SLEEP WELL THIS WEEK',
  desc: 'For 5 nights this week, set a regular bedtime and aim for 7 to 8 hours of sleep. Avoid screens for 30 minutes before sleeping. Good sleep improves your mood, focus, health, and your ability to handle everything the next day brings.',
  difficulty: 'EASY',
  xp: 35,
  category: 'HEALTHY HABITS',
  mission: 'Everything in life is easier after a good night of real rest.'
},
// MIND & CLARITY
{
  id: 'w5',
  gender: 'woman',
  title: 'PHONE-FREE MORNINGS',
  desc: 'For 5 days this week, keep your phone away for the first 30 minutes after waking. Use that time to stretch, drink water, have a quiet breakfast, or sit with your thoughts. Starting the day on your own terms is a powerful daily gift.',
  difficulty: 'MODERATE',
  xp: 45,
  category: 'DIGITAL BALANCE',
  mission: 'Your morning is yours before it belongs to anyone else.'
}, {
  id: 'w6',
  gender: 'woman',
  title: '10-MINUTE DAILY REFLECTION',
  desc: 'Spend 10 minutes each day this week writing in a private journal. Write freely — what you are feeling, what you are grateful for, what you want more of, what you want less of. Honest self-reflection is a quiet form of deep self-care.',
  difficulty: 'EASY',
  xp: 40,
  category: 'SELF-AWARENESS',
  mission: 'A woman who understands herself clearly is not easily lost.'
}, {
  id: 'w7',
  gender: 'woman',
  title: 'READ EVERY DAY',
  desc: 'Read for 30 minutes every day this week — a book by an inspiring woman, a piece of your cultural history, a biography, or anything that genuinely interests you. Reading builds a mind that thinks clearly and a heart that understands more.',
  difficulty: 'EASY',
  xp: 40,
  category: 'LEARNING',
  mission: 'A woman who reads widely carries more of the world inside her.'
}, {
  id: 'w8',
  gender: 'woman',
  title: 'UNDERSTAND YOUR FINANCES',
  desc: 'Write down your monthly income, regular expenses, and current savings clearly. Identify one expense you could reduce and one saving goal to work toward. Financial understanding gives you real independence and confidence in your choices.',
  difficulty: 'HARD',
  xp: 55,
  category: 'FINANCIAL MASTERY',
  mission: 'A woman who understands her finances is not dependent on others for her security.'
},
// ROOTS & TRADITION
{
  id: 'w9',
  gender: 'woman',
  title: 'LEARN FROM AN ELDER WOMAN',
  desc: 'Spend meaningful time with an older woman in your life this week — your mother, grandmother, aunt, or a respected neighbour. Ask her to teach you something she knows: a recipe, a skill, a craft, or a piece of her life wisdom. Listen carefully.',
  difficulty: 'EASY',
  xp: 50,
  category: 'CULTURAL ROOTS',
  mission: 'The women who came before you carried wisdom that no school ever teaches.'
}, {
  id: 'w10',
  gender: 'woman',
  title: 'CREATE SOMETHING WITH YOUR HANDS',
  desc: 'This week, make something by hand — embroider, bake from a traditional recipe, paint, knit, plant something, make a craft from your culture, or write a poem. Creating something real with your own hands builds confidence and calm together.',
  difficulty: 'EASY',
  xp: 45,
  category: 'CREATIVITY',
  mission: 'A woman who creates builds something the world did not have before.'
},
// COMMUNITY & CHARACTER
{
  id: 'w11',
  gender: 'woman',
  title: 'DO SOMETHING KIND TODAY',
  desc: 'Each day this week, do one genuinely kind thing for someone around you — a family member, a friend, a classmate, a colleague, or a stranger. It does not need to be large. Consistent small kindnesses build a life of real meaning.',
  difficulty: 'EASY',
  xp: 40,
  category: 'COMMUNITY',
  mission: 'Kindness practised daily becomes who you are.'
}, {
  id: 'w12',
  gender: 'woman',
  title: 'SET ONE HEALTHY BOUNDARY',
  desc: 'Identify one situation in your life that regularly drains your energy or wellbeing. This week, take one calm and respectful step to protect yourself from it — a polite refusal, a reduced commitment, or an honest conversation.',
  difficulty: 'HARD',
  xp: 50,
  category: 'HEALTHY BOUNDARIES',
  mission: 'Protecting your energy is not selfish — it is necessary.'
}, {
  id: 'w13',
  gender: 'woman',
  title: 'SIMPLIFY YOUR SPACE',
  desc: 'Spend 30 minutes this week tidying or simplifying one area of your room or home — a cluttered shelf, a messy drawer, or an overflowing wardrobe. Donate or remove anything you no longer use. A cleaner space creates a cleaner state of mind.',
  difficulty: 'EASY',
  xp: 35,
  category: 'SIMPLICITY',
  mission: 'A clear space creates room for clearer thinking.'
}, {
  id: 'w14',
  gender: 'woman',
  title: 'WRITE YOUR VALUES',
  desc: 'Write down 5 to 8 values that define the woman you want to be — courage, honesty, family, faith, compassion, discipline. For each one, write one real action you will take this week to live by it. Values lived daily become your character.',
  difficulty: 'EASY',
  xp: 40,
  category: 'CHARACTER',
  mission: 'What you consistently do is who you actually are.'
}, {
  id: 'w15',
  gender: 'woman',
  title: 'WRITE A LETTER TO YOUR FUTURE SELF',
  desc: 'Write an honest, warm letter to yourself five years from now. Share what you are learning, what you hope for, what you are proud of today. Seal it somewhere safe. When you find it one day, it will feel like a gift from someone who believed in you.',
  difficulty: 'EASY',
  xp: 45,
  category: 'REFLECTION',
  mission: 'The kindest thing you can do for your future self is to think about her today.'
}, {
  id: 'w16',
  gender: 'woman',
  title: 'GIVE TIME TO YOUR COMMUNITY',
  desc: 'Spend 2 hours this week contributing to your local community — help at a school, assist an elderly neighbour, join a clean-up, volunteer at a community kitchen, or teach a skill to someone younger. Your presence in your community matters.',
  difficulty: 'MODERATE',
  xp: 50,
  category: 'CITIZENSHIP',
  mission: 'Every woman who gives to her community makes it better for every person in it.'
}];
var CHALLENGES = [].concat(MAN_CHALLENGES, WOMAN_CHALLENGES);

// ==================== WEEKLY MISSION SYSTEM ====================

// Absolute week index (used as seed only — never shown to user)
function getWeekNumber() {
  return Math.floor((Date.now() + 3 * 86400000) / (7 * 86400000));
}

// Human-readable label: "MAR 10 – MAR 16"
function getWeekLabel() {
  var now = new Date();
  var day = now.getDay();
  var diffToMonday = day === 0 ? -6 : 1 - day;
  var monday = new Date(now);
  monday.setDate(now.getDate() + diffToMonday);
  monday.setHours(0, 0, 0, 0);
  var sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  var fmt = function fmt(d) {
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    }).toUpperCase();
  };
  return fmt(monday) + ' – ' + fmt(sunday);
}

// Lightweight seeded PRNG (LCG) — deterministic per week
function seededRandom(seed) {
  var s = seed & 0xffffffff;
  return function () {
    s = Math.imul(1664525, s) + 1013904223 & 0xffffffff;
    return (s >>> 0) / 4294967296;
  };
}
function seededShuffle(arr, seed) {
  var a = _toConsumableArray(arr);
  var rng = seededRandom(seed);
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(rng() * (i + 1));
    var _ref = [a[j], a[i]];
    a[i] = _ref[0];
    a[j] = _ref[1];
  }
  return a;
}

// Get this week's 8 missions per gender from the static pool
function getWeeklyStaticMissions(gender, weekNum) {
  var pool = CHALLENGES.filter(function (c) {
    return c.gender === gender;
  });
  var shuffled = seededShuffle(pool, weekNum * 31 + (gender === 'man' ? 0 : 997));
  return shuffled.slice(0, 8).map(function (c) {
    return _objectSpread(_objectSpread({}, c), {}, {
      isWeekly: true
    });
  });
}

// Time until next Monday 00:00 UTC
function msUntilNextWeek() {
  var now = Date.now();
  var weekMs = 7 * 86400000;
  var offset = 3 * 86400000; // Thursday → Monday alignment
  var nextWeekStart = Math.ceil((now + offset) / weekMs) * weekMs - offset;
  return nextWeekStart - now;
}
function formatCountdown(ms) {
  var d = Math.floor(ms / 86400000);
  var h = Math.floor(ms % 86400000 / 3600000);
  var m = Math.floor(ms % 3600000 / 60000);
  var s = Math.floor(ms % 60000 / 1000);
  if (d > 0) return "".concat(d, "d ").concat(h, "h ").concat(m, "m");
  return "".concat(h, "h ").concat(m, "m ").concat(s, "s");
}

// Debate category suggestions shown to users
var DEBATE_CATEGORIES = [{
  id: 'politics',
  label: 'Politics',
  icon: '🏛',
  hint: 'Governance, elections, policy, leadership, democracy'
}, {
  id: 'corruption',
  label: 'Corruption',
  icon: '⚖',
  hint: 'Public accountability, institutional trust, transparency'
}, {
  id: 'society',
  label: 'Society',
  icon: '🏙',
  hint: 'Culture, values, community, social change, traditions'
}, {
  id: 'education',
  label: 'Education',
  icon: '📚',
  hint: 'School systems, what we teach, skills vs degrees'
}, {
  id: 'economy',
  label: 'Economy',
  icon: '💹',
  hint: 'Inequality, jobs, poverty, cost of living, growth'
}, {
  id: 'media',
  label: 'Media & Tech',
  icon: '📡',
  hint: 'Social media, news bias, screen addiction, digital life'
}, {
  id: 'environment',
  label: 'Environment',
  icon: '🌱',
  hint: 'Climate, clean cities, sustainable living, responsibility'
}, {
  id: 'youth',
  label: 'Youth & Future',
  icon: '🔭',
  hint: 'Career, ambition, mental health of the next generation'
}];

// Taboo word list for client-side moderation (not exhaustive — AI moderation handles the rest)
var TABOO_WORDS = ['fuck', 'shit', 'bitch', 'asshole', 'bastard', 'cunt', 'dick', 'cock', 'pussy', 'whore', 'slut', 'faggot', 'nigger', 'nigga', 'chink', 'spic', 'kike', 'retard', 'rape', 'porn', 'sex', 'naked', 'nude', 'kill yourself', 'kys', 'suicide', 'bomb', 'terrorist', 'jihad'];
function containsTaboo(text) {
  var lower = text.toLowerCase().replace(/[^a-z\s]/g, ' ');
  return TABOO_WORDS.some(function (w) {
    return lower.includes(w);
  });
}
var DEBATE_TOPICS = [{
  id: 1,
  category: 'corruption',
  topic: "IS CORRUPTION THE BIGGEST BARRIER TO A COUNTRY'S PROGRESS?",
  summary: 'Many nations have talent, resources, and ambition — but corruption at every level drains it all before it can reach the people.',
  votes: 2341,
  forArgs: [{
    id: 1,
    author: 'CITIZEN_4F2A',
    text: 'Every rupee or peso lost to a corrupt official is a school not built, a road not repaired, a hospital not staffed. Corruption does not slow progress — it stops it entirely. A nation cannot grow while its foundation is being stolen.',
    votes: 87,
    userVoted: false
  }, {
    id: 2,
    author: 'OBSERVER_7C',
    text: 'The worst part of corruption is not the money. It is that honest, talented people stop trying. When effort is not rewarded and connections decide everything, ambition dies. The most devastating cost of corruption is human potential wasted.',
    votes: 64,
    userVoted: false
  }],
  againstArgs: [{
    id: 3,
    author: 'ANALYST_2B',
    text: 'Several historically corrupt nations — South Korea, Singapore, China — achieved rapid development by combining strong central leadership with targeted economic reform. Corruption is serious but not automatically fatal to progress if growth is directed strategically.',
    votes: 41,
    userVoted: false
  }, {
    id: 4,
    author: 'REALIST_9X',
    text: 'Poverty and lack of education enable corruption as much as the reverse. Without lifting the economic floor first, anti-corruption campaigns often only change who is corrupt, not whether corruption exists.',
    votes: 33,
    userVoted: false
  }]
}, {
  id: 2,
  category: 'education',
  topic: 'IS THE CURRENT EDUCATION SYSTEM PREPARING YOUNG PEOPLE FOR REAL LIFE?',
  summary: 'We teach algebra and history but not how to pay taxes, build relationships, manage emotions, or think critically about the world around us.',
  votes: 1876,
  forArgs: [{
    id: 1,
    author: 'TEACHER_3M',
    text: 'A student can graduate knowing the periodic table and not know how to write a job application, budget a salary, cook a meal, or recognise when they are being manipulated. Schools produce exam-passers. Life requires something different entirely.',
    votes: 72,
    userVoted: false
  }, {
    id: 2,
    author: 'PARENT_6A',
    text: 'The pressure of modern schooling is producing a generation with high grades and severe anxiety. We are measuring the wrong things and ignoring the most important ones — emotional resilience, practical skill, and genuine curiosity.',
    votes: 55,
    userVoted: false
  }],
  againstArgs: [{
    id: 3,
    author: 'EDUCATOR_1P',
    text: 'Education systems do not fail because of what they teach — they fail because of how they are funded and who teaches. The curriculum is not the problem. Underpaid teachers, overcrowded classrooms, and no parental involvement are.',
    votes: 49,
    userVoted: false
  }]
}, {
  id: 3,
  category: 'society',
  topic: 'HAS SOCIAL MEDIA DONE MORE HARM THAN GOOD TO SOCIETY?',
  summary: 'Connection was the promise. Division, addiction, and anxiety have been the reality for millions — especially the young.',
  votes: 3102,
  forArgs: [{
    id: 1,
    author: 'RESEARCHER_5K',
    text: 'Teen depression, loneliness, and anxiety have risen sharply in direct correlation with smartphone and social media adoption. These platforms are engineered by psychologists to create dependency. The harm is not accidental — it is the business model.',
    votes: 119,
    userVoted: false
  }, {
    id: 2,
    author: 'OBSERVER_8D',
    text: 'Social media has replaced depth with performance. People no longer have opinions — they have positions designed to get reactions. Nuance, patience, and genuine conversation are being replaced by outrage and tribal loyalty. This is what it did to public discourse.',
    votes: 88,
    userVoted: false
  }],
  againstArgs: [{
    id: 3,
    author: 'VOICE_3R',
    text: 'Social media gave a microphone to people who had no access to power — activists in authoritarian states, marginalised communities, whistleblowers. The same platform that spreads misinformation also broke open stories that legacy media buried. Banning it solves nothing.',
    votes: 76,
    userVoted: false
  }]
}, {
  id: 4,
  category: 'economy',
  topic: 'IS THE GROWING GAP BETWEEN RICH AND POOR A THREAT TO SOCIAL STABILITY?',
  summary: 'When a small number of people hold the majority of wealth and power, what happens to the society around them?',
  votes: 2688,
  forArgs: [{
    id: 1,
    author: 'ECONOMIST_2W',
    text: 'History is consistent: extreme inequality ends either in reform or in rupture. When ordinary people cannot afford housing, education, or healthcare while a tiny class accumulates everything, the social contract breaks. We are watching that process unfold right now.',
    votes: 94,
    userVoted: false
  }, {
    id: 2,
    author: 'WORKER_7F',
    text: 'The real problem is not that some people are wealthy. It is that wealth now determines political outcomes. When laws are written by those who fund the politicians, the system stops serving everyone and starts serving a few. That is not a market — it is capture.',
    votes: 71,
    userVoted: false
  }],
  againstArgs: [{
    id: 3,
    author: 'GROWTH_4S',
    text: 'Economic growth has lifted billions out of poverty in the last 50 years, even as inequality within countries has risen. The absolute condition of the poor has improved significantly. Fixating on relative inequality risks dismantling the systems producing that growth.',
    votes: 53,
    userVoted: false
  }]
}, {
  id: 5,
  category: 'youth',
  topic: 'IS THE CURRENT GENERATION LESS RESILIENT THAN PREVIOUS ONES?',
  summary: 'Young people today face real pressures — but have the comforts of modern life also reduced their ability to handle difficulty?',
  votes: 1543,
  forArgs: [{
    id: 1,
    author: 'ELDER_9C',
    text: 'Previous generations faced hardship without safety nets and developed resilience through necessity. Today everything difficult can be avoided, delayed, or medicated. The result is adults who have never genuinely struggled and do not know how to when it comes.',
    votes: 68,
    userVoted: false
  }],
  againstArgs: [{
    id: 2,
    author: 'YOUTH_5J',
    text: 'Young people today face economic insecurity their parents did not — unaffordable housing, precarious employment, crushing student debt — while also navigating mental health pressures amplified by social media. Calling them less resilient ignores what they are actually facing.',
    votes: 81,
    userVoted: false
  }, {
    id: 3,
    author: 'DOCTOR_2L',
    text: 'What looks like fragility is often appropriate sensitivity to genuine stressors. Better mental health awareness means more people name their struggles rather than suppress them. That is progress, not weakness. Previous generations did not cope better — they just spoke about it less.',
    votes: 66,
    userVoted: false
  }]
}, {
  id: 6,
  category: 'politics',
  topic: 'SHOULD POLITICIANS BE HELD TO HIGHER ETHICAL STANDARDS THAN ORDINARY CITIZENS?',
  summary: 'Those who hold public power make decisions that affect millions. Does that responsibility demand more — or are they simply human like the rest of us?',
  votes: 1921,
  forArgs: [{
    id: 1,
    author: 'CIVIC_3T',
    text: 'A politician who lies, cheats, or abuses their position harms not just themselves but every person their decisions affect. Power without accountability is one of the oldest recipes for injustice. Higher standards are not optional — they are the entire point of public service.',
    votes: 93,
    userVoted: false
  }],
  againstArgs: [{
    id: 2,
    author: 'PRAGMATIST_6M',
    text: 'Holding politicians to impossible standards drives honest people away from public life and leaves the field to those willing to perform virtue without practising it. We should focus on structural accountability — good laws, strong institutions — not moral purity tests.',
    votes: 57,
    userVoted: false
  }]
}];
var SEED_CONFESSIONS = [{
  id: 1,
  text: "I quit my corporate job 6 months ago. Everyone said I was crazy. I've never been happier. The job wasn't the problem. The need for their approval was.",
  ts: Date.now() - 86400000 * 5,
  reactions: {
    Relatable: 23,
    'Wake up': 4,
    'Stay strong': 18,
    'I see you': 31
  },
  userReacted: null
}, {
  id: 2,
  text: "I don't want the life they planned for me. Mortgage. Kids. Retirement. The script was written before I was born and I'm just supposed to read it.",
  ts: Date.now() - 86400000 * 3,
  reactions: {
    Relatable: 67,
    'Wake up': 12,
    'Stay strong': 8,
    'I see you': 44
  },
  userReacted: null
}, {
  id: 3,
  text: "I check my phone before I even open my eyes in the morning. I'm not living my life. I'm documenting someone else's idea of my life.",
  ts: Date.now() - 86400000 * 2,
  reactions: {
    Relatable: 89,
    'Wake up': 34,
    'Stay strong': 5,
    'I see you': 21
  },
  userReacted: null
}, {
  id: 4,
  text: "I've been pretending to be okay for so long I can't remember what not-okay feels like. That might be more disturbing than the alternative.",
  ts: Date.now() - 3600000 * 8,
  reactions: {
    Relatable: 102,
    'Wake up': 7,
    'Stay strong': 56,
    'I see you': 78
  },
  userReacted: null
}, {
  id: 5,
  text: "I spent $400 on things I didn't need last month and I still feel empty. The problem isn't the budget. I know that.",
  ts: Date.now() - 3600000 * 12,
  reactions: {
    Relatable: 77,
    'Wake up': 22,
    'Stay strong': 9,
    'I see you': 33
  },
  userReacted: null
}, {
  id: 6,
  text: "My real opinions about my country, my job, my relationships, my family — I've never said them out loud to anyone. Not once. I live a parallel secret life inside my head.",
  ts: Date.now() - 3600000 * 6,
  reactions: {
    Relatable: 134,
    'Wake up': 5,
    'Stay strong': 28,
    'I see you': 91
  },
  userReacted: null
}, {
  id: 7,
  text: "I graduated with honors. Got the good job. Married the right person. Bought the house. I have everything they said would make me happy. I'm not happy.",
  ts: Date.now() - 86400000 * 1,
  reactions: {
    Relatable: 155,
    'Wake up': 41,
    'Stay strong': 19,
    'I see you': 112
  },
  userReacted: null
}, {
  id: 8,
  text: "The scariest moment of my week is Sunday night. Not because of Monday. Because in the silence I can hear myself, and I'm not sure I like what I hear.",
  ts: Date.now() - 3600000 * 2,
  reactions: {
    Relatable: 88,
    'Wake up': 16,
    'Stay strong': 37,
    'I see you': 60
  },
  userReacted: null
}];
var REACTIONS = ['Relatable', 'Wake up', 'Stay strong', 'I see you'];

// ==================== FIREBASE AUTH LAYER ====================
// Firebase is loaded via CDN scripts in index.html.
// These helpers wrap Firebase Auth so the rest of the app stays clean.

function getFirebase() {
  return window._firebase || null;
}
function getSession() {
  // Firebase manages its own session persistence — we just cache display info
  try {
    return JSON.parse(sessionStorage.getItem('fc_session') || 'null');
  } catch (_unused) {
    return null;
  }
}
function saveSession(user) {
  sessionStorage.setItem('fc_session', JSON.stringify(user));
}
function clearSession() {
  sessionStorage.removeItem('fc_session');
}

// Username validation (used before Firebase calls)
function validateUsername(uname) {
  if (!uname || uname.trim().length < 2) return 'Username must be at least 2 characters.';
  if (!/^[a-zA-Z0-9_]+$/.test(uname.trim())) return 'Username can only contain letters, numbers, and underscores.';
  return null;
}
function firebaseErrorMessage(code) {
  var map = {
    'auth/email-already-in-use': 'An account with this email already exists.',
    'auth/invalid-email': 'Please enter a valid email address.',
    'auth/weak-password': 'Password must be at least 6 characters.',
    'auth/user-not-found': 'No account found with this email address.',
    'auth/wrong-password': 'Incorrect password. Try again.',
    'auth/too-many-requests': 'Too many attempts. Please wait a moment and try again.',
    'auth/popup-closed-by-user': 'Google sign-in was cancelled.',
    'auth/network-request-failed': 'Network error. Check your connection.',
    'auth/user-disabled': 'This account has been disabled.',
    'auth/operation-not-allowed': 'This sign-in method is not enabled. Contact support.'
  };
  return map[code] || 'Something went wrong. Please try again.';
}

// ==================== UTILS ====================

function getRank(xp) {
  for (var i = RANKS.length - 1; i >= 0; i--) {
    if (xp >= RANKS[i].xpMin) return RANKS[i];
  }
  return RANKS[0];
}
function getNextRank(rank) {
  return RANKS.find(function (r) {
    return r.level === rank.level + 1;
  }) || null;
}
function getProgress(xp) {
  var rank = getRank(xp);
  if (rank.level === RANKS.length) return 100;
  return Math.round((xp - rank.xpMin) / (rank.xpMax - rank.xpMin) * 100);
}
function getStage(rank) {
  return STAGES.find(function (s) {
    return s.stage === rank.stage;
  }) || STAGES[0];
}
function timeAgo(ts) {
  var diff = Date.now() - ts;
  if (diff < 3600000) return "".concat(Math.floor(diff / 60000), "m ago");
  if (diff < 86400000) return "".concat(Math.floor(diff / 3600000), "h ago");
  return "".concat(Math.floor(diff / 86400000), "d ago");
}
function callTyler(_x) {
  return _callTyler.apply(this, arguments);
} // ==================== VISION API (photo + text) ====================
function _callTyler() {
  _callTyler = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13(prompt) {
    var _data$content, res, _err$error, err, data, _t14;
    return _regenerator().w(function (_context13) {
      while (1) switch (_context13.p = _context13.n) {
        case 0:
          _context13.p = 0;
          _context13.n = 1;
          return fetch("/.netlify/functions/claude", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              model: "claude-sonnet-4-20250514",
              max_tokens: 300,
              messages: [{
                role: "user",
                content: "You are Tyler Durden from Fight Club. Respond in his voice \u2014 raw, philosophical, confrontational, anti-consumerist, anti-establishment. Short to medium length. No fluff. No safe answers. Challenge the person. Sometimes poetic. Never preachy but always cutting. Here is the context:\n\n".concat(prompt)
              }]
            })
          });
        case 1:
          res = _context13.v;
          if (res.ok) {
            _context13.n = 3;
            break;
          }
          _context13.n = 2;
          return res.json().catch(function () {
            return {};
          });
        case 2:
          err = _context13.v;
          console.warn("Tyler API error:", res.status, (err === null || err === void 0 || (_err$error = err.error) === null || _err$error === void 0 ? void 0 : _err$error.message) || '');
          return _context13.a(2, "...");
        case 3:
          _context13.n = 4;
          return res.json();
        case 4:
          data = _context13.v;
          return _context13.a(2, ((_data$content = data.content) === null || _data$content === void 0 || (_data$content = _data$content[0]) === null || _data$content === void 0 ? void 0 : _data$content.text) || "...");
        case 5:
          _context13.p = 5;
          _t14 = _context13.v;
          console.warn("callTyler failed:", _t14.message);
          return _context13.a(2, "...");
      }
    }, _callee13, null, [[0, 5]]);
  }));
  return _callTyler.apply(this, arguments);
}
function callTylerWithPhoto(_x2, _x3, _x4) {
  return _callTylerWithPhoto.apply(this, arguments);
} // ==================== ENTRY GATE ====================
function _callTylerWithPhoto() {
  _callTylerWithPhoto = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14(prompt, base64Image, mimeType) {
    var _data$content2, res, data, _t15;
    return _regenerator().w(function (_context14) {
      while (1) switch (_context14.p = _context14.n) {
        case 0:
          _context14.p = 0;
          _context14.n = 1;
          return fetch("/.netlify/functions/claude", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              model: "claude-sonnet-4-20250514",
              max_tokens: 400,
              messages: [{
                role: "user",
                content: [{
                  type: "image",
                  source: {
                    type: "base64",
                    media_type: mimeType,
                    data: base64Image
                  }
                }, {
                  type: "text",
                  text: prompt
                }]
              }]
            })
          });
        case 1:
          res = _context14.v;
          if (res.ok) {
            _context14.n = 2;
            break;
          }
          return _context14.a(2, null);
        case 2:
          _context14.n = 3;
          return res.json();
        case 3:
          data = _context14.v;
          return _context14.a(2, ((_data$content2 = data.content) === null || _data$content2 === void 0 || (_data$content2 = _data$content2[0]) === null || _data$content2 === void 0 ? void 0 : _data$content2.text) || null);
        case 4:
          _context14.p = 4;
          _t15 = _context14.v;
          return _context14.a(2, null);
      }
    }, _callee14, null, [[0, 4]]);
  }));
  return _callTylerWithPhoto.apply(this, arguments);
}
function NoiseCanvas() {
  var ref = useRef(null);
  useEffect(function () {
    var canvas = ref.current;
    var ctx = canvas.getContext('2d');
    var id;
    var resize = function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    var _draw = function draw() {
      var w = canvas.width,
        h = canvas.height;
      var img = ctx.createImageData(w, h);
      for (var i = 0; i < img.data.length; i += 4) {
        var v = Math.random() * 80;
        img.data[i] = v * 0.3;
        img.data[i + 1] = v * 0.3;
        img.data[i + 2] = v * 0.3;
        img.data[i + 3] = Math.random() * 55;
      }
      ctx.putImageData(img, 0, 0);
      id = requestAnimationFrame(_draw);
    };
    _draw();
    return function () {
      cancelAnimationFrame(id);
      window.removeEventListener('resize', resize);
    };
  }, []);
  return /*#__PURE__*/React.createElement("canvas", {
    ref: ref,
    className: "noise-canvas"
  });
}

// ==================== AUTH SCREEN ====================
function AuthScreen(_ref2) {
  var onAuth = _ref2.onAuth,
    initialMode = _ref2.initialMode;
  var _useState = useState(initialMode || 'welcome'),
    _useState2 = _slicedToArray(_useState, 2),
    mode = _useState2[0],
    setMode = _useState2[1];
  var _useState3 = useState(''),
    _useState4 = _slicedToArray(_useState3, 2),
    username = _useState4[0],
    setUsername = _useState4[1];
  var _useState5 = useState(''),
    _useState6 = _slicedToArray(_useState5, 2),
    email = _useState6[0],
    setEmail = _useState6[1];
  var _useState7 = useState(''),
    _useState8 = _slicedToArray(_useState7, 2),
    password = _useState8[0],
    setPassword = _useState8[1];
  var _useState9 = useState(''),
    _useState0 = _slicedToArray(_useState9, 2),
    confirmPw = _useState0[0],
    setConfirmPw = _useState0[1];
  var _useState1 = useState(''),
    _useState10 = _slicedToArray(_useState1, 2),
    newPassword = _useState10[0],
    setNewPassword = _useState10[1];
  var _useState11 = useState(''),
    _useState12 = _slicedToArray(_useState11, 2),
    confirmNewPw = _useState12[0],
    setConfirmNewPw = _useState12[1];
  var _useState13 = useState(''),
    _useState14 = _slicedToArray(_useState13, 2),
    error = _useState14[0],
    setError = _useState14[1];
  var _useState15 = useState(''),
    _useState16 = _slicedToArray(_useState15, 2),
    success = _useState16[0],
    setSuccess = _useState16[1];
  var _useState17 = useState(false),
    _useState18 = _slicedToArray(_useState17, 2),
    loading = _useState18[0],
    setLoading = _useState18[1];
  var _useState19 = useState(false),
    _useState20 = _slicedToArray(_useState19, 2),
    showPw = _useState20[0],
    setShowPw = _useState20[1];
  var _useState21 = useState(''),
    _useState22 = _slicedToArray(_useState21, 2),
    resetEmail = _useState22[0],
    setResetEmail = _useState22[1];
  var reset = function reset() {
    setError('');
    setSuccess('');
    setLoading(false);
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPw('');
    setNewPassword('');
    setConfirmNewPw('');
  };
  var go = function go(m) {
    reset();
    setMode(m);
  };

  // ── Firebase helpers ──────────────────────────────────────────────────────
  var fb = function fb() {
    var f = getFirebase();
    if (!f) {
      setError('Firebase not initialised. Check your configuration.');
      return null;
    }
    return f;
  };
  var handleSignup = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var unameErr, f, cred, user, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            setError('');
            setLoading(true);
            unameErr = validateUsername(username);
            if (!unameErr) {
              _context.n = 1;
              break;
            }
            setError(unameErr);
            setLoading(false);
            return _context.a(2);
          case 1:
            if (!(!email.trim() || !email.includes('@') || !email.includes('.'))) {
              _context.n = 2;
              break;
            }
            setError('Please enter a valid email address.');
            setLoading(false);
            return _context.a(2);
          case 2:
            if (!(password.length < 6)) {
              _context.n = 3;
              break;
            }
            setError('Password must be at least 6 characters.');
            setLoading(false);
            return _context.a(2);
          case 3:
            if (!(password !== confirmPw)) {
              _context.n = 4;
              break;
            }
            setError('Passwords do not match.');
            setLoading(false);
            return _context.a(2);
          case 4:
            f = fb();
            if (f) {
              _context.n = 5;
              break;
            }
            return _context.a(2);
          case 5:
            _context.p = 5;
            _context.n = 6;
            return f.auth.createUserWithEmailAndPassword(email.trim(), password);
          case 6:
            cred = _context.v;
            _context.n = 7;
            return cred.user.updateProfile({
              displayName: username.trim()
            });
          case 7:
            _context.n = 8;
            return cred.user.sendEmailVerification();
          case 8:
            _context.n = 9;
            return f.db.collection('users').doc(cred.user.uid).set({
              username: username.trim(),
              email: email.trim().toLowerCase(),
              createdAt: new Date(),
              xp: 0
            });
          case 9:
            user = {
              uid: cred.user.uid,
              username: username.trim(),
              email: cred.user.email
            };
            saveSession(user);
            setSuccess('Account created! A verification email has been sent to ' + email + '. Please verify before signing in.');
            setLoading(false);
            setTimeout(function () {
              onAuth(user);
            }, 2500);
            _context.n = 11;
            break;
          case 10:
            _context.p = 10;
            _t = _context.v;
            setError(firebaseErrorMessage(_t.code));
            setLoading(false);
          case 11:
            return _context.a(2);
        }
      }, _callee, null, [[5, 10]]);
    }));
    return function handleSignup() {
      return _ref3.apply(this, arguments);
    };
  }();
  var handleLogin = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var f, cred, doc, uname, user, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            setError('');
            setLoading(true);
            if (email.trim()) {
              _context2.n = 1;
              break;
            }
            setError('Please enter your email.');
            setLoading(false);
            return _context2.a(2);
          case 1:
            if (password) {
              _context2.n = 2;
              break;
            }
            setError('Please enter your password.');
            setLoading(false);
            return _context2.a(2);
          case 2:
            f = fb();
            if (f) {
              _context2.n = 3;
              break;
            }
            return _context2.a(2);
          case 3:
            _context2.p = 3;
            _context2.n = 4;
            return f.auth.signInWithEmailAndPassword(email.trim(), password);
          case 4:
            cred = _context2.v;
            _context2.n = 5;
            return f.db.collection('users').doc(cred.user.uid).get();
          case 5:
            doc = _context2.v;
            uname = doc.exists ? doc.data().username : cred.user.displayName || cred.user.email.split('@')[0];
            user = {
              uid: cred.user.uid,
              username: uname,
              email: cred.user.email
            };
            saveSession(user);
            onAuth(user);
            _context2.n = 7;
            break;
          case 6:
            _context2.p = 6;
            _t2 = _context2.v;
            setError(firebaseErrorMessage(_t2.code));
            setLoading(false);
          case 7:
            return _context2.a(2);
        }
      }, _callee2, null, [[3, 6]]);
    }));
    return function handleLogin() {
      return _ref4.apply(this, arguments);
    };
  }();
  var handleGoogleSignIn = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var f, provider, cred, uid, docRef, doc, uname, user, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            setError('');
            setLoading(true);
            f = fb();
            if (f) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2);
          case 1:
            _context3.p = 1;
            provider = new firebase.auth.GoogleAuthProvider();
            _context3.n = 2;
            return f.auth.signInWithPopup(provider);
          case 2:
            cred = _context3.v;
            uid = cred.user.uid; // Check if user doc exists; create if first time
            docRef = f.db.collection('users').doc(uid);
            _context3.n = 3;
            return docRef.get();
          case 3:
            doc = _context3.v;
            uname = cred.user.displayName || cred.user.email.split('@')[0];
            if (doc.exists) {
              _context3.n = 5;
              break;
            }
            _context3.n = 4;
            return docRef.set({
              username: uname,
              email: cred.user.email.toLowerCase(),
              createdAt: new Date(),
              xp: 0
            });
          case 4:
            _context3.n = 6;
            break;
          case 5:
            uname = doc.data().username || uname;
          case 6:
            user = {
              uid: uid,
              username: uname,
              email: cred.user.email
            };
            saveSession(user);
            onAuth(user);
            _context3.n = 8;
            break;
          case 7:
            _context3.p = 7;
            _t3 = _context3.v;
            setError(firebaseErrorMessage(_t3.code));
            setLoading(false);
          case 8:
            return _context3.a(2);
        }
      }, _callee3, null, [[1, 7]]);
    }));
    return function handleGoogleSignIn() {
      return _ref5.apply(this, arguments);
    };
  }();
  var handleForgotPasswordLookup = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var f, _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            setError('');
            setSuccess('');
            setLoading(true);
            if (!(!email.trim() || !email.includes('@'))) {
              _context4.n = 1;
              break;
            }
            setError('Please enter a valid email address.');
            setLoading(false);
            return _context4.a(2);
          case 1:
            f = fb();
            if (f) {
              _context4.n = 2;
              break;
            }
            return _context4.a(2);
          case 2:
            _context4.p = 2;
            _context4.n = 3;
            return f.auth.sendPasswordResetEmail(email.trim());
          case 3:
            setSuccess('Password reset email sent to ' + email + '. Check your inbox (and spam folder).');
            setLoading(false);
            _context4.n = 5;
            break;
          case 4:
            _context4.p = 4;
            _t4 = _context4.v;
            setError(firebaseErrorMessage(_t4.code));
            setLoading(false);
          case 5:
            return _context4.a(2);
        }
      }, _callee4, null, [[2, 4]]);
    }));
    return function handleForgotPasswordLookup() {
      return _ref6.apply(this, arguments);
    };
  }();
  var handleForgotUsername = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var f, snap, uname, _t5;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            setError('');
            setSuccess('');
            setLoading(true);
            if (!(!email.trim() || !email.includes('@'))) {
              _context5.n = 1;
              break;
            }
            setError('Please enter your registered email address.');
            setLoading(false);
            return _context5.a(2);
          case 1:
            f = fb();
            if (f) {
              _context5.n = 2;
              break;
            }
            return _context5.a(2);
          case 2:
            _context5.p = 2;
            _context5.n = 3;
            return f.db.collection('users').where('email', '==', email.trim().toLowerCase()).limit(1).get();
          case 3:
            snap = _context5.v;
            if (!snap.empty) {
              _context5.n = 4;
              break;
            }
            setError('No account found with this email address.');
            setLoading(false);
            return _context5.a(2);
          case 4:
            uname = snap.docs[0].data().username;
            setSuccess('Your username is: ' + uname);
            setLoading(false);
            _context5.n = 6;
            break;
          case 5:
            _context5.p = 5;
            _t5 = _context5.v;
            setError('Could not look up account. Please try again.');
            setLoading(false);
          case 6:
            return _context5.a(2);
        }
      }, _callee5, null, [[2, 5]]);
    }));
    return function handleForgotUsername() {
      return _ref7.apply(this, arguments);
    };
  }();
  var handleKeyDown = function handleKeyDown(e) {
    if (e.key !== 'Enter') return;
    if (mode === 'login') handleLogin();else if (mode === 'signup') handleSignup();else if (mode === 'forgot_password') handleForgotPasswordLookup();else if (mode === 'forgot_username') handleForgotUsername();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "auth-gate"
  }, /*#__PURE__*/React.createElement(NoiseCanvas, null), /*#__PURE__*/React.createElement("div", {
    className: "scanline-overlay"
  }), /*#__PURE__*/React.createElement("div", {
    className: "auth-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "auth-logo"
  }, "FIGHT CLUB"), /*#__PURE__*/React.createElement("div", {
    className: "auth-tagline"
  }, "Build Character. Reject Mediocrity. Live with Purpose."), mode === 'welcome' && /*#__PURE__*/React.createElement("div", {
    className: "auth-welcome"
  }, /*#__PURE__*/React.createElement("p", {
    className: "auth-welcome-text"
  }, "Join thousands of people on a path of real self-improvement \u2014 discipline, community, and growth."), /*#__PURE__*/React.createElement("div", {
    className: "auth-btn-group"
  }, /*#__PURE__*/React.createElement("button", {
    className: "auth-btn-primary",
    onClick: function onClick() {
      return go('signup');
    }
  }, "Create Account"), /*#__PURE__*/React.createElement("button", {
    className: "auth-btn-google",
    onClick: handleGoogleSignIn,
    disabled: loading
  }, /*#__PURE__*/React.createElement("span", {
    className: "google-icon"
  }, "G"), " ", loading ? 'Signing in...' : 'Continue with Google'), /*#__PURE__*/React.createElement("div", {
    className: "auth-divider"
  }, /*#__PURE__*/React.createElement("span", null, "Already have an account?")), /*#__PURE__*/React.createElement("button", {
    className: "auth-btn-secondary",
    onClick: function onClick() {
      return go('login');
    }
  }, "Sign In")), error && /*#__PURE__*/React.createElement("div", {
    className: "auth-error",
    style: {
      marginTop: '0.8rem'
    }
  }, error)), mode === 'signup' && /*#__PURE__*/React.createElement("div", {
    className: "auth-form",
    onKeyDown: handleKeyDown
  }, /*#__PURE__*/React.createElement("div", {
    className: "auth-form-title"
  }, "CREATE YOUR ACCOUNT"), /*#__PURE__*/React.createElement("div", {
    className: "auth-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "auth-label"
  }, "USERNAME"), /*#__PURE__*/React.createElement("input", {
    className: "auth-input",
    value: username,
    onChange: function onChange(e) {
      return setUsername(e.target.value);
    },
    placeholder: "your_username",
    autoComplete: "off",
    autoFocus: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "auth-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "auth-label"
  }, "EMAIL ADDRESS"), /*#__PURE__*/React.createElement("input", {
    className: "auth-input",
    type: "email",
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    placeholder: "you@email.com",
    autoComplete: "off"
  })), /*#__PURE__*/React.createElement("div", {
    className: "auth-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "auth-label"
  }, "PASSWORD"), /*#__PURE__*/React.createElement("div", {
    className: "auth-pw-wrap"
  }, /*#__PURE__*/React.createElement("input", {
    className: "auth-input",
    type: showPw ? 'text' : 'password',
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    placeholder: "Min 6 characters"
  }), /*#__PURE__*/React.createElement("button", {
    className: "auth-pw-toggle",
    type: "button",
    onClick: function onClick() {
      return setShowPw(function (v) {
        return !v;
      });
    }
  }, showPw ? 'HIDE' : 'SHOW'))), /*#__PURE__*/React.createElement("div", {
    className: "auth-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "auth-label"
  }, "CONFIRM PASSWORD"), /*#__PURE__*/React.createElement("input", {
    className: "auth-input",
    type: showPw ? 'text' : 'password',
    value: confirmPw,
    onChange: function onChange(e) {
      return setConfirmPw(e.target.value);
    },
    placeholder: "Repeat password"
  })), error && /*#__PURE__*/React.createElement("div", {
    className: "auth-error"
  }, error), success && /*#__PURE__*/React.createElement("div", {
    className: "auth-success"
  }, success), /*#__PURE__*/React.createElement("button", {
    className: "auth-btn-primary",
    onClick: handleSignup,
    disabled: loading
  }, loading ? 'Creating account...' : 'CREATE ACCOUNT'), /*#__PURE__*/React.createElement("div", {
    className: "auth-nav-links"
  }, /*#__PURE__*/React.createElement("button", {
    className: "auth-link",
    onClick: function onClick() {
      return go('login');
    }
  }, "Already have an account? Sign in"), /*#__PURE__*/React.createElement("button", {
    className: "auth-back",
    onClick: function onClick() {
      return go('welcome');
    }
  }, "\u2190 Back"))), mode === 'login' && /*#__PURE__*/React.createElement("div", {
    className: "auth-form",
    onKeyDown: handleKeyDown
  }, /*#__PURE__*/React.createElement("div", {
    className: "auth-form-title"
  }, "SIGN IN"), /*#__PURE__*/React.createElement("div", {
    className: "auth-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "auth-label"
  }, "EMAIL ADDRESS"), /*#__PURE__*/React.createElement("input", {
    className: "auth-input",
    type: "email",
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    placeholder: "you@email.com",
    autoComplete: "off",
    autoFocus: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "auth-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "auth-label"
  }, "PASSWORD"), /*#__PURE__*/React.createElement("div", {
    className: "auth-pw-wrap"
  }, /*#__PURE__*/React.createElement("input", {
    className: "auth-input",
    type: showPw ? 'text' : 'password',
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    placeholder: "Your password"
  }), /*#__PURE__*/React.createElement("button", {
    className: "auth-pw-toggle",
    type: "button",
    onClick: function onClick() {
      return setShowPw(function (v) {
        return !v;
      });
    }
  }, showPw ? 'HIDE' : 'SHOW'))), error && /*#__PURE__*/React.createElement("div", {
    className: "auth-error"
  }, error), /*#__PURE__*/React.createElement("button", {
    className: "auth-btn-primary",
    onClick: handleLogin,
    disabled: loading
  }, loading ? 'Signing in...' : 'SIGN IN'), /*#__PURE__*/React.createElement("button", {
    className: "auth-btn-google",
    onClick: handleGoogleSignIn,
    disabled: loading,
    style: {
      marginTop: '0.5rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "google-icon"
  }, "G"), " Sign in with Google"), /*#__PURE__*/React.createElement("div", {
    className: "auth-nav-links"
  }, /*#__PURE__*/React.createElement("button", {
    className: "auth-link",
    onClick: function onClick() {
      return go('forgot_password');
    }
  }, "Forgot password?"), /*#__PURE__*/React.createElement("button", {
    className: "auth-link",
    onClick: function onClick() {
      return go('forgot_username');
    }
  }, "Forgot username?"), /*#__PURE__*/React.createElement("button", {
    className: "auth-link",
    onClick: function onClick() {
      return go('signup');
    }
  }, "Don't have an account? Sign up"), /*#__PURE__*/React.createElement("button", {
    className: "auth-back",
    onClick: function onClick() {
      return go('welcome');
    }
  }, "\u2190 Back"))), mode === 'forgot_password' && /*#__PURE__*/React.createElement("div", {
    className: "auth-form",
    onKeyDown: handleKeyDown
  }, /*#__PURE__*/React.createElement("div", {
    className: "auth-form-title"
  }, "FORGOT PASSWORD"), /*#__PURE__*/React.createElement("p", {
    className: "auth-google-note"
  }, "Enter your registered email. We will send a password reset link directly to your inbox."), /*#__PURE__*/React.createElement("div", {
    className: "auth-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "auth-label"
  }, "YOUR REGISTERED EMAIL"), /*#__PURE__*/React.createElement("input", {
    className: "auth-input",
    type: "email",
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    placeholder: "you@email.com",
    autoComplete: "off",
    autoFocus: true
  })), error && /*#__PURE__*/React.createElement("div", {
    className: "auth-error"
  }, error), success && /*#__PURE__*/React.createElement("div", {
    className: "auth-success"
  }, success), !success && /*#__PURE__*/React.createElement("button", {
    className: "auth-btn-primary",
    onClick: handleForgotPasswordLookup,
    disabled: loading
  }, loading ? 'Sending...' : 'SEND RESET EMAIL'), success && /*#__PURE__*/React.createElement("button", {
    className: "auth-btn-primary",
    onClick: function onClick() {
      return go('login');
    }
  }, "GO TO SIGN IN"), /*#__PURE__*/React.createElement("div", {
    className: "auth-nav-links"
  }, /*#__PURE__*/React.createElement("button", {
    className: "auth-link",
    onClick: function onClick() {
      return go('forgot_username');
    }
  }, "Forgot username instead?"), /*#__PURE__*/React.createElement("button", {
    className: "auth-link",
    onClick: function onClick() {
      return go('login');
    }
  }, "\u2190 Back to sign in"), /*#__PURE__*/React.createElement("button", {
    className: "auth-link",
    onClick: function onClick() {
      return go('signup');
    }
  }, "Create a new account"))), mode === 'forgot_username' && /*#__PURE__*/React.createElement("div", {
    className: "auth-form",
    onKeyDown: handleKeyDown
  }, /*#__PURE__*/React.createElement("div", {
    className: "auth-form-title"
  }, "FORGOT USERNAME"), /*#__PURE__*/React.createElement("p", {
    className: "auth-google-note"
  }, "Enter your registered email and we will show you the username linked to it."), /*#__PURE__*/React.createElement("div", {
    className: "auth-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "auth-label"
  }, "YOUR REGISTERED EMAIL"), /*#__PURE__*/React.createElement("input", {
    className: "auth-input",
    type: "email",
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    placeholder: "you@email.com",
    autoComplete: "off",
    autoFocus: true
  })), error && /*#__PURE__*/React.createElement("div", {
    className: "auth-error"
  }, error), success && /*#__PURE__*/React.createElement("div", {
    className: "auth-success"
  }, success), !success && /*#__PURE__*/React.createElement("button", {
    className: "auth-btn-primary",
    onClick: handleForgotUsername,
    disabled: loading
  }, loading ? 'Looking up...' : 'FIND MY USERNAME'), success && /*#__PURE__*/React.createElement("button", {
    className: "auth-btn-primary",
    onClick: function onClick() {
      return go('login');
    }
  }, "GO TO SIGN IN"), /*#__PURE__*/React.createElement("div", {
    className: "auth-nav-links"
  }, /*#__PURE__*/React.createElement("button", {
    className: "auth-link",
    onClick: function onClick() {
      return go('forgot_password');
    }
  }, "Forgot password instead?"), /*#__PURE__*/React.createElement("button", {
    className: "auth-link",
    onClick: function onClick() {
      return go('login');
    }
  }, "\u2190 Back to sign in"), /*#__PURE__*/React.createElement("button", {
    className: "auth-link",
    onClick: function onClick() {
      return go('signup');
    }
  }, "Create a new account")))));
}
function EntryGate(_ref8) {
  var onUnlock = _ref8.onUnlock,
    user = _ref8.user,
    onBackToAuth = _ref8.onBackToAuth;
  var BOOT_LINES = [{
    text: '> SYSTEM INITIALIZING...',
    delay: 0,
    type: 'dim'
  }, {
    text: '> LOADING ENCRYPTED CHANNEL...',
    delay: 700,
    type: 'dim'
  }, {
    text: '> AUTHENTICATING SESSION...',
    delay: 1400,
    type: 'dim'
  }, {
    text: '> CONNECTION ESTABLISHED',
    delay: 2100,
    type: ''
  }, {
    text: '',
    delay: 2600,
    type: 'dim'
  }, {
    text: 'THE FIRST RULE OF FIGHT CLUB IS:',
    delay: 3000,
    type: 'red'
  }, {
    text: 'YOU DO NOT TALK ABOUT FIGHT CLUB.',
    delay: 3800,
    type: 'white'
  }, {
    text: '',
    delay: 4400,
    type: 'dim'
  }, {
    text: 'THE SECOND RULE OF FIGHT CLUB IS:',
    delay: 4600,
    type: 'red'
  }, {
    text: 'YOU DO NOT TALK ABOUT FIGHT CLUB.',
    delay: 5400,
    type: 'white'
  }, {
    text: '',
    delay: 6000,
    type: 'dim'
  }, {
    text: '',
    delay: 6800,
    type: ''
  }];
  var _useState23 = useState([]),
    _useState24 = _slicedToArray(_useState23, 2),
    visibleLines = _useState24[0],
    setVisibleLines = _useState24[1];
  var _useState25 = useState('username'),
    _useState26 = _slicedToArray(_useState25, 2),
    step = _useState26[0],
    setStep = _useState26[1]; // username | password
  var _useState27 = useState(''),
    _useState28 = _slicedToArray(_useState27, 2),
    inputUsername = _useState28[0],
    setInputUsername = _useState28[1];
  var _useState29 = useState(''),
    _useState30 = _slicedToArray(_useState29, 2),
    inputPassword = _useState30[0],
    setInputPassword = _useState30[1];
  var _useState31 = useState(''),
    _useState32 = _slicedToArray(_useState31, 2),
    typedUsername = _useState32[0],
    setTypedUsername = _useState32[1];
  var _useState33 = useState(''),
    _useState34 = _slicedToArray(_useState33, 2),
    error = _useState34[0],
    setError = _useState34[1];
  var _useState35 = useState(false),
    _useState36 = _slicedToArray(_useState35, 2),
    showInput = _useState36[0],
    setShowInput = _useState36[1];
  var inputRef = useRef(null);
  useEffect(function () {
    var timers = BOOT_LINES.map(function (line, i) {
      return setTimeout(function () {
        setVisibleLines(function (v) {
          return [].concat(_toConsumableArray(v), [line]);
        });
        if (i === BOOT_LINES.length - 1) setTimeout(function () {
          return setShowInput(true);
        }, 500);
      }, line.delay);
    });
    return function () {
      return timers.forEach(clearTimeout);
    };
  }, []);
  useEffect(function () {
    if (showInput && inputRef.current) inputRef.current.focus();
  }, [showInput, step]);
  var handleUsernameSubmit = useCallback(function () {
    var val = inputUsername.trim();
    if (!val) return;
    // Verify username matches logged-in user
    if (val.toLowerCase() !== user.username.toLowerCase()) {
      setError('> USERNAME NOT FOUND. Try again.');
      setInputUsername('');
      setTimeout(function () {
        return setError('');
      }, 2500);
      return;
    }
    setTypedUsername(val);
    setInputUsername('');
    setStep('password');
    setError('');
  }, [inputUsername, user]);
  var handlePasswordSubmit = useCallback(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
    var val, f, _t6;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.p = _context6.n) {
        case 0:
          val = inputPassword.trim();
          if (val) {
            _context6.n = 1;
            break;
          }
          return _context6.a(2);
        case 1:
          // Re-authenticate with Firebase to confirm password at terminal
          f = window._firebase;
          if (f) {
            _context6.n = 2;
            break;
          }
          onUnlock();
          return _context6.a(2);
        case 2:
          _context6.p = 2;
          _context6.n = 3;
          return f.auth.signInWithEmailAndPassword(user.email, val);
        case 3:
          onUnlock();
          _context6.n = 5;
          break;
        case 4:
          _context6.p = 4;
          _t6 = _context6.v;
          setError('> INCORRECT PASSWORD. Try again.');
          setInputPassword('');
          setTimeout(function () {
            return setError('');
          }, 2500);
        case 5:
          return _context6.a(2);
      }
    }, _callee6, null, [[2, 4]]);
  })), [inputPassword, user, onUnlock]);
  var handleKeyDown = useCallback(function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      if (step === 'username') handleUsernameSubmit();else handlePasswordSubmit();
    }
  }, [step, handleUsernameSubmit, handlePasswordSubmit]);
  return /*#__PURE__*/React.createElement("div", {
    className: "entry-gate"
  }, /*#__PURE__*/React.createElement(NoiseCanvas, null), /*#__PURE__*/React.createElement("div", {
    className: "scanline-overlay"
  }), /*#__PURE__*/React.createElement("div", {
    className: "entry-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "terminal-block"
  }, visibleLines.map(function (line, i) {
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      className: "term-line ".concat(line.type)
    }, line.text);
  }), !showInput && /*#__PURE__*/React.createElement("span", {
    className: "term-cursor"
  }), showInput && /*#__PURE__*/React.createElement("div", null, step === 'password' && /*#__PURE__*/React.createElement("span", {
    className: "term-line",
    style: {
      color: 'var(--green-dim)'
    }
  }, "> USERNAME: ", typedUsername), /*#__PURE__*/React.createElement("div", {
    className: "entry-input-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "entry-input-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "entry-prompt"
  }, step === 'username' ? 'USERNAME:' : 'PASSWORD:'), step === 'username' ? /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    className: "entry-input",
    value: inputUsername,
    onChange: function onChange(e) {
      return setInputUsername(e.target.value);
    },
    onKeyDown: handleKeyDown,
    placeholder: "enter your username...",
    spellCheck: false,
    autoComplete: "off",
    autoCapitalize: "off"
  }) : /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    className: "entry-input",
    type: "password",
    value: inputPassword,
    onChange: function onChange(e) {
      return setInputPassword(e.target.value);
    },
    onKeyDown: handleKeyDown,
    placeholder: "enter your password...",
    autoComplete: "off"
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "entry-enter-btn",
    onClick: step === 'username' ? handleUsernameSubmit : handlePasswordSubmit
  }, "ENTER")), error && /*#__PURE__*/React.createElement("div", {
    className: "entry-error"
  }, error), !error && /*#__PURE__*/React.createElement("div", {
    className: "entry-hint"
  }, step === 'username' ? '> Identify yourself to gain access.' : '> Confirm your identity to proceed.'), step === 'username' && /*#__PURE__*/React.createElement("div", {
    className: "terminal-auth-links"
  }, /*#__PURE__*/React.createElement("button", {
    className: "terminal-link",
    onClick: function onClick() {
      return onBackToAuth('forgot_username');
    }
  }, "> Forgot your username?"), /*#__PURE__*/React.createElement("button", {
    className: "terminal-link",
    onClick: function onClick() {
      return onBackToAuth('forgot_password');
    }
  }, "> Forgot your password?"), /*#__PURE__*/React.createElement("button", {
    className: "terminal-link",
    onClick: function onClick() {
      return onBackToAuth('signup');
    }
  }, "> Sign up with a different account"))))));
}

// ==================== GLITCH TEXT ====================

function GlitchText(_ref0) {
  var children = _ref0.children,
    _ref0$className = _ref0.className,
    className = _ref0$className === void 0 ? '' : _ref0$className;
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      position: 'relative',
      display: 'inline-block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "data-text": children,
    className: "nav-logo",
    style: {
      position: 'relative'
    }
  }, children));
}

// ==================== CHARACTER SVGs ====================

function TylerSVG() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 120 180",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
    id: "tf-grain"
  }, /*#__PURE__*/React.createElement("feTurbulence", {
    type: "fractalNoise",
    baseFrequency: "0.9",
    numOctaves: "4",
    stitchTiles: "stitch"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    type: "saturate",
    values: "0"
  }), /*#__PURE__*/React.createElement("feBlend", {
    in: "SourceGraphic",
    mode: "multiply",
    result: "blend"
  }), /*#__PURE__*/React.createElement("feComposite", {
    in: "blend",
    in2: "SourceGraphic",
    operator: "in"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "tg1",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#C0392B"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#7A1515"
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M15 110 Q18 95 22 88 L35 82 L60 90 L85 82 L98 88 Q102 95 105 110 L108 170 L12 170 Z",
    fill: "url(#tg1)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M35 82 L60 90 L60 170 L12 170 L15 110 Q18 95 22 88 Z",
    fill: "#A32020"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M85 82 L60 90 L60 170 L108 170 L105 110 Q102 95 98 88 Z",
    fill: "#7A1515"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M35 82 L46 116 L60 108 L60 90 Z",
    fill: "#C0392B"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M85 82 L74 116 L60 108 L60 90 Z",
    fill: "#9B1C1C"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M46 90 L60 98 L74 90 L74 116 L60 122 L46 116 Z",
    fill: "#1A5C52"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M48 88 L60 96 L72 88 L70 82 L60 86 L50 82 Z",
    fill: "#E8D5B0"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "53",
    y: "70",
    width: "14",
    height: "14",
    rx: "3",
    fill: "#D4A574"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "60",
    cy: "57",
    rx: "23",
    ry: "25",
    fill: "#D4A574"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M39 60 Q41 77 60 82 Q79 77 81 60",
    fill: "#B8845A",
    opacity: "0.3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M42 65 Q60 74 78 65 Q78 72 60 76 Q42 72 42 65",
    fill: "#3D2B1F",
    opacity: "0.25"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M37 48 Q39 28 60 23 Q81 28 83 48",
    fill: "#2C1F14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M39 44 Q34 28 43 20 L46 38 Z",
    fill: "#1E1208"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M50 36 Q52 18 60 16 L62 34 Z",
    fill: "#1E1208"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M63 34 Q67 18 75 22 L71 38 Z",
    fill: "#1E1208"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M73 40 Q81 26 86 38 L80 44 Z",
    fill: "#1E1208"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M80 46 Q88 34 90 46 L84 50 Z",
    fill: "#1E1208"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M37 55 Q33 60 35 67 Q39 63 39 57 Z",
    fill: "#C4956A"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M83 55 Q87 60 85 67 Q81 63 81 57 Z",
    fill: "#C4956A"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "38",
    y: "50",
    width: "20",
    height: "10",
    rx: "3",
    fill: "#5A0F0F"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "62",
    y: "50",
    width: "20",
    height: "10",
    rx: "3",
    fill: "#5A0F0F"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "58",
    y1: "55",
    x2: "62",
    y2: "55",
    stroke: "#3A0808",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "38",
    y1: "55",
    x2: "34",
    y2: "52",
    stroke: "#3A0808",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "82",
    y1: "55",
    x2: "86",
    y2: "52",
    stroke: "#3A0808",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "39",
    y: "51",
    width: "18",
    height: "8",
    rx: "2",
    fill: "#D0291A",
    opacity: "0.65"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "63",
    y: "51",
    width: "18",
    height: "8",
    rx: "2",
    fill: "#D0291A",
    opacity: "0.65"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M40 52 Q44 51 48 53",
    stroke: "rgba(255,180,180,0.5)",
    strokeWidth: "0.8",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M64 52 Q68 51 72 53",
    stroke: "rgba(255,180,180,0.5)",
    strokeWidth: "0.8",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M57 62 Q60 68 63 62",
    stroke: "#B8845A",
    strokeWidth: "1.2",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M50 72 Q57 77 66 72",
    stroke: "#9C6B4A",
    strokeWidth: "1.5",
    fill: "none",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M62 72 Q67 75 70 71",
    stroke: "#9C6B4A",
    strokeWidth: "1.2",
    fill: "none",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "64",
    y: "71",
    width: "20",
    height: "3",
    rx: "1.2",
    fill: "#F0DDB0",
    transform: "rotate(-10,64,72)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "83",
    y: "68",
    width: "4",
    height: "3",
    rx: "0.8",
    fill: "#E85020",
    transform: "rotate(-10,83,69)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M88 64 Q90 59 88 54 Q92 51 90 46",
    stroke: "#b2e0db",
    strokeWidth: "0.9",
    fill: "none",
    opacity: "0.35",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M89 62 Q93 57 91 52",
    stroke: "#b2e0db",
    strokeWidth: "0.5",
    fill: "none",
    opacity: "0.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 110 Q7 132 9 162 L24 161 Q21 132 22 110 Z",
    fill: "#9B1C1C"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M105 110 Q113 132 111 162 L96 161 Q99 132 98 110 Z",
    fill: "#7A1515"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 118 Q28 114 33 100",
    stroke: "#6A1010",
    strokeWidth: "0.8",
    fill: "none",
    opacity: "0.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M100 118 Q92 114 87 100",
    stroke: "#6A1010",
    strokeWidth: "0.8",
    fill: "none",
    opacity: "0.6"
  }));
}
function NarratorSVG() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 120 180",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "ng1",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#4A5A65"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#2E3A42"
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M18 108 Q20 92 26 85 L38 79 L60 88 L82 79 L94 85 Q100 92 102 108 L106 170 L14 170 Z",
    fill: "url(#ng1)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M38 79 L60 88 L60 170 L14 170 L18 108 Q20 92 26 85 Z",
    fill: "#526070"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M82 79 L60 88 L60 170 L106 170 L102 108 Q100 92 94 85 Z",
    fill: "#3A4A55"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M38 79 L50 112 L60 105 L60 88 Z",
    fill: "#5A6A78"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M82 79 L70 112 L60 105 L60 88 Z",
    fill: "#3A4852"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "50",
    y: "82",
    width: "20",
    height: "26",
    fill: "#C2D0CE"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M57 82 L60 84 L63 82 L61.5 108 L60 112 L58.5 108 Z",
    fill: "#3A1818"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M58 89 L62 89",
    stroke: "#5A2A2A",
    strokeWidth: "0.8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M58 95 L62 95",
    stroke: "#5A2A2A",
    strokeWidth: "0.8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M58 101 L62 101",
    stroke: "#5A2A2A",
    strokeWidth: "0.8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M50 82 L57 82 L60 78 L52 75 Z",
    fill: "#C2D0CE"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M70 82 L63 82 L60 78 L68 75 Z",
    fill: "#B2C0BE"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "54",
    y: "68",
    width: "12",
    height: "12",
    rx: "2",
    fill: "#B5A090"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "60",
    cy: "54",
    rx: "21",
    ry: "23",
    fill: "#C2A888"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M41 58 Q43 74 60 78 Q77 74 79 58",
    fill: "#A89070",
    opacity: "0.3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M41 60 Q44 66 42 70",
    stroke: "#9A7A60",
    strokeWidth: "2",
    fill: "none",
    opacity: "0.35"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M79 60 Q76 66 78 70",
    stroke: "#9A7A60",
    strokeWidth: "2",
    fill: "none",
    opacity: "0.35"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M43 56 Q51 59 59 57",
    stroke: "#907060",
    strokeWidth: "1",
    fill: "none",
    opacity: "0.4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M61 57 Q69 59 77 56",
    stroke: "#907060",
    strokeWidth: "1",
    fill: "none",
    opacity: "0.4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M40 44 Q42 26 60 21 Q78 26 80 44",
    fill: "#2A1E14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M42 40 Q40 30 46 25 L45 39 Z",
    fill: "#1A1008"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M56 34 Q57 21 60 19 L62 33 Z",
    fill: "#1A1008",
    opacity: "0.8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M64 36 Q67 23 73 27 L70 37 Z",
    fill: "#1A1008",
    opacity: "0.7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M76 40 Q82 30 82 40 L78 44 Z",
    fill: "#1A1008",
    opacity: "0.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M39 52 Q35 57 37 65 Q41 61 41 55 Z",
    fill: "#B89878"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M81 52 Q85 57 83 65 Q79 61 79 55 Z",
    fill: "#B89878"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "50",
    cy: "52",
    rx: "10",
    ry: "6",
    fill: "#141E28"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "70",
    cy: "52",
    rx: "10",
    ry: "6",
    fill: "#141E28"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "60",
    y1: "52",
    x2: "60",
    y2: "52",
    stroke: "#0A1218",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M40 52 Q38 51 36 49",
    stroke: "#141E28",
    strokeWidth: "1.5",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M80 52 Q82 51 84 49",
    stroke: "#141E28",
    strokeWidth: "1.5",
    fill: "none"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "50",
    cy: "52",
    rx: "9",
    ry: "5",
    fill: "#1E3048",
    opacity: "0.7"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "70",
    cy: "52",
    rx: "9",
    ry: "5",
    fill: "#1E3048",
    opacity: "0.7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M43 50 Q47 49 51 51",
    stroke: "rgba(180,220,255,0.45)",
    strokeWidth: "0.7",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M63 50 Q67 49 71 51",
    stroke: "rgba(180,220,255,0.45)",
    strokeWidth: "0.7",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M57 60 Q60 65 63 60",
    stroke: "#9A8060",
    strokeWidth: "1.2",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M52 68 Q60 72 68 68",
    stroke: "#907858",
    strokeWidth: "1.2",
    fill: "none",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M27 94 L34 92 L33 100 L27 100 Z",
    fill: "#C2D0CE",
    opacity: "0.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 108 Q11 130 13 160 L27 158 Q25 130 26 108 Z",
    fill: "#4A5A65"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M102 108 Q109 130 107 160 L93 158 Q95 130 94 108 Z",
    fill: "#3A4852"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "11",
    y: "155",
    width: "2",
    height: "18",
    rx: "1",
    fill: "#8A8A8A",
    transform: "rotate(5,12,164)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "10",
    y: "165",
    width: "1.2",
    height: "6",
    rx: "0.6",
    fill: "#8A8A8A",
    transform: "rotate(5,10,168)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "13",
    y: "165",
    width: "1.2",
    height: "6",
    rx: "0.6",
    fill: "#8A8A8A",
    transform: "rotate(5,13,168)"
  }));
}

// Character guide panel - shown at top of sections
function CharacterGuide(_ref1) {
  var character = _ref1.character,
    quote = _ref1.quote,
    _ref1$align = _ref1.align,
    align = _ref1$align === void 0 ? 'left' : _ref1$align,
    _ref1$context = _ref1.context,
    context = _ref1$context === void 0 ? '' : _ref1$context;
  var _useState37 = useState(quote),
    _useState38 = _slicedToArray(_useState37, 2),
    aiQuote = _useState38[0],
    setAiQuote = _useState38[1];
  var _useState39 = useState(false),
    _useState40 = _slicedToArray(_useState39, 2),
    loading = _useState40[0],
    setLoading = _useState40[1];
  var _useState41 = useState(false),
    _useState42 = _slicedToArray(_useState41, 2),
    refreshed = _useState42[0],
    setRefreshed = _useState42[1];
  var getNewQuote = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
      var persona, msg, _t7;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            if (!loading) {
              _context7.n = 1;
              break;
            }
            return _context7.a(2);
          case 1:
            setLoading(true);
            _context7.p = 2;
            persona = character === 'tyler' ? 'Tyler Durden from Fight Club. Red leather jacket, sunglasses, cigarette. Charismatic, anarchic, anti-consumerist philosopher.' : 'The Narrator from Fight Club (also known as Jack). Grey suit, small oval sunglasses. Quietly despairing insomniac realizing the truth about himself.';
            _context7.n = 3;
            return callTyler("You are ".concat(persona, ". Give one short, powerful line (1-2 sentences max) to motivate someone who is about to work on ").concat(context, ". Stay completely in character. No quotation marks. Just the raw line."));
          case 3:
            msg = _context7.v;
            setAiQuote(msg);
            setRefreshed(true);
            _context7.n = 5;
            break;
          case 4:
            _context7.p = 4;
            _t7 = _context7.v;
          case 5:
            setLoading(false);
          case 6:
            return _context7.a(2);
        }
      }, _callee7, null, [[2, 4]]);
    }));
    return function getNewQuote() {
      return _ref10.apply(this, arguments);
    };
  }();
  var isTyler = character === 'tyler';
  return /*#__PURE__*/React.createElement("div", {
    className: "char-guide ".concat(isTyler ? 'char-tyler' : 'char-narrator', " align-").concat(align)
  }, /*#__PURE__*/React.createElement("div", {
    className: "char-avatar"
  }, isTyler ? /*#__PURE__*/React.createElement(TylerSVG, null) : /*#__PURE__*/React.createElement(NarratorSVG, null)), /*#__PURE__*/React.createElement("div", {
    className: "char-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "char-name-tag"
  }, /*#__PURE__*/React.createElement("span", {
    className: "char-dot",
    style: {
      background: isTyler ? 'var(--magenta)' : 'var(--red-bright)'
    }
  }), isTyler ? 'TYLER DURDEN' : 'THE NARRATOR'), /*#__PURE__*/React.createElement("div", {
    className: "char-bubble"
  }, loading ? /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.5,
      fontStyle: 'italic'
    }
  }, "...") : /*#__PURE__*/React.createElement("span", {
    className: "char-speech"
  }, aiQuote)), /*#__PURE__*/React.createElement("button", {
    className: "char-refresh-btn",
    onClick: getNewQuote,
    disabled: loading
  }, loading ? '...' : refreshed ? '↻ ANOTHER' : '↻ SPEAK')));
}

// ==================== MISSION BOARD ====================

function MissionBoard(_ref11) {
  var xp = _ref11.xp,
    setXp = _ref11.setXp;
  var _useState43 = useState({}),
    _useState44 = _slicedToArray(_useState43, 2),
    challengeState = _useState44[0],
    setChallengeState = _useState44[1];
  var _useState45 = useState('man'),
    _useState46 = _slicedToArray(_useState45, 2),
    genderFilter = _useState46[0],
    setGenderFilter = _useState46[1];
  var _useState47 = useState('ALL'),
    _useState48 = _slicedToArray(_useState47, 2),
    categoryFilter = _useState48[0],
    setCategoryFilter = _useState48[1];
  var _useState49 = useState({
      man: [],
      woman: []
    }),
    _useState50 = _slicedToArray(_useState49, 2),
    weeklySpecials = _useState50[0],
    setWeeklySpecials = _useState50[1];
  var _useState51 = useState(false),
    _useState52 = _slicedToArray(_useState51, 2),
    specialsLoading = _useState52[0],
    setSpecialsLoading = _useState52[1];
  var _useState53 = useState(''),
    _useState54 = _slicedToArray(_useState53, 2),
    countdown = _useState54[0],
    setCountdown = _useState54[1];
  var weekNum = getWeekNumber();
  var rank = getRank(xp);
  var nextRank = getNextRank(rank);
  var progress = getProgress(xp);
  var stage = getStage(rank);

  // Countdown timer
  useEffect(function () {
    var tick = function tick() {
      return setCountdown(formatCountdown(msUntilNextWeek()));
    };
    tick();
    var t = setInterval(tick, 1000);
    return function () {
      return clearInterval(t);
    };
  }, []);

  // Load AI weekly specials once per mount
  useEffect(function () {
    var cacheKey = "specials_week_".concat(weekNum);
    var cached = sessionStorage.getItem ? sessionStorage.getItem(cacheKey) : null;
    if (cached) {
      try {
        setWeeklySpecials(JSON.parse(cached));
        return;
      } catch (_unused3) {}
    }
    var generateSpecials = /*#__PURE__*/function () {
      var _ref12 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        var now, month, makePrompt, _yield$Promise$all, _yield$Promise$all2, manRaw, womanRaw, parse, result, _t8;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.p = _context8.n) {
            case 0:
              setSpecialsLoading(true);
              _context8.p = 1;
              now = new Date();
              month = now.toLocaleString('default', {
                month: 'long'
              });
              makePrompt = function makePrompt(gender) {
                return "You are generating weekly special missions for a personal growth app. Week number: ".concat(weekNum, ". Month: ").concat(month, ".\nGenerate exactly 2 missions for ").concat(gender === 'man' ? 'men building character, discipline, and healthy habits' : 'women building confidence, skills, and healthy daily habits', ".\n\nSTRICT RULES \u2014 every mission must follow these:\n- Physically safe: exercises must be at realistic limits \u2014 examples: 25 push-ups, 25 squats, a 1-hour morning walk, 15-minute stretch routine. No extreme workouts, no fasting, no cold water exposure, no physically risky activities.\n- Mentally safe: positive and encouraging tone only. No guilt, shame, or harsh language.\n- Realistic: completable in one week by an average healthy person.\n- Good for the individual, family, and community.\n- Specific: give clear, concrete steps \u2014 not vague advice.\n\nReturn ONLY valid JSON array, no markdown, no explanation:\n[\n  {\n    \"title\": \"SHORT CAPS TITLE (3-5 words)\",\n    \"desc\": \"Clear actionable description with specific numbers/steps. 2-3 sentences.\",\n    \"difficulty\": \"EASY\" or \"MODERATE\" or \"HARD\",\n    \"xp\": number between 35-75,\n    \"category\": \"short category name\",\n    \"mission\": \"One warm, motivating line under 15 words.\"\n  },\n  { second mission }\n]\nWeek ").concat(weekNum, " should feel different from week ").concat(weekNum - 1, ". Make missions feel timely and fresh.");
              };
              _context8.n = 2;
              return Promise.all([callTyler(makePrompt('man')), callTyler(makePrompt('woman'))]);
            case 2:
              _yield$Promise$all = _context8.v;
              _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
              manRaw = _yield$Promise$all2[0];
              womanRaw = _yield$Promise$all2[1];
              parse = function parse(raw, gender, startId) {
                try {
                  var clean = raw.replace(/```json|```/g, '').trim();
                  var arr = JSON.parse(clean);
                  return arr.slice(0, 2).map(function (m, i) {
                    return {
                      id: "special_".concat(weekNum, "_").concat(gender, "_").concat(i),
                      gender: gender,
                      title: m.title || 'WEEKLY SPECIAL',
                      desc: m.desc || '',
                      difficulty: m.difficulty || 'MODERATE',
                      xp: Number(m.xp) || 55,
                      category: m.category || 'WEEKLY',
                      mission: m.mission || 'This week. This mission. Show up.',
                      isSpecial: true,
                      isWeekly: true
                    };
                  });
                } catch (_unused4) {
                  return [];
                }
              };
              result = {
                man: parse(manRaw, 'man', 100),
                woman: parse(womanRaw, 'woman', 200)
              };
              setWeeklySpecials(result);
              if (sessionStorage.setItem) {
                try {
                  sessionStorage.setItem(cacheKey, JSON.stringify(result));
                } catch (_unused5) {}
              }
              _context8.n = 4;
              break;
            case 3:
              _context8.p = 3;
              _t8 = _context8.v;
            case 4:
              setSpecialsLoading(false);
            case 5:
              return _context8.a(2);
          }
        }, _callee8, null, [[1, 3]]);
      }));
      return function generateSpecials() {
        return _ref12.apply(this, arguments);
      };
    }();
    generateSpecials();
  }, [weekNum]);

  // Weekly rotated pool (8 from static + AI specials)
  var weeklyStatic = getWeeklyStaticMissions(genderFilter, weekNum);
  var specials = weeklySpecials[genderFilter] || [];
  var allThisWeek = [].concat(_toConsumableArray(specials), _toConsumableArray(weeklyStatic));
  var filtered = allThisWeek;
  var categories = ['ALL'].concat(_toConsumableArray(Array.from(new Set(filtered.map(function (c) {
    return c.category;
  })))));
  var visible = categoryFilter === 'ALL' ? filtered : filtered.filter(function (c) {
    return c.category === categoryFilter;
  });
  var getState = function getState(id) {
    return challengeState[id] || {
      status: 'idle',
      reflection: '',
      tylerMsg: '',
      loading: false
    };
  };
  var requestPhoto = function requestPhoto(id) {
    setChallengeState(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, id, _objectSpread(_objectSpread({}, getState(id)), {}, {
        status: 'awaiting_photo'
      })));
    });
  };
  var handlePhotoUpload = useCallback(/*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(ch, file) {
      var reader;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.n) {
          case 0:
            if (file) {
              _context0.n = 1;
              break;
            }
            return _context0.a(2);
          case 1:
            reader = new FileReader();
            reader.onload = /*#__PURE__*/function () {
              var _ref14 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(ev) {
                var dataUrl, base64, mimeType, photoPreview, allChallenges, nextCh, persona, prompt, msg, _t9, _t0;
                return _regenerator().w(function (_context9) {
                  while (1) switch (_context9.p = _context9.n) {
                    case 0:
                      dataUrl = ev.target.result;
                      base64 = dataUrl.split(',')[1];
                      mimeType = file.type || 'image/jpeg';
                      photoPreview = dataUrl;
                      setChallengeState(function (prev) {
                        return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, ch.id, _objectSpread(_objectSpread({}, prev[ch.id]), {}, {
                          status: 'completing',
                          loading: true,
                          photoPreview: photoPreview
                        })));
                      });
                      setXp(function (x) {
                        return x + ch.xp;
                      });
                      allChallenges = CHALLENGES.filter(function (c) {
                        return c.gender === ch.gender;
                      });
                      nextCh = allChallenges.find(function (c) {
                        return c.id !== ch.id;
                      });
                      persona = ch.gender === 'man' ? 'a man who completed a real character-building mission' : 'a woman who completed a mission reclaiming her authentic self';
                      prompt = "You are Tyler Durden from Fight Club \u2014 raw, philosophical, confrontational, anti-consumerist. \n\n".concat(persona, " just completed this mission: \"").concat(ch.title, "\" \u2014 \"").concat(ch.desc, "\"\n\nThey sent you a photo as proof. Look at it. React to what you actually see in it. Then:\n1. Appreciate their effort with brutal honesty and specific observation about the photo\n2. Suggest their next mission: \"").concat(nextCh ? nextCh.title + ' — ' + nextCh.desc : 'Keep pushing forward', "\"\n3. Give one sharp tip for the rest of today\n\nKeep the total response under 120 words. Raw. Direct. Three clear parts.");
                      _context9.p = 1;
                      _context9.n = 2;
                      return callTylerWithPhoto(prompt, base64, mimeType);
                    case 2:
                      _t9 = _context9.v;
                      if (_t9) {
                        _context9.n = 4;
                        break;
                      }
                      _context9.n = 3;
                      return callTyler("As Tyler Durden, react to ".concat(persona, " completing: \"").concat(ch.title, "\". They sent proof. Appreciate it, suggest next: \"").concat((nextCh === null || nextCh === void 0 ? void 0 : nextCh.title) || 'keep going', "\", give a day tip. 3 parts, under 120 words."));
                    case 3:
                      _t9 = _context9.v;
                    case 4:
                      msg = _t9;
                      setChallengeState(function (prev) {
                        return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, ch.id, _objectSpread(_objectSpread({}, prev[ch.id]), {}, {
                          status: 'done',
                          loading: false,
                          tylerMsg: msg
                        })));
                      });
                      _context9.n = 6;
                      break;
                    case 5:
                      _context9.p = 5;
                      _t0 = _context9.v;
                      setChallengeState(function (prev) {
                        return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, ch.id, _objectSpread(_objectSpread({}, prev[ch.id]), {}, {
                          status: 'done',
                          loading: false,
                          tylerMsg: "Proof received. You showed up. That puts you ahead of everyone who only planned to. Now — do it again tomorrow."
                        })));
                      });
                    case 6:
                      return _context9.a(2);
                  }
                }, _callee9, null, [[1, 5]]);
              }));
              return function (_x7) {
                return _ref14.apply(this, arguments);
              };
            }();
            reader.readAsDataURL(file);
          case 2:
            return _context0.a(2);
        }
      }, _callee0);
    }));
    return function (_x5, _x6) {
      return _ref13.apply(this, arguments);
    };
  }(), [setXp]);
  var completeChallenge = /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(ch) {
      var st, allChallenges, nextCh, persona, msg, _t1;
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.p = _context1.n) {
          case 0:
            st = getState(ch.id);
            if (!(st.status === 'done')) {
              _context1.n = 1;
              break;
            }
            return _context1.a(2);
          case 1:
            setChallengeState(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, ch.id, _objectSpread(_objectSpread({}, st), {}, {
                status: 'completing',
                loading: true
              })));
            });
            setXp(function (x) {
              return x + ch.xp;
            });
            allChallenges = CHALLENGES.filter(function (c) {
              return c.gender === ch.gender;
            });
            nextCh = allChallenges.find(function (c) {
              return c.id !== ch.id;
            });
            persona = ch.gender === 'man' ? 'a man who completed a real character-building mission' : 'a woman who completed a mission reclaiming her authentic self';
            _context1.p = 2;
            _context1.n = 3;
            return callTyler("As Tyler Durden, react to ".concat(persona, " completing: \"").concat(ch.title, "\" \u2014 ").concat(ch.desc, ". Then suggest next mission: \"").concat((nextCh === null || nextCh === void 0 ? void 0 : nextCh.title) || 'keep going', "\". Then give one sharp tip for the rest of the day. 3 parts, under 120 words. Raw."));
          case 3:
            msg = _context1.v;
            setChallengeState(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, ch.id, _objectSpread(_objectSpread({}, prev[ch.id]), {}, {
                status: 'done',
                loading: false,
                tylerMsg: msg
              })));
            });
            _context1.n = 5;
            break;
          case 4:
            _context1.p = 4;
            _t1 = _context1.v;
            setChallengeState(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, ch.id, _objectSpread(_objectSpread({}, prev[ch.id]), {}, {
                status: 'done',
                loading: false,
                tylerMsg: "You did it. That is one. The work does not stop here."
              })));
            });
          case 5:
            return _context1.a(2);
        }
      }, _callee1, null, [[2, 4]]);
    }));
    return function completeChallenge(_x8) {
      return _ref15.apply(this, arguments);
    };
  }();
  var setReflection = function setReflection(id, val) {
    setChallengeState(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, id, _objectSpread(_objectSpread({}, getState(id)), {}, {
        reflection: val
      })));
    });
  };
  var toggleAccept = function toggleAccept(id) {
    var st = getState(id);
    if (st.status === 'idle') {
      setChallengeState(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, id, _objectSpread(_objectSpread({}, st), {}, {
          status: 'accepted'
        })));
      });
    }
  };
  var isMan = genderFilter === 'man';
  return /*#__PURE__*/React.createElement("div", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-eyebrow"
  }, "Character Forge"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "MISSION", /*#__PURE__*/React.createElement("br", null), "BOARD")), /*#__PURE__*/React.createElement("div", {
    className: "week-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "week-info"
  }, /*#__PURE__*/React.createElement("span", {
    className: "week-badge"
  }, getWeekLabel()), /*#__PURE__*/React.createElement("span", {
    className: "week-title"
  }, "This Week's Missions"), /*#__PURE__*/React.createElement("span", {
    className: "week-count"
  }, allThisWeek.length, " active")), /*#__PURE__*/React.createElement("div", {
    className: "week-countdown"
  }, /*#__PURE__*/React.createElement("span", {
    className: "countdown-label"
  }, "New missions in"), /*#__PURE__*/React.createElement("span", {
    className: "countdown-timer"
  }, countdown)), specialsLoading && /*#__PURE__*/React.createElement("div", {
    className: "week-loading"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot-pulse"
  }, "."), /*#__PURE__*/React.createElement("span", {
    className: "dot-pulse"
  }, "."), /*#__PURE__*/React.createElement("span", {
    className: "dot-pulse"
  }, "."), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: '0.4rem',
      fontSize: '0.62rem',
      color: 'var(--text-dim)',
      letterSpacing: '0.2em'
    }
  }, "AI generating weekly specials"))), /*#__PURE__*/React.createElement("div", {
    className: "char-guides-row"
  }, /*#__PURE__*/React.createElement(CharacterGuide, {
    character: "tyler",
    quote: isMan ? "Most men today have never been tested. This is your test. Pass it." : "The machine needs you distracted, insecure, and spending. Choose to be ungovernable instead.",
    align: "left",
    context: isMan ? "real masculinity, discipline, and character building for men" : "authentic womanhood, cultural roots, and freedom from toxic modern pressures"
  }), /*#__PURE__*/React.createElement(CharacterGuide, {
    character: "narrator",
    quote: isMan ? "I used to think owning things made me a man. I was wrong about everything." : "I watched the women around me chase something that made them emptier each year. The ones who turned back found something real.",
    align: "right",
    context: isMan ? "what true manhood means versus what society sells" : "what authentic strength means beyond ideology and performance"
  })), /*#__PURE__*/React.createElement("div", {
    className: "gender-toggle-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gender-toggle"
  }, /*#__PURE__*/React.createElement("button", {
    className: "gender-btn man-btn ".concat(isMan ? 'active' : ''),
    onClick: function onClick() {
      setGenderFilter('man');
      setCategoryFilter('ALL');
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "gender-icon"
  }, "\u2694"), /*#__PURE__*/React.createElement("span", {
    className: "gender-label"
  }, "MAN PATH"), /*#__PURE__*/React.createElement("span", {
    className: "gender-sub"
  }, "Masculinity \xB7 Discipline \xB7 Character")), /*#__PURE__*/React.createElement("button", {
    className: "gender-btn woman-btn ".concat(!isMan ? 'active' : ''),
    onClick: function onClick() {
      setGenderFilter('woman');
      setCategoryFilter('ALL');
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "gender-icon"
  }, "\u25C8"), /*#__PURE__*/React.createElement("span", {
    className: "gender-label"
  }, "WOMAN PATH"), /*#__PURE__*/React.createElement("span", {
    className: "gender-sub"
  }, "Roots \xB7 Clarity \xB7 Authentic Strength"))), /*#__PURE__*/React.createElement("div", {
    className: "path-manifesto"
  }, isMan ? 'Real masculinity is not aggression. It is discipline, responsibility, protection, craftsmanship, and integrity. These missions build the man you were meant to be — not the consumer they designed you to become.' : 'Real strength for women has nothing to do with imitating men or performing victimhood. It is wisdom, self-respect, cultural continuity, and freedom from the systems that profit from your insecurity and disconnection.')), /*#__PURE__*/React.createElement("div", {
    className: "rank-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rank-panel-info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rank-stage-label",
    style: {
      color: stage.color
    }
  }, "Stage ", stage.stage, " \u2014 ", stage.name), /*#__PURE__*/React.createElement("div", {
    className: "rank-level-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rank-level-num",
    style: {
      color: rank.color
    }
  }, "Level ", rank.level), /*#__PURE__*/React.createElement("span", {
    className: "rank-separator"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    className: "rank-current-name",
    style: {
      color: rank.color
    }
  }, rank.name)), nextRank && /*#__PURE__*/React.createElement("div", {
    className: "rank-next-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rank-next-label"
  }, "Next Rank"), /*#__PURE__*/React.createElement("span", {
    className: "rank-next-name",
    style: {
      color: nextRank.color
    }
  }, nextRank.name), /*#__PURE__*/React.createElement("span", {
    className: "rank-next-xp"
  }, "(", rank.xpMax - xp, " XP away)")), !nextRank && /*#__PURE__*/React.createElement("div", {
    className: "rank-next-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rank-next-label",
    style: {
      color: '#FF8A65'
    }
  }, "\u2726 MAX LEVEL \u2014 ASCENDANT")), /*#__PURE__*/React.createElement("div", {
    className: "rank-progress-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rank-progress-fill",
    style: {
      width: "".concat(progress, "%"),
      background: "linear-gradient(90deg, ".concat(rank.color, "88, ").concat(rank.color, ")")
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "rank-xp-text"
  }, xp, " XP total \xA0\xB7\xA0 ", progress, "% to ", nextRank ? nextRank.name : 'max')), /*#__PURE__*/React.createElement("div", {
    className: "rank-stage-track"
  }, STAGES.map(function (s) {
    var stageRanks = RANKS.filter(function (r) {
      return r.stage === s.stage;
    });
    var completed = stageRanks.filter(function (r) {
      return xp >= r.xpMin;
    }).length;
    var isActive = s.stage === rank.stage;
    return /*#__PURE__*/React.createElement("div", {
      key: s.stage,
      className: "stage-chip ".concat(isActive ? 'active' : '', " ").concat(completed === 5 ? 'done' : ''),
      style: isActive ? {
        borderColor: s.color,
        color: s.color
      } : {}
    }, /*#__PURE__*/React.createElement("span", {
      className: "stage-num"
    }, s.stage), /*#__PURE__*/React.createElement("span", {
      className: "stage-name"
    }, s.name), /*#__PURE__*/React.createElement("div", {
      className: "stage-pips"
    }, stageRanks.map(function (r) {
      return /*#__PURE__*/React.createElement("span", {
        key: r.level,
        className: "stage-pip ".concat(xp >= r.xpMin ? 'lit' : ''),
        style: xp >= r.xpMin ? {
          background: r.color
        } : {}
      });
    })));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "cat-filter-row"
  }, categories.map(function (cat) {
    return /*#__PURE__*/React.createElement("button", {
      key: cat,
      className: "cat-filter-btn ".concat(categoryFilter === cat ? 'active' : ''),
      onClick: function onClick() {
        return setCategoryFilter(cat);
      }
    }, cat);
  })), /*#__PURE__*/React.createElement("div", {
    className: "challenges-grid"
  }, visible.map(function (ch, i) {
    var st = getState(ch.id);
    var done = st.status === 'done';
    return /*#__PURE__*/React.createElement("div", {
      key: ch.id,
      className: "challenge-card ".concat(done ? 'completed' : '', " ").concat(ch.gender, "-card ").concat(ch.isSpecial ? 'special-card' : ''),
      style: {
        animationDelay: "".concat(i * 0.06, "s")
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "ch-top"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ch-category"
    }, ch.category), /*#__PURE__*/React.createElement("div", {
      className: "ch-badges-right"
    }, ch.isSpecial && /*#__PURE__*/React.createElement("span", {
      className: "ch-special-badge"
    }, "\u2605 SPECIAL"), /*#__PURE__*/React.createElement("span", {
      className: "ch-xp"
    }, ch.xp, /*#__PURE__*/React.createElement("span", null, " xp")))), /*#__PURE__*/React.createElement("div", {
      className: "ch-title"
    }, done ? '✓ ' : '', ch.title), /*#__PURE__*/React.createElement("div", {
      className: "ch-mission"
    }, "\"", ch.mission, "\""), /*#__PURE__*/React.createElement("div", {
      className: "ch-desc"
    }, ch.desc), /*#__PURE__*/React.createElement("span", {
      className: "ch-difficulty ".concat(ch.difficulty)
    }, ch.difficulty), /*#__PURE__*/React.createElement("div", {
      className: "ch-actions"
    }, st.status === 'idle' && /*#__PURE__*/React.createElement("button", {
      className: "btn-primary",
      onClick: function onClick() {
        return toggleAccept(ch.id);
      }
    }, "ACCEPT MISSION"), st.status === 'accepted' && /*#__PURE__*/React.createElement("button", {
      className: "btn-green",
      onClick: function onClick() {
        return requestPhoto(ch.id);
      }
    }, "\u25B2 UPLOAD PROOF"), st.status === 'awaiting_photo' && /*#__PURE__*/React.createElement("div", {
      className: "photo-upload-zone"
    }, /*#__PURE__*/React.createElement("div", {
      className: "photo-upload-label"
    }, "\u25C8 UPLOAD YOUR PROOF PHOTO"), /*#__PURE__*/React.createElement("div", {
      className: "photo-upload-sub"
    }, "Tyler will see it and respond personally"), /*#__PURE__*/React.createElement("label", {
      className: "photo-upload-btn"
    }, "\uD83D\uDCF7 CHOOSE PHOTO", /*#__PURE__*/React.createElement("input", {
      type: "file",
      accept: "image/*",
      capture: "environment",
      style: {
        display: 'none'
      },
      onChange: function onChange(e) {
        return e.target.files[0] && handlePhotoUpload(ch, e.target.files[0]);
      }
    })), /*#__PURE__*/React.createElement("button", {
      className: "photo-skip-btn",
      onClick: function onClick() {
        return completeChallenge(ch);
      }
    }, "skip photo \u2192")), (st.status === 'done' || st.status === 'completing') && /*#__PURE__*/React.createElement("span", {
      className: "ch-completed-badge"
    }, "\u25B6 MISSION COMPLETE")), (st.status === 'accepted' || st.status === 'done') && /*#__PURE__*/React.createElement("textarea", {
      className: "reflection-area",
      placeholder: "Write your reflection \u2014 what shifted? what resisted? what became clear?",
      value: st.reflection,
      onChange: function onChange(e) {
        return setReflection(ch.id, e.target.value);
      }
    }), st.photoPreview && /*#__PURE__*/React.createElement("div", {
      className: "proof-photo-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "proof-photo-label"
    }, "\u25C8 YOUR PROOF"), /*#__PURE__*/React.createElement("img", {
      src: st.photoPreview,
      className: "proof-photo",
      alt: "mission proof"
    })), st.loading && /*#__PURE__*/React.createElement("div", {
      className: "tyler-response"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tyler-response-label"
    }, "TYLER DURDEN"), /*#__PURE__*/React.createElement("div", {
      className: "tyler-thinking"
    }, /*#__PURE__*/React.createElement("span", {
      className: "dot-pulse"
    }, "."), /*#__PURE__*/React.createElement("span", {
      className: "dot-pulse"
    }, "."), /*#__PURE__*/React.createElement("span", {
      className: "dot-pulse"
    }, "."))), st.tylerMsg && !st.loading && /*#__PURE__*/React.createElement("div", {
      className: "tyler-response"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tyler-response-label"
    }, "\u25B6 TYLER DURDEN"), /*#__PURE__*/React.createElement("div", {
      className: "tyler-response-text"
    }, st.tylerMsg)));
  })));
}

// ==================== DEBATE ARENA ====================

function DebateArena(_ref16) {
  var _DEBATE_CATEGORIES$fi;
  var xp = _ref16.xp,
    setXp = _ref16.setXp;
  var _useState55 = useState(DEBATE_TOPICS),
    _useState56 = _slicedToArray(_useState55, 2),
    debates = _useState56[0],
    setDebates = _useState56[1];
  var _useState57 = useState(null),
    _useState58 = _slicedToArray(_useState57, 2),
    active = _useState58[0],
    setActive = _useState58[1];
  var _useState59 = useState(''),
    _useState60 = _slicedToArray(_useState59, 2),
    myArg = _useState60[0],
    setMyArg = _useState60[1];
  var _useState61 = useState('for'),
    _useState62 = _slicedToArray(_useState61, 2),
    mySide = _useState62[0],
    setMySide = _useState62[1];
  var _useState63 = useState(false),
    _useState64 = _slicedToArray(_useState63, 2),
    posting = _useState64[0],
    setPosting = _useState64[1];
  var _useState65 = useState(false),
    _useState66 = _slicedToArray(_useState65, 2),
    tylerDebating = _useState66[0],
    setTylerDebating = _useState66[1];
  var _useState67 = useState(null),
    _useState68 = _slicedToArray(_useState67, 2),
    arenaPhoto = _useState68[0],
    setArenaPhoto = _useState68[1];
  // Create debate
  var _useState69 = useState(false),
    _useState70 = _slicedToArray(_useState69, 2),
    showCreate = _useState70[0],
    setShowCreate = _useState70[1];
  var _useState71 = useState(''),
    _useState72 = _slicedToArray(_useState71, 2),
    newTopic = _useState72[0],
    setNewTopic = _useState72[1];
  var _useState73 = useState(''),
    _useState74 = _slicedToArray(_useState73, 2),
    newSummary = _useState74[0],
    setNewSummary = _useState74[1];
  var _useState75 = useState('society'),
    _useState76 = _slicedToArray(_useState75, 2),
    newCategory = _useState76[0],
    setNewCategory = _useState76[1];
  var _useState77 = useState(false),
    _useState78 = _slicedToArray(_useState77, 2),
    creating = _useState78[0],
    setCreating = _useState78[1];
  var _useState79 = useState(''),
    _useState80 = _slicedToArray(_useState79, 2),
    createError = _useState80[0],
    setCreateError = _useState80[1];
  var _useState81 = useState('all'),
    _useState82 = _slicedToArray(_useState81, 2),
    categoryFilter = _useState82[0],
    setCategoryFilter = _useState82[1];
  // Pending debates waiting for acceptance
  var _useState83 = useState([]),
    _useState84 = _slicedToArray(_useState83, 2),
    pendingDebates = _useState84[0],
    setPendingDebates = _useState84[1];
  var openDebate = function openDebate(d) {
    return setActive(d.id === active ? null : d.id);
  };
  var activeDebate = debates.find(function (d) {
    return d.id === active;
  });
  var submitArg = /*#__PURE__*/function () {
    var _ref17 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10() {
      var argText, argPass, newArg, capturedPhoto, debate, basePrompt, reply, tylerArg, _t10, _t11, _t12;
      return _regenerator().w(function (_context10) {
        while (1) switch (_context10.p = _context10.n) {
          case 0:
            if (!(!myArg.trim() || posting)) {
              _context10.n = 1;
              break;
            }
            return _context10.a(2);
          case 1:
            if (!clientFlag(myArg)) {
              _context10.n = 2;
              break;
            }
            alert('Your argument contains inappropriate language. Please revise it.');
            return _context10.a(2);
          case 2:
            setPosting(true);
            argText = myArg.trim();
            _context10.n = 3;
            return moderateContent(argText);
          case 3:
            argPass = _context10.v;
            if (argPass) {
              _context10.n = 4;
              break;
            }
            alert('Your argument was flagged by moderation. Please keep arguments constructive and respectful.');
            setPosting(false);
            return _context10.a(2);
          case 4:
            newArg = {
              id: Date.now(),
              author: 'YOU_' + Math.random().toString(36).substr(2, 4).toUpperCase(),
              text: argText,
              votes: 0,
              userVoted: false
            };
            setDebates(function (prev) {
              return prev.map(function (d) {
                if (d.id !== active) return d;
                return _objectSpread(_objectSpread({}, d), {}, _defineProperty({}, mySide === 'for' ? 'forArgs' : 'againstArgs', [].concat(_toConsumableArray(d[mySide === 'for' ? 'forArgs' : 'againstArgs']), [newArg])));
              });
            });
            setMyArg('');
            setPosting(false);
            setXp(function (x) {
              return x + 20;
            });
            capturedPhoto = arenaPhoto;
            setArenaPhoto(null);
            // Tyler counter-argues
            setTylerDebating(true);
            _context10.p = 5;
            debate = debates.find(function (d) {
              return d.id === active;
            });
            basePrompt = "Debate topic: \"".concat(debate.topic, "\". The user argued on the ").concat(mySide === 'for' ? 'FOR' : 'AGAINST', " side and said: \"").concat(newArg.text, "\".").concat(capturedPhoto ? ' They also attached an evidence photo — look at it carefully and reference what you see.' : '', " As Tyler Durden, give a sharp counter-argument. One paragraph. Raw. Confrontational. No diplomacy. Challenge their logic or their motives.");
            if (!capturedPhoto) {
              _context10.n = 9;
              break;
            }
            _context10.n = 6;
            return callTylerWithPhoto(basePrompt, capturedPhoto.base64, capturedPhoto.mime);
          case 6:
            _t11 = _context10.v;
            if (_t11) {
              _context10.n = 8;
              break;
            }
            _context10.n = 7;
            return callTyler(basePrompt);
          case 7:
            _t11 = _context10.v;
          case 8:
            _t10 = _t11;
            _context10.n = 11;
            break;
          case 9:
            _context10.n = 10;
            return callTyler(basePrompt);
          case 10:
            _t10 = _context10.v;
          case 11:
            reply = _t10;
            tylerArg = {
              id: Date.now() + 1,
              author: 'TYLER_DURDEN',
              text: reply,
              votes: Math.floor(Math.random() * 20) + 5,
              userVoted: false
            };
            setDebates(function (prev) {
              return prev.map(function (d) {
                if (d.id !== active) return d;
                var side = mySide === 'for' ? 'againstArgs' : 'forArgs';
                return _objectSpread(_objectSpread({}, d), {}, _defineProperty({}, side, [].concat(_toConsumableArray(d[side]), [tylerArg])));
              });
            });
            _context10.n = 13;
            break;
          case 12:
            _context10.p = 12;
            _t12 = _context10.v;
          case 13:
            setTylerDebating(false);
          case 14:
            return _context10.a(2);
        }
      }, _callee10, null, [[5, 12]]);
    }));
    return function submitArg() {
      return _ref17.apply(this, arguments);
    };
  }();

  // AI moderation check
  var moderateContent = /*#__PURE__*/function () {
    var _ref18 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(text) {
      var res, _t13;
      return _regenerator().w(function (_context11) {
        while (1) switch (_context11.p = _context11.n) {
          case 0:
            _context11.p = 0;
            _context11.n = 1;
            return callTyler("You are a content moderator. Respond with ONLY \"PASS\" or \"FAIL\". \nCheck if this text contains: hate speech, slurs, explicit sexual content, threats, harassment, calls for violence, or targeted abuse.\nText: \"".concat(text.slice(0, 400), "\"\nReply PASS if acceptable for a general self-improvement debate forum. Reply FAIL if it violates these rules. Nothing else."));
          case 1:
            res = _context11.v;
            return _context11.a(2, res.trim().toUpperCase().startsWith('PASS'));
          case 2:
            _context11.p = 2;
            _t13 = _context11.v;
            return _context11.a(2, true);
        }
      }, _callee11, null, [[0, 2]]);
    }));
    return function moderateContent(_x9) {
      return _ref18.apply(this, arguments);
    };
  }();

  // Client-side instant flag
  var clientFlag = function clientFlag(text) {
    return containsTaboo(text);
  };
  var createDebate = /*#__PURE__*/function () {
    var _ref19 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12() {
      var pass, debate;
      return _regenerator().w(function (_context12) {
        while (1) switch (_context12.n) {
          case 0:
            if (!(!newTopic.trim() || !newSummary.trim())) {
              _context12.n = 1;
              break;
            }
            setCreateError('Please fill in both the topic and a brief description.');
            return _context12.a(2);
          case 1:
            if (!(newTopic.trim().length < 10)) {
              _context12.n = 2;
              break;
            }
            setCreateError('Topic must be at least 10 characters.');
            return _context12.a(2);
          case 2:
            if (!(clientFlag(newTopic) || clientFlag(newSummary))) {
              _context12.n = 3;
              break;
            }
            setCreateError('Your topic contains inappropriate language. Please revise it.');
            return _context12.a(2);
          case 3:
            setCreating(true);
            setCreateError('');
            _context12.n = 4;
            return moderateContent(newTopic + ' ' + newSummary);
          case 4:
            pass = _context12.v;
            if (pass) {
              _context12.n = 5;
              break;
            }
            setCreateError('This topic was flagged by our moderation system. Please keep debates on constructive real-world topics.');
            setCreating(false);
            return _context12.a(2);
          case 5:
            debate = {
              id: Date.now(),
              category: newCategory,
              topic: newTopic.trim().toUpperCase(),
              summary: newSummary.trim(),
              votes: 0,
              forArgs: [],
              againstArgs: [],
              isPending: true,
              createdAt: Date.now(),
              acceptedCount: 0
            };
            setPendingDebates(function (prev) {
              return [debate].concat(_toConsumableArray(prev));
            });
            setNewTopic('');
            setNewSummary('');
            setShowCreate(false);
            setCreating(false);
          case 6:
            return _context12.a(2);
        }
      }, _callee12);
    }));
    return function createDebate() {
      return _ref19.apply(this, arguments);
    };
  }();
  var acceptDebate = function acceptDebate(debateId) {
    setPendingDebates(function (prev) {
      return prev.map(function (d) {
        if (d.id !== debateId) return d;
        var updated = _objectSpread(_objectSpread({}, d), {}, {
          acceptedCount: d.acceptedCount + 1
        });
        if (updated.acceptedCount >= 2) {
          // Graduate to live debates
          setDebates(function (prev2) {
            return [_objectSpread(_objectSpread({}, updated), {}, {
              isPending: false
            })].concat(_toConsumableArray(prev2));
          });
          return null;
        }
        return updated;
      }).filter(Boolean);
    });
    setXp(function (x) {
      return x + 10;
    });
  };
  var checkAndRemoveFlagged = function checkAndRemoveFlagged(debateId, argId, side, text) {
    if (clientFlag(text)) {
      setTimeout(function () {
        setDebates(function (prev) {
          return prev.map(function (d) {
            if (d.id !== debateId) return d;
            var k = side === 'for' ? 'forArgs' : 'againstArgs';
            return _objectSpread(_objectSpread({}, d), {}, _defineProperty({}, k, d[k].filter(function (a) {
              return a.id !== argId;
            })));
          });
        });
      }, 5000); // removed after 5 seconds with a flash
      return true;
    }
    return false;
  };
  var voteArg = function voteArg(debateId, argId, side) {
    setDebates(function (prev) {
      return prev.map(function (d) {
        if (d.id !== debateId) return d;
        var k = side === 'for' ? 'forArgs' : 'againstArgs';
        return _objectSpread(_objectSpread({}, d), {}, _defineProperty({}, k, d[k].map(function (a) {
          return a.id === argId && !a.userVoted ? _objectSpread(_objectSpread({}, a), {}, {
            votes: a.votes + 1,
            userVoted: true
          }) : a;
        })));
      });
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-eyebrow"
  }, "Real World Conversations"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "DEBATE", /*#__PURE__*/React.createElement("br", null), "ARENA")), /*#__PURE__*/React.createElement("div", {
    className: "char-guides-row"
  }, /*#__PURE__*/React.createElement(CharacterGuide, {
    character: "tyler",
    quote: "The lower you fall, the higher you'll fly. Stop hedging. Pick a side and fight for it.",
    align: "left",
    context: "philosophical debate and confronting uncomfortable truths"
  }), /*#__PURE__*/React.createElement(CharacterGuide, {
    character: "narrator",
    quote: "I used to be so careful with what I said. Safe opinions. No conviction. That was the problem.",
    align: "right",
    context: "debates about society, consumerism and individuality"
  })), /*#__PURE__*/React.createElement("div", {
    className: "arena-intro"
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-bright)'
    }
  }, "This is where real conversations happen."), " Choose a topic \u2014 politics, corruption, society, education, economy. Pick your side. Make your argument. Tyler Durden will respond. \xA0Every argument earns 20 XP. Keep it honest, keep it constructive.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--magenta)',
      fontSize: '0.72rem',
      letterSpacing: '0.12em'
    }
  }, "\u25C8 COMMUNITY GUIDELINES: No hate speech, no slurs, no personal attacks, no adult content. Debates on real-world issues only. Violations are removed automatically.")), /*#__PURE__*/React.createElement("div", {
    className: "arena-cat-row"
  }, /*#__PURE__*/React.createElement("button", {
    className: "arena-cat-btn ".concat(categoryFilter === 'all' ? 'active' : ''),
    onClick: function onClick() {
      return setCategoryFilter('all');
    }
  }, "All Topics"), DEBATE_CATEGORIES.map(function (c) {
    return /*#__PURE__*/React.createElement("button", {
      key: c.id,
      className: "arena-cat-btn ".concat(categoryFilter === c.id ? 'active' : ''),
      onClick: function onClick() {
        return setCategoryFilter(c.id);
      }
    }, c.icon, " ", c.label);
  })), /*#__PURE__*/React.createElement("div", {
    className: "create-debate-wrap"
  }, /*#__PURE__*/React.createElement("button", {
    className: "create-debate-toggle",
    onClick: function onClick() {
      setShowCreate(function (v) {
        return !v;
      });
      setCreateError('');
    }
  }, showCreate ? '✕ Cancel' : '＋ Start a New Debate'), showCreate && /*#__PURE__*/React.createElement("div", {
    className: "create-debate-form"
  }, /*#__PURE__*/React.createElement("div", {
    className: "create-form-label"
  }, "\u25C8 CHOOSE A CATEGORY"), /*#__PURE__*/React.createElement("div", {
    className: "create-cat-row"
  }, DEBATE_CATEGORIES.map(function (c) {
    return /*#__PURE__*/React.createElement("button", {
      key: c.id,
      className: "create-cat-btn ".concat(newCategory === c.id ? 'active' : ''),
      onClick: function onClick() {
        return setNewCategory(c.id);
      }
    }, c.icon, " ", c.label);
  })), /*#__PURE__*/React.createElement("div", {
    className: "create-form-hint"
  }, (_DEBATE_CATEGORIES$fi = DEBATE_CATEGORIES.find(function (c) {
    return c.id === newCategory;
  })) === null || _DEBATE_CATEGORIES$fi === void 0 ? void 0 : _DEBATE_CATEGORIES$fi.hint), /*#__PURE__*/React.createElement("div", {
    className: "create-form-label",
    style: {
      marginTop: '1rem'
    }
  }, "\u25C8 YOUR DEBATE TOPIC (write as a question or bold statement)"), /*#__PURE__*/React.createElement("input", {
    className: "create-topic-input",
    value: newTopic,
    onChange: function onChange(e) {
      return setNewTopic(e.target.value);
    },
    placeholder: "e.g. IS CORRUPTION DESTROYING OUR CITIES?",
    maxLength: 120
  }), /*#__PURE__*/React.createElement("div", {
    className: "create-form-label",
    style: {
      marginTop: '0.8rem'
    }
  }, "\u25C8 BRIEF CONTEXT (1-2 sentences explaining the debate)"), /*#__PURE__*/React.createElement("textarea", {
    className: "create-summary-input",
    value: newSummary,
    onChange: function onChange(e) {
      return setNewSummary(e.target.value);
    },
    placeholder: "Give a short, neutral description of what the debate is about...",
    maxLength: 300,
    rows: 3
  }), createError && /*#__PURE__*/React.createElement("div", {
    className: "create-error"
  }, createError), /*#__PURE__*/React.createElement("div", {
    className: "create-guidelines"
  }, "Allowed: politics, corruption, society, education, economy, media, environment, youth topics. Not allowed: hate speech, slurs, adult content, personal attacks, misinformation."), /*#__PURE__*/React.createElement("button", {
    className: "btn-primary",
    onClick: createDebate,
    disabled: creating || !newTopic.trim() || !newSummary.trim()
  }, creating ? 'Checking content...' : '▶ SUBMIT DEBATE TOPIC'))), pendingDebates.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "pending-debates-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pending-label"
  }, "\u25C8 COMMUNITY PROPOSALS \u2014 Accept a topic to bring it to the Arena (", pendingDebates.length, ")"), pendingDebates.map(function (d) {
    var _DEBATE_CATEGORIES$fi2, _DEBATE_CATEGORIES$fi3;
    return /*#__PURE__*/React.createElement("div", {
      key: d.id,
      className: "pending-debate-row"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "pending-cat"
    }, (_DEBATE_CATEGORIES$fi2 = DEBATE_CATEGORIES.find(function (c) {
      return c.id === d.category;
    })) === null || _DEBATE_CATEGORIES$fi2 === void 0 ? void 0 : _DEBATE_CATEGORIES$fi2.icon, " ", (_DEBATE_CATEGORIES$fi3 = DEBATE_CATEGORIES.find(function (c) {
      return c.id === d.category;
    })) === null || _DEBATE_CATEGORIES$fi3 === void 0 ? void 0 : _DEBATE_CATEGORIES$fi3.label), /*#__PURE__*/React.createElement("div", {
      className: "pending-topic"
    }, d.topic), /*#__PURE__*/React.createElement("div", {
      className: "pending-summary"
    }, d.summary)), /*#__PURE__*/React.createElement("div", {
      className: "pending-actions"
    }, /*#__PURE__*/React.createElement("div", {
      className: "pending-accepts"
    }, d.acceptedCount, "/2 accepted"), /*#__PURE__*/React.createElement("button", {
      className: "btn-secondary",
      onClick: function onClick() {
        return acceptDebate(d.id);
      }
    }, "\u2713 Accept (+10 XP)")));
  })), /*#__PURE__*/React.createElement("div", {
    className: "debates-list"
  }, debates.filter(function (d) {
    return categoryFilter === 'all' || d.category === categoryFilter;
  }).map(function (d, i) {
    var _DEBATE_CATEGORIES$fi4, _DEBATE_CATEGORIES$fi5;
    return /*#__PURE__*/React.createElement("div", {
      key: d.id,
      style: {
        animationDelay: "".concat(i * 0.1, "s")
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "debate-row ".concat(d.id === active ? 'active-debate' : ''),
      onClick: function onClick() {
        return openDebate(d);
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "debate-cat-tag"
    }, (_DEBATE_CATEGORIES$fi4 = DEBATE_CATEGORIES.find(function (c) {
      return c.id === d.category;
    })) === null || _DEBATE_CATEGORIES$fi4 === void 0 ? void 0 : _DEBATE_CATEGORIES$fi4.icon, " ", ((_DEBATE_CATEGORIES$fi5 = DEBATE_CATEGORIES.find(function (c) {
      return c.id === d.category;
    })) === null || _DEBATE_CATEGORIES$fi5 === void 0 ? void 0 : _DEBATE_CATEGORIES$fi5.label) || d.category), /*#__PURE__*/React.createElement("div", {
      className: "debate-topic"
    }, d.topic), /*#__PURE__*/React.createElement("div", {
      className: "debate-meta"
    }, /*#__PURE__*/React.createElement("span", null, d.forArgs.length + d.againstArgs.length, " ARGUMENTS"), /*#__PURE__*/React.createElement("span", null, d.votes.toLocaleString(), " VIEWS"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--red)'
      }
    }, d.id === active ? '▲ CLOSE ARENA' : '▶ ENTER ARENA'))), /*#__PURE__*/React.createElement("div", {
      className: "debate-stats"
    }, /*#__PURE__*/React.createElement("div", {
      className: "vote-count"
    }, d.forArgs.length + d.againstArgs.length), /*#__PURE__*/React.createElement("div", {
      className: "vote-label"
    }, "ACTIVE FIGHTERS"))), d.id === active && /*#__PURE__*/React.createElement("div", {
      className: "debate-arena"
    }, /*#__PURE__*/React.createElement("div", {
      className: "arena-header"
    }, /*#__PURE__*/React.createElement("div", {
      className: "arena-topic"
    }, d.topic), /*#__PURE__*/React.createElement("button", {
      className: "arena-close",
      onClick: function onClick() {
        return setActive(null);
      }
    }, "\u2715 LEAVE ARENA")), /*#__PURE__*/React.createElement("div", {
      className: "arena-sides"
    }, /*#__PURE__*/React.createElement("div", {
      className: "arena-side for"
    }, /*#__PURE__*/React.createElement("div", {
      className: "side-label for-label"
    }, "\u25B6 FOR / AGREE"), d.forArgs.map(function (arg) {
      return /*#__PURE__*/React.createElement("div", {
        key: arg.id,
        className: "argument-item"
      }, /*#__PURE__*/React.createElement("div", {
        className: "arg-author ".concat(arg.author === 'TYLER_DURDEN' ? 'tyler' : '')
      }, arg.author === 'TYLER_DURDEN' ? '⚡ TYLER DURDEN' : "\u25C8 ".concat(arg.author)), /*#__PURE__*/React.createElement("div", {
        className: "arg-text"
      }, arg.text), /*#__PURE__*/React.createElement("div", {
        className: "arg-votes"
      }, /*#__PURE__*/React.createElement("button", {
        className: "vote-btn ".concat(arg.userVoted ? 'voted' : ''),
        onClick: function onClick() {
          return voteArg(d.id, arg.id, 'for');
        }
      }, "\u25B2 ", arg.votes)));
    }), tylerDebating && mySide !== 'for' && /*#__PURE__*/React.createElement("div", {
      className: "argument-item"
    }, /*#__PURE__*/React.createElement("div", {
      className: "arg-author tyler"
    }, "\u26A1 TYLER DURDEN"), /*#__PURE__*/React.createElement("div", {
      className: "tyler-thinking"
    }, /*#__PURE__*/React.createElement("span", {
      className: "dot-pulse"
    }, "."), /*#__PURE__*/React.createElement("span", {
      className: "dot-pulse"
    }, "."), /*#__PURE__*/React.createElement("span", {
      className: "dot-pulse"
    }, ".")))), /*#__PURE__*/React.createElement("div", {
      className: "side-divider"
    }, /*#__PURE__*/React.createElement("div", {
      className: "vs-text"
    }, "VS")), /*#__PURE__*/React.createElement("div", {
      className: "arena-side against"
    }, /*#__PURE__*/React.createElement("div", {
      className: "side-label against-label"
    }, "\u25B6 AGAINST / OPPOSE"), d.againstArgs.map(function (arg) {
      return /*#__PURE__*/React.createElement("div", {
        key: arg.id,
        className: "argument-item"
      }, /*#__PURE__*/React.createElement("div", {
        className: "arg-author ".concat(arg.author === 'TYLER_DURDEN' ? 'tyler' : '')
      }, arg.author === 'TYLER_DURDEN' ? '⚡ TYLER DURDEN' : "\u25C8 ".concat(arg.author)), /*#__PURE__*/React.createElement("div", {
        className: "arg-text"
      }, arg.text), /*#__PURE__*/React.createElement("div", {
        className: "arg-votes"
      }, /*#__PURE__*/React.createElement("button", {
        className: "vote-btn ".concat(arg.userVoted ? 'voted' : ''),
        onClick: function onClick() {
          return voteArg(d.id, arg.id, 'against');
        }
      }, "\u25B2 ", arg.votes)));
    }), tylerDebating && mySide !== 'against' && /*#__PURE__*/React.createElement("div", {
      className: "argument-item"
    }, /*#__PURE__*/React.createElement("div", {
      className: "arg-author tyler"
    }, "\u26A1 TYLER DURDEN"), /*#__PURE__*/React.createElement("div", {
      className: "tyler-thinking"
    }, /*#__PURE__*/React.createElement("span", {
      className: "dot-pulse"
    }, "."), /*#__PURE__*/React.createElement("span", {
      className: "dot-pulse"
    }, "."), /*#__PURE__*/React.createElement("span", {
      className: "dot-pulse"
    }, "."))))), /*#__PURE__*/React.createElement("div", {
      className: "arena-post"
    }, /*#__PURE__*/React.createElement("div", {
      className: "post-label"
    }, "\u25C8 POST YOUR ARGUMENT (+20 XP)"), /*#__PURE__*/React.createElement("div", {
      className: "post-side-select"
    }, /*#__PURE__*/React.createElement("button", {
      className: "side-btn for-btn ".concat(mySide === 'for' ? 'selected' : ''),
      onClick: function onClick() {
        return setMySide('for');
      }
    }, "FOR / AGREE"), /*#__PURE__*/React.createElement("button", {
      className: "side-btn against-btn ".concat(mySide === 'against' ? 'selected' : ''),
      onClick: function onClick() {
        return setMySide('against');
      }
    }, "AGAINST / OPPOSE")), /*#__PURE__*/React.createElement("textarea", {
      className: "post-textarea",
      placeholder: "State your argument. Be specific. Be brutal. Be honest. Tyler Durden will respond...",
      value: myArg,
      onChange: function onChange(e) {
        return setMyArg(e.target.value);
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "arena-attach-row"
    }, /*#__PURE__*/React.createElement("label", {
      className: "arena-attach-btn"
    }, "\uD83D\uDCCE ", arenaPhoto ? '✓ Photo attached' : 'Attach evidence photo', /*#__PURE__*/React.createElement("input", {
      type: "file",
      accept: "image/*",
      style: {
        display: 'none'
      },
      onChange: function onChange(e) {
        var f = e.target.files[0];
        if (!f) return;
        var r = new FileReader();
        r.onload = function (ev) {
          return setArenaPhoto({
            base64: ev.target.result.split(',')[1],
            mime: f.type,
            preview: ev.target.result
          });
        };
        r.readAsDataURL(f);
      }
    })), arenaPhoto && /*#__PURE__*/React.createElement("button", {
      className: "arena-attach-clear",
      onClick: function onClick() {
        return setArenaPhoto(null);
      }
    }, "\u2715")), arenaPhoto && /*#__PURE__*/React.createElement("img", {
      src: arenaPhoto.preview,
      className: "arena-photo-preview",
      alt: "evidence"
    }), /*#__PURE__*/React.createElement("button", {
      className: "btn-primary",
      onClick: submitArg,
      disabled: posting || tylerDebating || !myArg.trim()
    }, posting ? 'POSTING...' : tylerDebating ? 'TYLER IS RESPONDING...' : 'ENTER THE ARENA'))));
  })));
}

// ==================== CONFESSION WALL ====================

function ConfessionWall() {
  var _useState85 = useState(SEED_CONFESSIONS),
    _useState86 = _slicedToArray(_useState85, 2),
    confessions = _useState86[0],
    setConfessions = _useState86[1];
  var _useState87 = useState(''),
    _useState88 = _slicedToArray(_useState87, 2),
    text = _useState88[0],
    setText = _useState88[1];
  var _useState89 = useState('trending'),
    _useState90 = _slicedToArray(_useState89, 2),
    view = _useState90[0],
    setView = _useState90[1];
  var _useState91 = useState(null),
    _useState92 = _slicedToArray(_useState91, 2),
    glitchId = _useState92[0],
    setGlitchId = _useState92[1];
  useEffect(function () {
    var t = setInterval(function () {
      var ids = confessions.map(function (c) {
        return c.id;
      });
      setGlitchId(ids[Math.floor(Math.random() * ids.length)]);
      setTimeout(function () {
        return setGlitchId(null);
      }, 400);
    }, 4000);
    return function () {
      return clearInterval(t);
    };
  }, [confessions]);
  var submit = function submit(e) {
    e.preventDefault();
    if (!text.trim()) return;
    var newConf = {
      id: Date.now(),
      text: text.trim(),
      ts: Date.now(),
      reactions: {
        Relatable: 0,
        'Wake up': 0,
        'Stay strong': 0,
        'I see you': 0
      },
      userReacted: null
    };
    setConfessions(function (prev) {
      return [newConf].concat(_toConsumableArray(prev));
    });
    setText('');
  };
  var react = function react(confId, reaction) {
    setConfessions(function (prev) {
      return prev.map(function (c) {
        if (c.id !== confId || c.userReacted) return c;
        return _objectSpread(_objectSpread({}, c), {}, {
          reactions: _objectSpread(_objectSpread({}, c.reactions), {}, _defineProperty({}, reaction, (c.reactions[reaction] || 0) + 1)),
          userReacted: reaction
        });
      });
    });
  };
  var totalReactions = function totalReactions(c) {
    return Object.values(c.reactions).reduce(function (a, b) {
      return a + b;
    }, 0);
  };
  var sorted = view === 'trending' ? _toConsumableArray(confessions).sort(function (a, b) {
    return totalReactions(b) - totalReactions(a);
  }) : _toConsumableArray(confessions).sort(function (a, b) {
    return b.ts - a.ts;
  });
  var top3 = sorted.slice(0, 3).map(function (c) {
    return c.id;
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-eyebrow"
  }, "Anonymous Truth"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "CONFESSION", /*#__PURE__*/React.createElement("br", null), "WALL")), /*#__PURE__*/React.createElement("div", {
    className: "char-guides-row compact"
  }, /*#__PURE__*/React.createElement(CharacterGuide, {
    character: "narrator",
    quote: "I wanted to say everything I had never been allowed to say. This is that place.",
    align: "left",
    context: "anonymous confessions and honest thoughts about society"
  }), /*#__PURE__*/React.createElement(CharacterGuide, {
    character: "tyler",
    quote: "Your silence is consent. Every truth you swallowed made you smaller.",
    align: "right",
    context: "breaking silence and speaking uncomfortable truths"
  })), /*#__PURE__*/React.createElement("div", {
    className: "confess-form"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("label", {
    className: "confess-label"
  }, "\u25C8 DROP YOUR TRUTH \u2014 NO IDENTITY REQUIRED"), /*#__PURE__*/React.createElement("textarea", {
    className: "confess-textarea",
    placeholder: "What do you actually think? What keeps you up? What have you never said out loud? Say it here. No one knows who you are.",
    value: text,
    onChange: function onChange(e) {
      return setText(e.target.value);
    },
    maxLength: 600
  }), /*#__PURE__*/React.createElement("div", {
    className: "confess-note"
  }, "\u25C8 Anonymous \xA0\xB7\xA0 No account \xA0\xB7\xA0 No tracking \xA0\xB7\xA0 ", text.length, "/600 characters"), /*#__PURE__*/React.createElement("button", {
    className: "btn-primary",
    type: "submit",
    disabled: !text.trim()
  }, "POST CONFESSION"))), /*#__PURE__*/React.createElement("div", {
    className: "wall-controls"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.65rem',
      color: 'var(--text-dim)',
      letterSpacing: '0.3em',
      textTransform: 'uppercase',
      marginRight: '0.5rem'
    }
  }, "VIEW:"), /*#__PURE__*/React.createElement("button", {
    className: "wall-toggle-btn ".concat(view === 'trending' ? 'active' : ''),
    onClick: function onClick() {
      return setView('trending');
    }
  }, "TRENDING"), /*#__PURE__*/React.createElement("button", {
    className: "wall-toggle-btn ".concat(view === 'recent' ? 'active' : ''),
    onClick: function onClick() {
      return setView('recent');
    }
  }, "RECENT"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: '0.65rem',
      color: 'var(--text-dim)',
      letterSpacing: '0.2em'
    }
  }, confessions.length, " CONFESSIONS")), /*#__PURE__*/React.createElement("div", {
    className: "confessions-grid"
  }, sorted.map(function (c, i) {
    var trending = top3.includes(c.id);
    var isGlitch = glitchId === c.id;
    return /*#__PURE__*/React.createElement("div", {
      key: c.id,
      className: "confession-card ".concat(trending ? 'trending' : '', " ").concat(isGlitch ? 'glitch-card' : ''),
      style: {
        animationDelay: "".concat(i * 0.05, "s")
      }
    }, trending && /*#__PURE__*/React.createElement("div", {
      className: "conf-trending-badge"
    }, "TRENDING"), /*#__PURE__*/React.createElement("div", {
      className: "conf-text"
    }, c.text), /*#__PURE__*/React.createElement("div", {
      className: "conf-meta"
    }, timeAgo(c.ts), " \xA0\xB7\xA0 ", totalReactions(c), " reactions"), /*#__PURE__*/React.createElement("div", {
      className: "conf-reactions"
    }, REACTIONS.map(function (r) {
      return /*#__PURE__*/React.createElement("button", {
        key: r,
        className: "react-btn ".concat(c.userReacted === r ? 'reacted' : ''),
        onClick: function onClick() {
          return react(c.id, r);
        },
        disabled: !!c.userReacted
      }, r, " ", c.reactions[r] > 0 && /*#__PURE__*/React.createElement("span", {
        className: "react-count"
      }, c.reactions[r]));
    })));
  })));
}

// ==================== MAIN APP ====================

function MainApp(_ref20) {
  var user = _ref20.user,
    onLogout = _ref20.onLogout;
  var _useState93 = useState(0),
    _useState94 = _slicedToArray(_useState93, 2),
    xp = _useState94[0],
    setXp = _useState94[1];
  var _useState95 = useState('missions'),
    _useState96 = _slicedToArray(_useState95, 2),
    tab = _useState96[0],
    setTab = _useState96[1];
  var _useState97 = useState(false),
    _useState98 = _slicedToArray(_useState97, 2),
    showUserMenu = _useState98[0],
    setShowUserMenu = _useState98[1];
  var navRef = useRef(null);
  var userBtnRef = useRef(null);

  // Close menu when clicking outside
  useEffect(function () {
    if (!showUserMenu) return;
    var handler = function handler(e) {
      if (userBtnRef.current && !userBtnRef.current.contains(e.target)) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return function () {
      return document.removeEventListener('mousedown', handler);
    };
  }, [showUserMenu]);
  var rank = getRank(xp);
  var nextRank = getNextRank(rank);
  var progress = getProgress(xp);
  return /*#__PURE__*/React.createElement("div", {
    className: "app-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "scanlines-fixed"
  }), /*#__PURE__*/React.createElement("nav", {
    className: "main-nav",
    ref: navRef
  }, /*#__PURE__*/React.createElement("span", {
    className: "nav-logo",
    "data-text": "FIGHT CLUB"
  }, "FIGHT CLUB"), /*#__PURE__*/React.createElement("div", {
    className: "nav-tabs"
  }, [['missions', 'MISSIONS', 'MISS'], ['arena', 'ARENA', 'AREN'], ['wall', 'CONFESSIONS', 'CONF']].map(function (_ref21) {
    var _ref22 = _slicedToArray(_ref21, 3),
      key = _ref22[0],
      label = _ref22[1],
      short = _ref22[2];
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      className: "nav-tab ".concat(tab === key ? 'active' : ''),
      onClick: function onClick() {
        return setTab(key);
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "nav-tab-full"
    }, label), /*#__PURE__*/React.createElement("span", {
      className: "nav-tab-short"
    }, short));
  })), /*#__PURE__*/React.createElement("div", {
    className: "nav-right"
  }, /*#__PURE__*/React.createElement("div", {
    ref: userBtnRef,
    className: "nav-user",
    onClick: function onClick() {
      return setShowUserMenu(function (v) {
        return !v;
      });
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-avatar-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nav-avatar"
  }, user.username[0].toUpperCase()), /*#__PURE__*/React.createElement("span", {
    className: "nav-lvl-dot",
    style: {
      background: rank.color
    }
  }, rank.level)), /*#__PURE__*/React.createElement("div", {
    className: "nav-user-info"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nav-username"
  }, user.username), /*#__PURE__*/React.createElement("span", {
    className: "nav-rank-inline",
    style: {
      color: rank.color
    }
  }, rank.name)), /*#__PURE__*/React.createElement("span", {
    className: "nav-chevron"
  }, showUserMenu ? '▲' : '▼')), showUserMenu && /*#__PURE__*/React.createElement("div", {
    className: "user-menu",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "user-menu-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "user-menu-avatar"
  }, user.username[0].toUpperCase()), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "user-menu-name"
  }, user.username), /*#__PURE__*/React.createElement("div", {
    className: "user-menu-email"
  }, user.email))), /*#__PURE__*/React.createElement("div", {
    className: "user-menu-rank",
    style: {
      borderColor: rank.color + '44'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "user-menu-rank-label"
  }, "LEVEL ", rank.level), /*#__PURE__*/React.createElement("span", {
    className: "user-menu-rank-name",
    style: {
      color: rank.color
    }
  }, rank.name), /*#__PURE__*/React.createElement("div", {
    className: "user-menu-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "user-menu-bar-fill",
    style: {
      width: "".concat(progress, "%"),
      background: rank.color
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "user-menu-rank-xp"
  }, xp, " XP", nextRank ? " \xB7 ".concat(rank.xpMax - xp, " to ").concat(nextRank.name) : ' · MAX')), /*#__PURE__*/React.createElement("button", {
    className: "user-menu-logout",
    onClick: function onClick(e) {
      e.stopPropagation();
      onLogout();
    }
  }, "\u23FB Sign Out")))), tab === 'missions' && /*#__PURE__*/React.createElement(MissionBoard, {
    xp: xp,
    setXp: setXp
  }), tab === 'arena' && /*#__PURE__*/React.createElement(DebateArena, {
    xp: xp,
    setXp: setXp
  }), tab === 'wall' && /*#__PURE__*/React.createElement(ConfessionWall, null));
}

// ==================== ROOT ====================

function App() {
  var _useState99 = useState(function () {
      return getSession();
    }),
    _useState100 = _slicedToArray(_useState99, 2),
    user = _useState100[0],
    setUser = _useState100[1];
  var _useState101 = useState(false),
    _useState102 = _slicedToArray(_useState101, 2),
    unlocked = _useState102[0],
    setUnlocked = _useState102[1];
  var _useState103 = useState('welcome'),
    _useState104 = _slicedToArray(_useState103, 2),
    initialMode = _useState104[0],
    setInitialMode = _useState104[1];
  var handleAuth = function handleAuth(u) {
    setUser(u);
    setUnlocked(false);
    setInitialMode('welcome');
  };
  var handleUnlock = function handleUnlock() {
    return setUnlocked(true);
  };
  var handleLogout = function handleLogout() {
    var f = window._firebase;
    if (f) f.auth.signOut().catch(function () {});
    clearSession();
    setUser(null);
    setUnlocked(false);
    setInitialMode('welcome');
  };
  if (!user) return /*#__PURE__*/React.createElement(AuthScreen, {
    onAuth: handleAuth,
    initialMode: initialMode
  });
  if (!unlocked) return /*#__PURE__*/React.createElement(EntryGate, {
    onUnlock: handleUnlock,
    user: user,
    onBackToAuth: function onBackToAuth(m) {
      clearSession();
      setUser(null);
      setUnlocked(false);
      setInitialMode(m);
    }
  });
  return /*#__PURE__*/React.createElement(MainApp, {
    user: user,
    onLogout: handleLogout
  });
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));