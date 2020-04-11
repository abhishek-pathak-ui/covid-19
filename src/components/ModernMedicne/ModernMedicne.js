import React from 'react';
import { withRouter } from 'react-router';
import './ModernMedicne.css';

const ModernMedicne = () => (
    <div>

    <div className="HealthMeter" id="health">
        <label for="customRange">
            <h1>Health Meter</h1>
        </label>
        <input className="custom-range" type="range" min="1" max="100" value="100" id="finalslider" id="health" />
    </div>

  <div className="main-wrapper">
    <div className="card">
      <div className="heading-text">Symptoms</div>
      <form action="/action_page.php">
        <div id="symptoms">
        <ul>
          <li>
            <input type="checkbox" id="symptom1" className="symptomCheckbox" name="symptom1" value="Fever" />
            <label for="symptom1">Fever</label>
            <select id="Severity1" className="messageSelectbox custom-select">
              <option value="None">None</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>

          </li>
          <li>
            <input type="checkbox" id="symptom2" className="symptomCheckbox" name="symptom2" value="Dry Cough" />
            <label for="symptom2">Dry Cough</label>
            <select id="Severity2" className="messageSelectbox custom-select">
              <option value="None">None</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
          </li>

          <li>
            <input type="checkbox" id="symptom3" className="symptomCheckbox" name="symptom3" value="Fatigue" />
            <label for="symptom3">Fatigue</label>
            <select id="Severity3" className="messageSelectbox custom-select">
              <option value="None">None</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
          </li>
          <li>
            <input type="checkbox" id="symptom4" className="symptomCheckbox" name="symptom4" value="Sputum production" />
            <label for="symptom4">Sputum production</label>
            <select id="Severity4" className="messageSelectbox custom-select">
              <option value="None">None</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
          </li>
          <li>
            <input type="checkbox" id="symptom5" className="symptomCheckbox" name="symptom5" value="Shortness of breath" />
            <label for="symptom5">Shortness of breath</label>
            <select id="Severity5" className="messageSelectbox custom-select">
              <option value="None">None</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
          </li>
          <li>
            <input type="checkbox" id="symptom6" className="symptomCheckbox" name="symptom6" value="Muscle Pain" />
            <label for="symptom6">Muscle Pain</label>
            <select id="Severity6" className="messageSelectbox custom-select">
              <option value="None">None</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
          </li>
          <li>
            <input type="checkbox" id="symptom7" className="symptomCheckbox" name="symptom7" value="Joints Pain" />
            <label for="symptom7">Joints Pain</label>
            <select id="Severity7" className="messageSelectbox custom-select">
              <option value="None">None</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
          </li>
          <li>
            <input type="checkbox" id="symptom8" className="symptomCheckbox" name="symptom8" value="Sore throat" />
            <label for="symptom8">Sore throat</label>
            <select id="Severity8" className="messageSelectbox custom-select">
              <option value="None">None</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
          </li>
          <li>
            <input type="checkbox" id="symptom9" className="symptomCheckbox" name="symptom9" value="Headache" />
            <label for="symptom9">Headache</label>
            <select id="Severity9" className="messageSelectbox custom-select">
              <option value="None">None</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
          </li>
          <li>
            <input type="checkbox" id="symptom10" className="symptomCheckbox" name="symptom10" value="Chills" />
            <label for="symptom10">Chills</label>
            <select id="Severity10" className="messageSelectbox custom-select">
              <option value="None">None</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
          </li>
          <li>
            <input type="checkbox" id="symptom11" className="symptomCheckbox" name="symptom11" value="Nausea" />
            <label for="symptom11">Nausea</label>
            <select id="Severity11" className="messageSelectbox custom-select">
              <option value="None">None</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
          </li>
          <li>
            <input type="checkbox" id="symptom12" className="symptomCheckbox" name="symptom12" value="Nasal congestion" />
            <label for="symptom12">Nasal congestion</label>
            <select id="Severity12" className="messageSelectbox custom-select">
              <option value="None">None</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
          </li>
          <li>
            <input type="checkbox" id="symptom13" className="symptomCheckbox" name="symptom13" value="Diarrhea" />
            <label for="symptom13">Diarrhea</label>
            <select id="Severity13" className="messageSelectbox custom-select">
              <option value="None">None</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
          </li>
          <li>
            <input type="checkbox" id="symptom14" className="symptomCheckbox" name="symptom14" value="Blood in cough" />
            <label for="symptom14">Blood in cough</label>
            <select id="Severity14" className="messageSelectbox custom-select">
              <option value="None">None</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
          </li>
          <li>
            <input type="checkbox" id="symptom15" className="symptomCheckbox" name="symptom15" value="Conjunctival congestion" />
            <label for="symptom15">Conjunctival congestion</label>
            <select id="Severity15" className="messageSelectbox custom-select">
              <option value="None">None</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
          </li>
          <li>
            <input type="checkbox" id="symptom16" className="symptomCheckbox" name="symptom16" value="Acute respiratory distress syndrome" />
            <label for="symptom16">Acute respiratory distress syndrome</label>
            <select id="Severity16" className="messageSelectbox custom-select">
              <option value="None">None</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
          </li>
          <li>
            <input type="checkbox" id="symptom17" className="symptomCheckbox" name="symptom17" value="Abnormalities on chest X-ray" />
            <label for="symptom17">Abnormalities on chest X-ray</label>
            <select id="Severity17" className="messageSelectbox custom-select">
              <option value="None">None</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
          </li>
          <li>
            <input type="checkbox" id="symptom18" className="symptomCheckbox" name="symptom18" value="Radiological findings on chest CT scan" />
            <label for="symptom18">Radiological findings on chest CT scan</label>
            <select id="Severity18" className="messageSelectbox custom-select">
              <option value="None">None</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
          </li>
        </ul>
        </div>
      </form>
    </div>


    <div className="card">
      <div className="heading-text">Pre existing consitions</div>
      <form action="/action_page.php">
        <div id="preconds">
        <ul>
          <li>
            <input type="checkbox" id="precond1" className="existingConsitionsCheckbox" name="precond1" value="Age > 60 or Age < 5" />
                                <label for="precond1">Age > 60 or Age &lt; 5 </label>
            <select id="PreConSeverity1" className="messageSelectbox custom-select">
              <option value="None">None</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
          </li>
          <li>
            <input type="checkbox" id="precond2" className="existingConsitionsCheckbox" name="precond2" value="Hypertension" />
            <label for="precond2">Hypertension</label>
            <select id="PreConSeverity2" className="messageSelectbox custom-select">
              <option value="None">None</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
          </li>
          <li>
            <input type="checkbox" id="precond3" className="existingConsitionsCheckbox" name="precond3" value="Cardiovascular condition" />
            <label for="precond3">Cardiovascular condition</label>
            <select id="PreConSeverity3" className="messageSelectbox custom-select">
              <option value="None">None</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
          </li>
          <li>
            <input type="checkbox" id="precond4" className="existingConsitionsCheckbox" name="precond4" value="Diabetes Mellitus" />
            <label for="precond4">Diabetes Mellitus(DM)</label>
            <select id="PreConSeverity4" className="messageSelectbox custom-select">
              <option value="None">None</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
          </li>
          <li>
            <input type="checkbox" id="precond5" className="existingConsitionsCheckbox" name="precond5" value="Chronic lung disease" />
            <label for="precond5">Chronic lung disease</label>
            <select id="PreConSeverity5" className="messageSelectbox custom-select">
              <option value="None">None</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
          </li>
          <li>
            <input type="checkbox" id="precond6" className="existingConsitionsCheckbox" name="precond6" value="Chronic kidney disease" />
            <label for="precond6">Chronic kidney disease</label>
            <select id="PreConSeverity6" className="messageSelectbox custom-select">
              <option value="None">None</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
          </li>
          <li>
            <input type="checkbox" id="precond7" className="existingConsitionsCheckbox" name="precond7" value="Liver disease" />
            <label for="precond7">Liver disease</label>
            <select id="PreConSeverity7" className="messageSelectbox custom-select">
              <option value="None">None</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
          </li>
          <li>
            <input type="checkbox" id="precond8" className="existingConsitionsCheckbox" name="precond8" value="Cerebrovascular disease" />
            <label for="precond8">Cerebrovascular disease</label>
            <select id="PreConSeverity8" className="messageSelectbox custom-select">
              <option value="None">None</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
          </li>

      </ul>
                    </div>


      <div className="heading-text" >Existing Medications</div>
      <label for="ExistingMedications">Existing Medications:</label>
      <select id="Existing Medications Medicine" className="custom-select" multiple="multiple" >
        <option value="medicine1">Amantadine</option>
        <option value="medicine2">Adefovir</option>
        <option value="medicine3">Acyclovir</option>
        <option value="medicine4">Abacavir </option>
        <option value="medicine5">clopidogrel</option>
        <option value="medicine6">Plavix</option>
        <option value="medicine7">Vasodilan</option>
        <option value="medicine8">isoxsuprine </option>
        <option value="medicine9">Actigall</option>
        <option value="medicine10">pioglitazone</option>
        <option value="medicine11">Actos</option>
        <option value="medicine12">ursodiol</option>
        <option value="medicine13">torsemide</option>
        <option value="medicine14">Demadex</option>
        <option value="medicine15">Lasix</option>
        <option value="medicine16">furosemide</option>
        <option value="medicine17">Alimta</option>
        <option value="medicine18">Tarceva</option>
        <option value="medicine19">Ofev</option>
        <option value="medicine20">Ryzodeg</option>
        <option value="medicine21">insulin aspart</option>
        <option value="medicine22">insulin degludec</option>
        <option value="medicine23">Tresiba</option>
        <option value="medicine24">Crestor</option>
        <option value="medicine25">metoprolol</option>
        <option value="medicine26">Livalo</option>
        <option value="medicine27">hydrochlorothiazide</option>
        <option value="medicine28">losartan</option>
        <option value="medicine29">amlodipine</option>
        <option value="medicine30">lisinopril</option>
        <option value="medicine31">beractant</option>
        <option value="medicine32">Curosurf</option>
        <option value="medicine33">Infasurf</option>
        <option value="medicine34">Survanta</option>
        <option value="medicine35">tetracycline</option>
        <option value="medicine36">Ilosone</option>
        <option value="medicine37">Pediazole</option>
        <option value="medicine38">erythromycin</option>
        <option value="medicine39">Amantadine</option>
        <option value="medicine40">Adefovir</option>
        <option value="medicine41">Acyclovir</option>
        <option value="medicine42">Abacavir</option>
        <option value="medicine43">atropine</option>
        <option value="medicine44">Imodium</option>
        <option value="medicine45">Lomotil</option>
        <option value="medicine46">loperamide</option>
        <option value="medicine47">Sudafed</option>
        <option value="medicine48">phenylephrine</option>
        <option value="medicine49">Afrin</option>
        <option value="medicine50">pseudoephedrine</option>
        <option value="medicine51">Phenergan</option>
        <option value="medicine52">promethazine</option>
        <option value="medicine53">Zofran</option>
        <option value="medicine54">ondansetron</option>
        <option value="medicine55">rilonacept</option>
        <option value="medicine56">canakinumab</option>
        <option value="medicine57">Ilaris</option>
        <option value="medicine58">Arcalyst</option>
        <option value="medicine59">Advil</option>
        <option value="medicine60">acetaminophen</option>
        <option value="medicine61">ibuprofen</option>
        <option value="medicine62">Fioricet</option>
        <option value="medicine63">Halls Mentho-Lyptus Drops</option>
        <option value="medicine64">phenol</option>
        <option value="medicine65">Chloraseptic Sore Throat Spray</option>
        <option value="medicine66">Cepacol Sore Throat</option>
        <option value="medicine67">Mobic</option>
        <option value="medicine68">diclofenac</option>
        <option value="medicine69">meloxicam</option>
        <option value="medicine70">Celebrex</option>
        <option value="medicine71">naproxen</option>
        <option value="medicine72">ipatropium bromide</option>
        <option value="medicine73">enaxoparin</option>
        <option value="medicine74">Zithromax</option>
        <option value="medicine75">lorazepam</option>
        <option value="medicine76">Robitussin Cough</option>
        <option value="medicine77">dextromethorphan</option>
        <option value="medicine78">Paracetamol</option>
        <option value="medicine79">acetaminophen</option>
        <option value="medicine80">Tylenol</option>
        <option value="medicine81">amphetamine</option>
        <option value="medicine82">methylphenidate</option>
        <option value="medicine83">Tussionex</option>
        <option value="medicine84">Pennkinetic</option>
        <option value="medicine85">Benadryl</option>
        <option value="medicine86">dextromethorphan</option>
        <option value="medicine87">modafinil</option>
        <option value="medicine88">acetylcysteine</option>
        <option value="medicine89">Mucinex DM</option>
      </select>


      <div className="heading-text" >Vitals</div>
      <ul className="slider-section">
        <li>
        <label for="Vital1">body temperature</label>
        <input type="range" min="97" max="108" value="98" className="slider custom-range" id="health1" />
        <input type="text" id="Vital1" className="prevital" name="body_temperature"  />

        </li>
        <li>
        <label for="Vital2">pulse rate</label>
        <input type="range" min="40" max="200" value="80" className="slider custom-range" id="health2" />
        <input type="text" id="Vital2" className="prevital" name="pulse_rate"  />
        </li>
        <li>
        <label for="Vital3">respiration rate</label>
        <input type="range" min="10" max="40" value="15" className="slider custom-range" id="health3" />
        <input type="text" id="Vital3" className="prevital" name="respiration_rate"  />
        </li>
        <li>
        <label for="Vital4">blood presseure</label>
        <input type="range" min="60" max="240" value="120" className="slider custom-range" id="health4" />
        <input type="text" id="Vital4" className="prevital" name="blood_presseure"  />
        </li>
        <li>
        <label for="Vital5">RBC</label>
        <input type="range" min="3" max="7" value="4" className="slider custom-range" id="health5" />
        <input type="text" id="Vital5" className="prevital" name="RBC"  />
        </li>
        <li>
        <label for="Vital6">WBC</label>
        <input type="range" min="2000" max="20000" value="5000" className="slider custom-range" id="health6" />
        <input type="text" id="Vital6" className="prevital" name="WBC" />
        </li>
        <li>
        <label for="Vital7">Haemoglobin</label>
        <input type="range" min="10" max="20" value="15" className="slider custom-range" id="health7" />
        <input type="text" id="Vital7" className="prevital" name="Haemoglobin" />
        </li>
        <li>
        <label for="Vital8">Glucose</label>
        <input type="range" min="60" max="120" value="80" className="slider custom-range" id="health8" />
        <input type="text" id="Vital8" className="prevital" name="Glucose"  />
        </li>
        <li>
        <label for="Vital9">BUN (blood urea nitrogen)</label>
        <input type="range" min="5" max="25" value="15" className="slider custom-range" id="health9" />
        <input type="text" id="Vital9" className="prevital" name="BUN(bloodUreaNitrogen)"  />
        </li>
      </ul>
      </form>

      <button className="btn btn-success" type="submit"  onclick="calculateHealthAndUpdateSelection()">Submit</button>

  </div>

<div className="card">
  <div className="heading-text">Medicines</div>
<p>Medicines available</p>

<ul className="inner-ul">
  <li>
    <label for="Fever">Fever:</label>
    <select id="FeverMedicine" name="Fever" className="custom-select">
      <option value="None">None</option>
      <option value="Paracetamol">Paracetamol</option>
      <option value="acetaminophen">acetaminophen</option>
      <option value="Tylenol">Tylenol</option>
      <option value="ibuprofen">ibuprofen</option>
    </select>
  </li>
  <li>
  <label for="DryCough">Dry Cough:</label>
  <select id="DryCoughMedicine" name="DryCough" className="custom-select">
    <option value="None">None</option>
    <option value="Tussionex">Tussionex</option>
    <option value="Pennkinetic">Pennkinetic</option>
    <option value="Benadryl">Benadryl</option>
    <option value="benzonatate">benzonatate</option>
    <option value="dextromethorphan">dextromethorphan</option>
  </select>
  </li>
  <li>
  <label for="Fatigue">Fatigue:</label>
  <select id="Fatigue" name="Fatigue" className="custom-select">
    <option value="None">None</option>
    <option value="modafinil">modafinil</option>
    <option value="methylphenidate">methylphenidate</option>
    <option value="amphetamine">amphetamine</option>
    <option value="amantadine">amantadine</option>
  </select>
  </li>
  <li>
  <label for="SputumProduction">Sputum production:</label>
  <select id="SputumProductionMedicine" name="SputumProduction" className="custom-select">
    <option value="None">None</option>
    <option value="Mucinex DM">Mucinex DM</option>
    <option value="acetylcysteine">acetylcysteine</option>
    <option value="dextromethorphan">dextromethorphan</option>
    <option value="Robitussin Cough">Robitussin Cough</option>
  </select>
  </li>
  <li>
  <label for=" ShortnessOfBreath"> Shortness of breath:</label>
  <select id="ShortnessOfBreathrMedicine" name="ShortnessOfBreath" className="custom-select">
    <option value="None">None</option>
    <option value="lorazepam">lorazepam</option>
    <option value="Zithromax">Zithromax</option>
    <option value="enaxoparin">enaxoparin</option>
    <option value="ipatropium">ipatropium</option>
    <option value="bromide">bromide</option>
  </select>
</li>
<li>
<label for="MusclePain">Muscle Pain:</label>
<select id="MusclePainMedicine" name="MusclePain" className="custom-select">
  <option value="None">None</option>
  <option value="ibuprofen">ibuprofen</option>
  <option value="naproxen">naproxen</option>
  <option value="acetaminophen">acetaminophen</option>
  <option value="diclofenac">diclofenac</option>
</select>
</li>
<li>
<label for="JointsPain">Joints Pain:</label>
<select id="JointsPainMedicine" name="JointsPain" className="custom-select">
  <option value="None">None</option>
  <option value="Celebrex">Celebrex</option>
  <option value="meloxicam">meloxicam</option>
  <option value="diclofenac">diclofenac</option>
  <option value="Mobic">Mobic</option>
</select>
</li>
<li>
<label for="Sorethroat">Sore throat:</label>
<select id="SorethroatMedicine" name="SoreThroat"  className="custom-select">
  <option value="None">None</option>
  <option value="Cepacol Sore Throat">Cepacol Sore Throat</option>
  <option value="Chloraseptic Sore Throat Spray">Chloraseptic Sore Throat Spray</option>
  <option value="phenol">phenol</option>
  <option value="Halls Mentho-Lyptus Drops">Halls Mentho-Lyptus Drops</option>
</select>
</li>
<li>
<label for="Headache">Headache:</label>
<select id="HeadacheMedicine" name="Headache" className="custom-select">
  <option value="None">None</option>
  <option value="Fioricet">Fioricet</option>
  <option value="ibuprofen">ibuprofen</option>
  <option value="acetaminophen">acetaminophen</option>
  <option value="Advil">Advil</option>
</select>
</li>
<li>
<label for="Chills">Chills:</label>
<select id="ChillsMedicine" name="Chills" className="custom-select">
  <option value="None">None</option>
  <option value="Arcalyst">Arcalyst</option>
  <option value="Ilaris">Ilaris</option>
  <option value="canakinumab">canakinumab</option>
  <option value="rilonacept">rilonacept</option>
</select>
</li>
<li>
<label for="Nausea">Nausea:</label>
<select id="NauseaMedicine" name="Nausea" className="custom-select">
  <option value="None">None</option>
  <option value="ondansetron">ondansetron</option>
  <option value="Zofran">Zofran</option>
  <option value="promethazine">promethazine</option>
  <option value="Phenergan">Phenergan</option>
</select>
</li>
<li>
<label for="NasalCongestion">Nasal congestion:</label>
<select id="NasalCongestionMedicine" name="NasalCongestion" className="custom-select">
  <option value="None">None</option>
  <option value="pseudoephedrine">pseudoephedrine</option>
  <option value="Afrin">Afrin</option>
  <option value="phenylephrine">phenylephrine</option>
  <option value="Sudafed Congestion">Sudafed Congestion</option>
</select>
</li>
<li>
<label for="Diarrhea">Diarrhea:</label>
<select id="DiarrheaMedicine" name="Diarrhea" className="custom-select">
  <option value="None">None</option>
  <option value="loperamide">loperamide</option>
  <option value="Lomotil">Lomotil</option>
  <option value="Imodium">Imodium</option>
  <option value="atropine">atropine</option>
  <option value="diphenoxylate">diphenoxylate</option>
</select>
</li>
<li>
<label for="BloodInCough">Blood in cough:</label>
<select id="BloodInCoughMedicine" name="BloodInCough" className="custom-select">
  <option value="None">None</option>
  <option value="Abacavir">Abacavir</option>
  <option value="Acyclovir">Acyclovir</option>
  <option value="Adefovir">Adefovir</option>
  <option value="atropine">atropine</option>
  <option value="Amantadine">Amantadine</option>
</select>
</li>
<li>
<label for="ConjunctivalCongestion">Conjunctival congestion:</label>
<select id="ConjunctivalCongestionMedicine" name="ConjunctivalCongestion" className="custom-select">
  <option value="None">None</option>
  <option value="erythromycin">erythromycin</option>
  <option value="Pediazole">Pediazole</option>
  <option value="Ilosone">Ilosone</option>
  <option value="tetracycline">tetracycline</option>
</select>
</li>
<li>
<label for="AcuteRespiratoryDistressSyndrome">Acute respiratory distress syndrome:</label>
<select id="AcuteRespiratoryDistressSyndromeMedicine" name="AcuteRespiratoryDistressSyndrome" className="custom-select">
  <option value="None">None</option>
  <option value="Survanta">Survanta</option>
  <option value="Infasurf">Infasurf</option>
  <option value="Curosurf">Curosurf</option>
  <option value="beractant">beractant</option>
</select>
</li>
<li>
<label for="Hypertension">Anti viral:</label>
<select id="HypertensionMedicine" name="AntiViral" className="custom-select">
  <option value="None">None</option>
  <option value="Abacavir">Abacavir</option>
  <option value="Acyclovir">Acyclovir</option>
  <option value="Adefovir">Adefovir</option>
  <option value="Amantadine">Amantadine</option>
</select>
</li>

</ul>
</div>
<div className="card">

<div className="heading-text">Procedures</div>
  <ul className="inner-ul">
    <li>
    <input type="checkbox" id="procedure1" className="procedurecheckbox" name="procedure1" value="Vital sign monitor" />
    <label for="procedure1">Vital sign monitor</label>
    </li>
    <li>
    <input type="checkbox" id="procedure2" className="procedurecheckbox" name="procedure2" value="Ventilator with O2 Source" />
    <label for="procedure2">Ventilator with O2 Source</label>
    </li>
    <li>
    <input type="checkbox" id="procedure3" className="procedurecheckbox" name="procedure3" value="Defibrillator with battery" />
    <label for="procedure3">Defibrillator with battery</label>
    </li>
    <li>
    <input type="checkbox" id="procedure4" className="procedurecheckbox" name="procedure4" value="Syringe infusion pump" />
    <label for="procedure4">Syringe infusion pump</label>
    </li>
    <li>
    <input type="checkbox" id="procedure5" className="procedurecheckbox" name="procedure5" value="Ventimask with O2 flowmeter" />
    <label for="procedure5">Ventimask with O2 flowmeterVentimask with O2 flowmeter</label>
    </li>
    <li>
    <input type="checkbox" id="procedure6" className="procedurecheckbox" name="procedure6" value="Ambu bag with face mask" />
    <label for="procedure6">Ambu bag with face mask</label>
    </li>
    <li>
    <input type="checkbox" id="procedure7" className="procedurecheckbox" name="procedure7" value="Laryngoscope with batteries" />
    <label for="procedure7">Laryngoscope with batteries</label>
    </li>

    <li>
    <input type="checkbox" id="procedure8" className="procedurecheckbox" name="procedure8" value="ETT with oro-pharyngeal airway" />
    <label for="procedure8">ETT with oro-pharyngeal airway</label>
    </li>
    <li>
    <input type="checkbox" id="procedure9" className="procedurecheckbox" name="procedure9" value="Suction apparatus with suctio /n
    and catheter" />
    <label for="procedure9">Suction apparatus with suction and catheter</label>
    </li>
    <li>
    <input type="checkbox" id="procedure10" className="procedurecheckbox" name="procedure10" value="Emergency drug tray" />
    <label for="procedure10">Emergency drug tray</label>
    </li>
    <li>
    <input type="checkbox" id="procedure11" className="procedurecheckbox" name="procedure11" value="IV Fluids" />
    <label for="procedure11">IV Fluids</label>
    </li>
    <li>
        <input type="checkbox" id="procedure12" className="procedurecheckbox" name="procedure12" value="Nebulizer" />
        <label for="procedure12">Nebulizer</label>
    </li>
    <li>
        <input type="checkbox" id="procedure13" className="procedurecheckbox" name="procedure13" value="Dialysis" />
        <label for="procedure13">Dialysis</label>
    </li>
</ul>
</div>

  <center><button className="btn btn-success" onclick="submitButton()" type="submit">Submit</button></center>


    </div>
    </div>

);


export default ModernMedicne;
