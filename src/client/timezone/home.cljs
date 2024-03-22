(ns timezone.home
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [reagent.ratom :as ratom]
            ["luxon" :refer (DateTime)]))



(defn get-time-value []
  (. (js/document.getElementById "time") -value))
(defn get-input-timezone-value []
  (. (js/document.getElementById "input-timezone") -value))
(defn get-output-timezone-value []
  (. (js/document.getElementById "output-timezone") -value))

(def time-a (r/atom nil))
(def input-timezone (r/atom nil))
(def output-timezone (r/atom nil))
(def timezones (js->clj (.supportedValuesOf js/Intl "timeZone")))


(defn reset-atoms []
  (reset! time-a (get-time-value))
  (reset! input-timezone (get-input-timezone-value))
  (reset! output-timezone (get-output-timezone-value)))

(defn convert-time [in-time input-tz output-tz]
  (-> (.fromISO DateTime in-time (clj->js {:zone input-tz}))
      (.setZone output-tz)
      (.toFormat "T"))
  )

(defn home []
  [:<>
   [:h1 "Time zone converter"]
   [:p "Enter time"]
   [:p]
   [:form
    [:input {:type "time" :id "time" :name "time"
             :on-change (fn [e] (.preventDefault e) (println (get-time-value))
                          (reset-atoms))}]
    [:br] [:br]
    [:label {:for "input-timezone"} "Input time zone: "]
    [:select {:id "input-timezone" :name "input-timezone" :on-change (fn [e] (.preventDefault e) (reset-atoms)
                                                                       (println (get-input-timezone-value)))}
     (for [timezone timezones]
       [:option {:value timezone} timezone])]
    [:br] [:br]
    [:label {:for "input-timezone"} "Output time zone: "]
    [:select {:id "output-timezone" :name "output-timezone" :on-change (fn [e] (.preventDefault e) (reset-atoms))}
     (for [timezone timezones]
       [:option {:value timezone} timezone])]
    (when (and @time-a @input-timezone @output-timezone)
      [:p (let [result (convert-time @time-a @input-timezone @output-timezone)]
            (if (= result "Invalid DateTime")
              "Please enter a time"
              result))])]])

(defn ^:dev/after-load init []
  (rdom/render [home] (js/document.getElementById "root")))
