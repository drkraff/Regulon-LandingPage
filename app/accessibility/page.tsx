import type { Metadata } from "next";

// TODO before launch: replace all [placeholder] values (accessibility contact name, email, phone).

export const metadata: Metadata = {
  title: "הצהרת נגישות | Regulon",
};

export default function AccessibilityPage() {
  return (
    <section className="py-16 sm:py-24" dir="rtl">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-foreground">
          הצהרת נגישות – Regulon
        </h1>
        <p className="mt-2 text-sm text-muted">עודכן לאחרונה: פברואר 2026</p>

        <p className="mt-6 text-foreground">
          אנו ב-Regulon רואים חשיבות עליונה בהנגשת האתר והשירותים שלנו לכלל
          הציבור, לרבות אנשים עם מוגבלויות, מתוך אמונה כי לכל אדם מגיעה הזכות
          לחיות בשוויון, בכבוד ובעצמאות.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-foreground">
          עמידה בתקנים
        </h2>
        <p className="mt-2 text-foreground">
          האתר הותאם לדרישות הנגישות בהתאם להמלצות התקן הישראלי ת&quot;י 5568
          ברמת AA, המבוסס על הנחיות WCAG 2.1 הבינלאומיות.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-foreground">
          התאמות הנגישות שבוצעו
        </h2>
        <ul className="mt-2 list-disc space-y-1 pr-6 text-foreground">
          <li>
            <strong>תמיכה מלאה בעברית:</strong> התאמה לכתיבה מימין לשמאל (RTL).
          </li>
          <li>
            <strong>ניווט מקלדת:</strong> תמיכה מלאה במעבר בין רכיבי האתר
            באמצעות מקש Tab.
          </li>
          <li>
            <strong>דילוג לתוכן:</strong> אפשרות לדילוג ישיר לתוכן המרכזי (Skip
            Link) בתחילת העמוד.
          </li>
          <li>
            <strong>רכיב נגישות:</strong> באתר מותקן תוסף נגישות המאפשר:
            <ul className="mt-1 list-disc pr-6">
              <li>הגדלת/הקטנת גופן (100%, 110%, 125%).</li>
              <li>שינוי ניגודיות (Contrast) להתאמה אישית.</li>
              <li>הדגשת קישורים ושינוי גופן לקריא יותר.</li>
            </ul>
          </li>
          <li>
            <strong>מבנה אתר:</strong> הקפדה על היררכיית כותרות וטקסט חלופי
            לתמונות (Alt Text).
          </li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold text-foreground">
          מגבלות נגישות ידועות
        </h2>
        <p className="mt-2 text-foreground">
          נכון למועד זה, לא ידועות מגבלות נגישות משמעותיות באתר. במידה ומצאת
          תקלה או רכיב שאינו נגיש, נשמח אם תעדכן אותנו ונפעל לתיקונו בהקדם.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-foreground">
          משוב ויצירת קשר
        </h2>
        <p className="mt-2 text-foreground">
          אנו ממשיכים במאמצים לשפר את נגישות האתר. אם נתקלת בקושי, נשמח לקבל
          פנייה הכוללת את תיאור הבעיה והעמוד בו גלשת:
        </p>
        <ul className="mt-2 list-disc space-y-1 pr-6 text-foreground">
          <li>
            <strong>שם רכז הנגישות:</strong> [שם / תפקיד]
          </li>
          <li>
            <strong>דוא&quot;ל:</strong> [כתובת דוא&quot;ל]
          </li>
          <li>
            <strong>טלפון:</strong> [מספר טלפון – אופציונלי]
          </li>
        </ul>
      </div>
    </section>
  );
}
