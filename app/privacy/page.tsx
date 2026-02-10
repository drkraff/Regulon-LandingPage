import type { Metadata } from "next";

// TODO before launch: replace all [placeholder] values (company name, address, contact/DPO email).

export const metadata: Metadata = {
  title: "מדיניות פרטיות | Regulon",
};

export default function PrivacyPage() {
  return (
    <section className="py-16 sm:py-24" dir="rtl">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-foreground">
          מדיניות פרטיות – Regulon
        </h1>
        <p className="mt-2 text-sm text-muted">עודכן לאחרונה: פברואר 2026</p>

        <p className="mt-6 text-foreground">
          ברוכים הבאים ל-Regulon. אנו מכבדים את פרטיותך ומחויבים להגן על המידע
          האישי שלך. מסמך זה מפרט כיצד אנו אוספים, משתמשים ומגנים על המידע שלך
          בעת הביקור באתר וההרשמה לרשימת המתנה.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-foreground">
          1. בעל השליטה במידע (Data Controller)
        </h2>
        <p className="mt-2 text-foreground">
          האתר מופעל על ידי [שם החברה / הישות המשפטית], ח.פ [מספר], מרחוב
          [כתובת] (להלן: &quot;החברה&quot;).
        </p>

        <h2 className="mt-10 text-xl font-semibold text-foreground">
          2. המידע שאנו אוספים
        </h2>
        <ul className="mt-2 list-disc space-y-1 pr-6 text-foreground">
          <li>
            <strong>פרטי יצירת קשר:</strong> בעת הרשמה לרשימת ההמתנה או פנייה
            אלינו, אנו אוספים שם מלא, כתובת דוא&quot;ל ומספר טלפון (אופציונלי).
          </li>
          <li>
            <strong>שיווק:</strong> הסכמה לקבלת עדכונים ושיווק (Opt-in) תתבצע
            רק באופן אקטיבי על ידי סימון תיבה שאינה מסומנת מראש.
          </li>
          <li>
            <strong>עיבוד קבצים (הכלי של Regulon):</strong> חשוב לנו להדגיש –
            כל הקבצים המועלים לכלי (כגון DoC או Product File) מעובדים בדפדפן
            שלך בלבד (Client-side). הקבצים אינם נשלחים לשרתים שלנו, אינם נשמרים
            אצלנו ואין לנו כל גישה לתוכן שלהם.
          </li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold text-foreground">
          3. מטרות העיבוד
        </h2>
        <p className="mt-2 text-foreground">
          אנו משתמשים במידע שנאסף לצורך:
        </p>
        <ul className="mt-2 list-disc space-y-1 pr-6 text-foreground">
          <li>ניהול רשימת ההמתנה ועדכון על השקת המוצר.</li>
          <li>מתן מענה לפניות שירות וניתוח צרכי משתמשים.</li>
          <li>דיוור שיווקי ועדכונים, בכפוף להסכמתך המפורשת.</li>
        </ul>
        <p className="mt-2 text-foreground">
          אנו פועלים לפי עקרון &quot;צמצום הנתונים&quot; ואוספים רק את המידע
          הנחוץ למטרות אלו.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-foreground">
          4. בסיס חוקי
        </h2>
        <p className="mt-2 text-foreground">
          עיבוד המידע מתבצע בהתאם לחוק הגנת הפרטיות, התשמ&quot;א-1981, על בסיס
          הסכמתך ואינטרס לגיטימי של החברה במתן השירות ושיפורו.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-foreground">
          5. שמירת נתונים
        </h2>
        <p className="mt-2 text-foreground">
          פרטי רשימת ההמתנה והתקשורת השיווקית יישמרו כל עוד הם רלוונטיים למטרה
          לשמה נאספו, או עד לבקשת הסרה מצד המשתמש.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-foreground">
          6. שיתוף מידע עם צדדים שלישיים
        </h2>
        <p className="mt-2 text-foreground">
          איננו מוכרים או משכירים מידע אישי. אנו עשויים להסתייע בספקי שירות
          חיצוניים (כגון שירותי דיוור או אחסון ענן) המעבדים מידע עבורנו תחת
          הסכמי סודיות והגנה על המידע המקובלים בשוק.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-foreground">
          7. זכויות המשתמש
        </h2>
        <p className="mt-2 text-foreground">
          על פי חוק הגנת הפרטיות, הנך זכאי לעיין במידע המוחזק עליך, לבקש
          לתקנו, או לבקש את מחיקתו ממאגר המידע שלנו. למימוש זכויות אלו, ניתן
          לפנות אלינו בכתובת: [דוא&quot;ל ליצירת קשר].
        </p>

        <h2 className="mt-10 text-xl font-semibold text-foreground">
          8. אבטחת מידע
        </h2>
        <p className="mt-2 text-foreground">
          אנו מיישמים אמצעי אבטחה טכנולוגיים וארגוניים נאותים כדי להגן על המידע
          האישי שלך מפני גישה בלתי מורשית או אובדן.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-foreground">
          9. שינויים במדיניות
        </h2>
        <p className="mt-2 text-foreground">
          אנו רשאים לעדכן מדיניות זו מעת לעת. הודעה על שינויים מהותיים תפורסם
          בעמוד זה עם תאריך &quot;עודכן לאחרונה&quot;.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-foreground">
          ממונה הגנת פרטיות (DPO)
        </h2>
        <p className="mt-2 text-foreground">
          בהתאם למדיניות החברה וברוח תיקון 13 לחוק, מינינו ממונה הגנת פרטיות
          האחראי על פיקוח וציות להוראות הדין.
        </p>
        <p className="mt-2 text-foreground">פרטי קשר של הממונה:</p>
        <ul className="mt-2 list-disc space-y-1 pr-6 text-foreground">
          <li>
            <strong>תואר:</strong> ממונה הגנת פרטיות (DPO)
          </li>
          <li>
            <strong>דוא&quot;ל:</strong> [כתובת דוא&quot;ל ייעודית]
          </li>
          <li>
            <strong>כתובת למשלוח דואר:</strong> [כתובת – אופציונלית]
          </li>
        </ul>
        <p className="mt-2 text-foreground">
          ניתן לפנות לממונה בכל שאלה בנוגע לפרטיותך או לצורך מימוש זכויותיך.
        </p>
      </div>
    </section>
  );
}
