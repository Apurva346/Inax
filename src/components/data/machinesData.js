export const machinesData = [
    // Machining
    {
  id: 'multi-spindle-router-machine',
  name: 'Multi Spindle Router Machine',
  description: 'High-efficiency woodworking and composite processing with multiple spindles for simultaneous mass production.',
  longDescription: `
    <h3>Overview</h3>
    <p>The Multi-Spindle Router Machine is designed for high-efficiency woodworking, plastic, and composite material processing. With multiple spindles working simultaneously, this machine significantly reduces production time while maintaining precision and quality.</p>
    <p>Ideal for industrial applications requiring repetitive cutting, drilling, and shaping operations, it ensures consistent performance and superior output for high-volume manufacturing.</p>

    <h3>Key Features</h3>
    <p>✔ <strong>Multiple Spindles:</strong> Allows simultaneous routing on several points, vastly increasing productivity.<br/>
    ✔ <strong>High Precision:</strong> Equipped with advanced CNC control for accurate cutting and repeatable shaping.<br/>
    ✔ <strong>Robust Construction:</strong> Heavy-duty frame ensures stability and vibration-free high-speed operations.<br/>
    ✔ <strong>Versatile Operations:</strong> Suitable for wood, MDF, acrylic, PVC, and composite materials.<br/>
    ✔ <strong>User-Friendly Interface:</strong> Easy-to-operate control panel with digital display for quick setup.<br/>
    ✔ <strong>Automatic Tool Change (Optional):</strong> Further reduces downtime and enhances process efficiency.<br/>
    ✔ <strong>Energy Efficient:</strong> Optimized motor design reduces power consumption during heavy runs.</p>

    

    <h3>Applications</h3>
    <p>The Multi-Spindle Router is the perfect choice for:</p>
    <p>🔹 Mass production of wooden furniture components<br/>
    🔹 Door and window frame manufacturing<br/>
    🔹 Panel processing for cabinetry and interior décor<br/>
    🔹 CNC cutting and drilling for plastic and composite materials<br/>
    🔹 Large-scale production of moldings, trims, and decorative woodwork</p>

    <h3>Technical Specifications</h3>
    <table class="spec-table">
      <thead>
        <tr><th>Feature</th><th>Specification</th></tr>
      </thead>
      <tbody>
        <tr><td>Number of Spindles</td><td>3 / 4 / 6 (depending on model)</td></tr>
        <tr><td>Spindle Power</td><td>3 HP – 5 HP per spindle</td></tr>
        <tr><td>Speed Range</td><td>5000 – 24,000 RPM</td></tr>
        <tr><td>Table Size</td><td>1200 x 600 mm (customizable)</td></tr>
        <tr><td>Control System</td><td>CNC / PLC</td></tr>
        <tr><td>Power Supply</td><td>380V, 3 Phase</td></tr>
        <tr><td>Machine Dimensions</td><td>2500 x 1800 x 1600 mm</td></tr>
        <tr><td>Weight</td><td>1200 – 2000 kg</td></tr>
        <tr><td>Cooling System</td><td>Air / Water-cooled spindle options</td></tr>
      </tbody>
    </table>

    <h3>FAQ</h3>
    <div class="faq-box">
      <p><strong>Q1: What materials can the Multi-Spindle Router Machine process?</strong><br/>
      A: It can efficiently handle wood, MDF, plywood, acrylic, PVC, and various industrial composite materials.</p>
    </div>

    <div class="faq-box">
      <p><strong>Q2: How many spindles does the machine have?</strong><br/>
      A: Depending on your production requirement and the specific model, it can be equipped with 3, 4, or 6 spindles working simultaneously.</p>
    </div>

    <div class="faq-box">
      <p><strong>Q3: Is the machine suitable for small-scale production?</strong><br/>
      A: Yes, while it excels at mass production, its precision and ease of setup make it highly efficient for both small and large-scale industrial projects.</p>
    </div>

    <div class="faq-box">
      <p><strong>Q4: Does it support CNC programming?</strong><br/>
      A: Yes, it comes integrated with an advanced CNC or PLC control system to ensure precise automation and compatibility with standard design files.</p>
    </div>

    <div class="faq-box">
      <p><strong>Q5: Is the machine customizable for specific production needs?</strong><br/>
      A: Absolutely. We offer customization for the table size, spindle count, and motor power to align with your specific manufacturing goals.</p>
    </div>
  `,
  specs: ['Spindles: 3/4/6 Heads', 'Application: Mass Production'],
  image: '/images/Multi-Spindle Router Machine Display.png'
},
    {
        id: 'modern-i-nax-cnc-lathe-machine',
        name: 'Modern I-NAX CNC Lathe Machine',
        description: 'Heavy duty lathe for metal turning.',
        longDescription: `
    <h3>Overview</h3>
    <p>The i‑NAX CNC Lathe Machine is a state‑of‑the‑art precision turning center engineered for modern manufacturing environments. Designed to deliver high performance, repeatability, and flexibility, the i‑NAX series is ideal for machining cylindrical parts with exacting tolerances in automotive, aerospace, oil & gas, general engineering and high‑mix production environments.</p>
    <p>With advanced CNC control and rugged mechanical construction, i‑NAX CNC lathes significantly outperform traditional manual lathes in speed, accuracy, and consistency — making them essential for high‑volume production and precision part manufacturing.</p>

    <h3>Key Features</h3>
    <p>✔ Precision Computer Control<br/>• Fully CNC‑enabled turning with high‑accuracy motion control for repeatable part production — reduces human error and scrap.</p>
    <p>✔ Robust Mechanical Design<br/>• Heavy‑duty bed and precision guideways for vibration‑free cutting, longer tool life, and stable machining.<br/>• Rigid structure ensures dimensional consistency across long production runs.</p>
    <p>✔ Flexible Axis Movement<br/>• X‑axis and Z‑axis movement for precise turning, facing, threading, grooving, and profiling.<br/>• Optional C‑axis indexing and additional tooling (live tools) for milling operations without repositioning.</p>
    <p>✔ Advanced CNC Control Compatibility<br/>• Can be equipped with industry‑standard controllers (e.g., FANUC, Siemens, Mitsubishi) for intuitive programming, ISO/G‑code support, and easy integration with CAD/CAM systems.</p>
    <p>✔ High Productivity & Automation Ready<br/>• Supports unattended and lights‑out machining workflows with bar feeders, automatic tool changers and part unloaders.<br/>• Minimized cycle times and increased throughput.</p>
    <p>✔ Excellent Material Adaptability<br/>• Capable of machining diverse materials including steels, stainless, aluminium, titanium alloys, plastics and more.<br/>• Ideal for both soft and hard turning applications.</p>

    <h3>Typical Specifications (Customizable)</h3>
    <table class="spec-table">
      <thead>
        <tr><th>Specification</th><th>Value / Range</th></tr>
      </thead>
      <tbody>
        <tr><td>Machine Type</td><td>CNC Lathe (Horizontal)</td></tr>
        <tr><td>Control</td><td>FANUC / Siemens / Mitsubishi (optional)</td></tr>
        <tr><td>Axes</td><td>X, Z (optional C / live tooling)</td></tr>
        <tr><td>Swing Over Bed</td><td>Up to industry standard range*</td></tr>
        <tr><td>Distance Between Centers</td><td>Configurable per model*</td></tr>
        <tr><td>Spindle Speed Range</td><td>Industry typical (varies by model)*</td></tr>
        <tr><td>Tool Stations</td><td>4 / 8 / 12 station turrets supported*</td></tr>
        <tr><td>Power</td><td>Spindle and axis drives sized for heavy workloads*</td></tr>
      </tbody>
    </table>
    <p><small>*Final specs dependent on selected i‑NAX model and customer configuration.</small></p>

    <h3>Benefits for Your Workshop</h3>
    <p>✅ Higher Production Efficiency — Automated CNC control reduces cycle times and labor.</p>
    <p>✅ Superior Quality & Consistency — Repeatable precision ensures parts meet tolerance every time.</p>
    <p>✅ Lower Operating Costs — Reduced waste, minimized rework, and fewer manual adjustments save time and money.</p>
    <p>✅ Scalable for Any Task — From prototype runs to full production schedules, i‑NAX supports flexible manufacturing.</p>

    <h3>Applications</h3>
    <p>The i‑NAX CNC Lathe Machine excels in applications including:</p>
    <p>🔹 Automotive components (shafts, bushings, hubs)<br/>
    🔹 Aerospace rotational parts<br/>
    🔹 Industrial valves, couplings, and fittings<br/>
    🔹 Precision tooling & prototype parts<br/>
    🔹 Oil & gas hardware</p>

    <h3>Why Choose i‑NAX?</h3>
    <p>The i‑NAX CNC Lathe is engineered for precision, built for reliability, and configurable to your production needs. Whether you’re scaling up manufacturing or upgrading from manual equipment, i‑NAX delivers faster throughput, tighter tolerances, and higher uptime — helping you stay competitive in today’s manufacturing landscape.</p>

    <h3>FAQ – i‑NAX CNC Lathe Machine</h3>
    <div class="faq-item">
      <p><strong>Q1: What is the i‑NAX CNC Lathe Machine used for?</strong><br/>A: The i‑NAX CNC Lathe Machine is designed for precision turning of cylindrical and complex parts. It is widely used in industries such as automotive, aerospace, oil & gas, and general engineering.</p>
    </div>
    <div class="faq-item">
      <p><strong>Q2: What materials can the i‑NAX CNC Lathe machine work with?</strong><br/>A: The i‑NAX CNC Lathe is compatible with a variety of materials, including steel, stainless steel, aluminum, titanium alloys, plastics, and other industrial materials.</p>
    </div>
    <div class="faq-item">
      <p><strong>Q3: What are the main features of the i‑NAX CNC Lathe?</strong><br/>A: Key features include: Advanced CNC control, high-precision X/Z axis movement, heavy-duty bed, and optional C-axis with live tooling.</p>
    </div>
    <div class="faq-item">
      <p><strong>Q4: Can the i‑NAX CNC Lathe handle high-volume production?</strong><br/>A: Yes. With its automated control and optional accessories like bar feeders, it is ideal for high-volume production.</p>
    </div>
    <div class="faq-item">
      <p><strong>Q5: How accurate is the i‑NAX CNC Lathe?</strong><br/>A: It delivers high precision with tight tolerances thanks to its rigid construction and advanced control systems.</p>
    </div>
    <div class="faq-item">
      <p><strong>Q6: Is the i‑NAX CNC Lathe easy to program?</strong><br/>A: Yes, it supports standard G-code and integrates with CAD/CAM systems via controllers like FANUC or Siemens.</p>
    </div>
    <div class="faq-item">
      <p><strong>Q7: What industries commonly use i‑NAX CNC Lathes?</strong><br/>A: Automotive, Aerospace, Oil & Gas, and general industrial manufacturing.</p>
    </div>
    <div class="faq-item">
      <p><strong>Q8: Does it support automation?</strong><br/>A: Yes, it can be equipped with bar feeders and automatic tool changers for lights-out machining.</p>
    </div>
  `,
        specs: ['Bed: 1000mm', 'Motor: 5HP'],
        image: '/images/Modern I-NAX CNC Lathe Machine.png'
    },
    {
  id: 'i-nax-open-body-laser-cutting-machine',
  name: 'i-NAX Open Body Laser Cutting Machine',
  description: 'High-efficiency woodworking and composite processing with multiple spindles for simultaneous mass production.',
  longDescription: `
    <h3>Overview</h3>
    <p>The i-NAX Open Body Laser Cutting Machine is a high-performance CNC fiber laser metal cutting machine designed for fast, precise, and reliable sheet metal processing. With its open structure design, this machine allows easy material handling and smooth workflow, making it an ideal solution for modern fabrication units and industrial manufacturers.</p>
    <p>Engineered with advanced fiber laser technology, the i-NAX open body laser machine delivers superior cutting accuracy, smooth edges, and consistent results across a wide range of metal thicknesses. Its rigid frame construction ensures vibration-free operation, long machine life, and stable cutting performance even during continuous production.</p>

    <h3>High-Precision CNC Fiber Laser Metal Cutting Machine</h3>
    <p>The i-NAX open body model operates as a fully automated CNC laser cutting machine, ensuring repeatable accuracy and high cutting speed. This fiber laser metal cutting machine is suitable for processing mild steel, stainless steel, aluminum, brass, and copper with excellent edge quality and minimal material waste.</p>
    <p>The intelligent CNC control system allows easy programming, precise nesting, and efficient production management, reducing operator dependency and improving overall productivity.</p>

    <h3>Open Body Laser Machine Size Options</h3>
    <p>The open body laser machine size can be selected based on your production requirements. i-NAX offers multiple cutting bed configurations suitable for small, medium, and large fabrication units. Common size options include:</p>
    <p>• 3000 × 1500 mm<br/>
    • 4000 × 2000 mm<br/>
    • 6000 × 2000 mm<br/>
    <small>(Custom sizes available on request)</small></p>

    <h3>Open Body Laser Cutter with Pallet Changer</h3>
    <p>For high-volume operations, i-NAX also offers an Open Body Laser Cutter with Pallet Changer. This metal sheet laser cutting machine with pallet enables simultaneous cutting and sheet loading, significantly reducing idle time and increasing output. It is an ideal choice for industries focused on speed, automation, and large-scale production.</p>

    <h3>Open Body Laser Machine Cost & Price</h3>
    <p>The open body laser machine cost depends on factors such as laser power, machine size, CNC controller, and optional automation features like a pallet changer. The open body laser machine cost price is optimized to deliver maximum value, low operating cost, and long-term reliability.</p>
    <p>For accurate pricing and configuration details, customers can contact i-NAX – a trusted Fiber Laser Cutting Machine Trader and Manufacturer in India.</p>

    <h3>Applications</h3>
    <p>The i-NAX Open Body Laser Cutting Machine is widely used in:<br/>
    🔹 <strong>Sheet metal fabrication</strong><br/>
    🔹 <strong>Automotive and auto components</strong><br/>
    🔹 <strong>Electrical panels and enclosures</strong><br/>
    🔹 <strong>Industrial machinery parts</strong><br/>
    🔹 <strong>Furniture and decorative metal work</strong></p>

    <h3>Why Choose i-NAX Open Body Laser Cutting Machine?</h3>
    <p>✔ High-speed fiber laser cutting technology<br/>
    ✔ Strong open body structure for easy handling<br/>
    ✔ Accurate CNC control and low maintenance<br/>
    ✔ Energy-efficient and cost-effective operation<br/>
    ✔ Reliable service and support across India</p>

    <h3>Frequently Asked Questions – i-NAX Open Body Laser Cutting Machine</h3>
    <div class="faq-box">
      <p><strong>1. What is an open body laser cutting machine?</strong><br/>
      An open body laser cutting machine is a CNC fiber laser system with an open structure that allows easy loading and unloading of metal sheets. It is ideal for fast and flexible sheet metal cutting operations.</p>
    </div>
    <div class="faq-box">
      <p><strong>2. What is the open body laser machine cost?</strong><br/>
      The open body laser machine cost depends on laser power, machine size, CNC controller, and optional features like a pallet changer. For the exact cost price, it is best to contact i-NAX with your cutting requirements.</p>
    </div>
    <div class="faq-box">
      <p><strong>3. What sizes are available in i-NAX open body laser machines?</strong><br/>
      i-NAX open body laser machines are available in multiple sizes such as 3000 × 1500 mm, 4000 × 2000 mm, and 6000 × 2000 mm. Custom machine sizes can also be provided based on application needs.</p>
    </div>
    <div class="faq-box">
      <p><strong>4. Which materials can be cut using a fiber laser metal cutting machine?</strong><br/>
      The i-NAX fiber laser metal cutting machine can cut mild steel (MS), stainless steel (SS), aluminum, brass, and copper with high precision and smooth edge quality.</p>
    </div>
    <div class="faq-box">
      <p><strong>5. What is an open body laser cutter with pallet changer?</strong><br/>
      An open body laser cutter with pallet changer is an automated system that allows cutting on one pallet while loading or unloading material on another, increasing productivity and reducing machine idle time.</p>
    </div>
    <div class="faq-box">
      <p><strong>6. Is the i-NAX machine a CNC laser cutting machine?</strong><br/>
      Yes, the i-NAX open body laser cutting machine is a fully automated CNC laser cutting machine with advanced control software for accurate and repeatable metal cutting.</p>
    </div>
    <div class="faq-box">
      <p><strong>7. Which industries use metal sheet laser cutting machines?</strong><br/>
      Metal sheet laser cutting machines are widely used in sheet metal fabrication, automotive components, electrical panels, industrial machinery, furniture, and decorative metal applications.</p>
    </div>
    <div class="faq-box">
      <p><strong>8. Does i-NAX provide installation and after-sales support?</strong><br/>
      Yes, i-NAX provides professional installation, operator training, and reliable after-sales service support across India.</p>
    </div>
    <div class="faq-box">
      <p><strong>9. Why choose i-NAX as a fiber laser cutting machine trader?</strong><br/>
      i-NAX is a trusted fiber laser cutting machine trader and manufacturer, known for durable machines, competitive pricing, and strong technical support.</p>
    </div>
  `,
  specs: ['Bed Size: Up to 6000x2000 mm', 'Type: Fiber Laser CNC'],
  image: '/images/laser machine.png' 
},
{
  id: 'i-nax-closed-body-laser-cutting-machine',
  name: 'i-NAX Closed Body Laser Cutting Machine',
  description: 'Advanced enclosed fiber laser solution for high-precision, high-speed, and safe metal processing.',
  longDescription: `
    <h3>Overview</h3>
    <p>The i-NAX Closed Body Laser Cutting Machine is an advanced enclosed fiber laser cutting machine designed for high-precision, high-speed, and safe metal processing. Its fully enclosed structure ensures operator safety, fume control, and stable cutting performance, making it ideal for modern industrial production environments.</p>
    <p>Built for accuracy and productivity, this fiber laser cutting machine for sheet metal delivers clean, burr-free cuts with excellent edge quality. The closed body design minimizes laser radiation exposure while maintaining consistent results for continuous manufacturing operations.</p>

    <h3>Key Features of i-NAX Closed Body Fiber Laser Machine</h3>
    <p>• Fully enclosed laser cutting machine for industrial safety<br/>
    • High-power fiber laser source for precision cutting<br/>
    • Automatic safety doors with interlock system<br/>
    • High-speed CNC laser cutting controller<br/>
    • Efficient dust & fume extraction system<br/>
    • Stable machine bed for vibration-free cutting<br/>
    • Low operating cost and minimal maintenance<br/>
    • Suitable for 24/7 industrial laser cutting applications</p>

    <h3>Laser Cutting Applications</h3>
    <p>🔹 <strong>Sheet metal fabrication industry</strong><br/>
    🔹 <strong>Automotive laser cutting components</strong><br/>
    🔹 <strong>Stainless steel fabrication units</strong><br/>
    🔹 <strong>Electrical panel & control cabinet manufacturing</strong><br/>
    🔹 <strong>Metal signage and decorative laser cutting</strong><br/>
    🔹 <strong>Industrial machine parts and enclosures</strong></p>

    <h3>Materials Supported</h3>
    <p>✔ Mild Steel (MS)<br/>
    ✔ Stainless Steel (SS)<br/>
    ✔ Aluminum sheets<br/>
    ✔ Brass & Copper<br/>
    ✔ Galvanized steel</p>

    <h3>Why Choose i-NAX Closed Body Laser Cutting Machine?</h3>
    <p>The i-NAX fiber laser cutting machine is engineered for manufacturers who demand precision, safety, and long-term reliability. With its robust enclosed design and advanced CNC control, i-NAX ensures higher productivity, reduced material waste, and consistent cutting accuracy—making it a trusted solution for Indian and global industries.</p>

    <h3>Safety & Environmental Advantages</h3>
    <p>• Complete laser beam enclosure<br/>
    • Reduced noise and dust levels<br/>
    • Clean and controlled cutting environment<br/>
    • Complies with industrial laser safety standards</p>

    <h3>Frequently Asked Questions – i-NAX Closed Body Laser Cutting Machine</h3>
    <div class="faq-box">
      <p><strong>1. What is a closed body laser cutting machine?</strong><br/>
      A closed body laser cutting machine is an enclosed fiber laser system designed to improve operator safety, reduce dust and noise, and provide stable, high-precision metal cutting in industrial environments.</p>
    </div>
    <div class="faq-box">
      <p><strong>2. What are the advantages of an enclosed fiber laser cutting machine?</strong><br/>
      An enclosed fiber laser cutting machine offers enhanced safety, better fume control, improved cutting accuracy, and a cleaner workspace compared to open laser machines.</p>
    </div>
    <div class="faq-box">
      <p><strong>3. Which materials can be cut using the i-NAX closed body laser machine?</strong><br/>
      The i-NAX closed body laser cutting machine can cut mild steel, stainless steel, aluminum, brass, copper, and galvanized sheets with high precision and smooth edge quality.</p>
    </div>
    <div class="faq-box">
      <p><strong>4. Is the i-NAX laser cutting machine suitable for sheet metal fabrication?</strong><br/>
      Yes, the i-NAX fiber laser cutting machine for sheet metal is ideal for fabrication units, offering fast cutting speeds, consistent accuracy, and low operating costs.</p>
    </div>
    <div class="faq-box">
      <p><strong>5. Does the closed body design improve operator safety?</strong><br/>
      Yes. The fully enclosed structure prevents laser radiation exposure and includes safety interlock doors, ensuring compliance with industrial laser safety standards.</p>
    </div>
    <div class="faq-box">
      <p><strong>6. What industries use closed body CNC laser cutting machines?</strong><br/>
      These machines are widely used in sheet metal fabrication, automotive, electrical panel manufacturing, stainless steel fabrication, signage, and industrial machinery production.</p>
    </div>
    <div class="faq-box">
      <p><strong>7. Is the i-NAX closed body laser cutting machine energy efficient?</strong><br/>
      Yes, the fiber laser source used in i-NAX machines is energy efficient, requires minimal maintenance, and reduces long-term operational costs.</p>
    </div>
    <div class="faq-box">
      <p><strong>8. Can the machine operate continuously for industrial production?</strong><br/>
      Absolutely. The i-NAX enclosed CNC laser cutting machine is designed for 24/7 industrial operation, ensuring stable performance and high productivity.</p>
    </div>
  `,
  specs: ['Enclosure: Fully Automated Safety Doors', 'Application: 24/7 Industrial Use'],
  image: '/images/closed body laser.png'
},
    {
        id: 'i-nax-vmc-with-tinted-windows',
        name: 'I-NAX VMC with tinted windows',
        price: '₹5,80,000',
        description: 'Advanced vertical milling machine.',
        specs: ['Table size: 1200x300', 'Speed: 3000 RPM'],
        image: '/images/I-NAX VMC with Tinted Windows.png'
    },
    {
  id: 'i-nax-vertical-machine-center',
  name: 'I-NAX Vertical Machine Center',
  description: 'Precision CNC Machining Solution - High-performance VMC for complex milling, drilling, and mold making.',
  longDescription: `
    <h3>Overview</h3>
    <p>The i-NAX Vertical Machine Center (VMC) is a high-performance CNC machining solution designed for precision milling, drilling, and complex part machining across a wide range of industrial applications. Built with a robust vertical spindle configuration, this machine offers superior rigidity, high accuracy, and reliable performance.</p>
    <p>It is ideal for automotive, aerospace, mold & die, general engineering, and precision manufacturing environments. The VMC features a vertically oriented spindle and advanced CNC control to automate machining tasks with exceptional repeatability and efficiency.</p>

    <h3>Key Features & Benefits</h3>
    <p>• <strong>Precision CNC Control:</strong> Equipped with advanced controllers for accurate motion across all axes, ensuring high repeatability even on complex geometries.<br/>
    • <strong>Robust Vertical Spindle:</strong> Allows direct access to the workpiece for stable milling, drilling, tapping, and contouring at high speeds.<br/>
    • <strong>High Rigidity:</strong> Constructed with a rigid machine bed and high-quality linear guides to absorb cutting forces and optimize surface finish.<br/>
    • <strong>Automatic Tool Changer (ATC):</strong> Integrated ATC reduces setup time and increases throughput by switching tools automatically during cycles.<br/>
    • <strong>Wide Material Range:</strong> Supports machining of steels, aluminum alloys, composites, and non-ferrous metals.<br/>
    • <strong>Expandable:</strong> Optional 4-axis or 5-axis capabilities and automation interfaces can be integrated based on needs.</p>

    <h3>Typical Specifications</h3>
    <table class="spec-table">
      <thead>
        <tr><th>Specification</th><th>Example Value</th></tr>
      </thead>
      <tbody>
        <tr><td>Machine Type</td><td>CNC Vertical Machining Center</td></tr>
        <tr><td>Axes</td><td>3-Axis / 4-Axis / 5-Axis (Optional)</td></tr>
        <tr><td>Spindle Power</td><td>7.5 – 15 kW</td></tr>
        <tr><td>Max Spindle Speed</td><td>8,000 – 12,000 rpm</td></tr>
        <tr><td>Tool Taper</td><td>BT40 / BT50</td></tr>
        <tr><td>Worktable Size</td><td>e.g. 1000 × 500 mm</td></tr>
        <tr><td>ATC Tool Capacity</td><td>16 – 24 Tools</td></tr>
        <tr><td>Control System</td><td>FANUC / Siemens / Mitsubishi</td></tr>
      </tbody>
    </table>
    <p><small>* Note: Specifications are illustrative and can be customized per model.</small></p>

    <h3>Typical Applications</h3>
    <p>🔹 <strong>Automotive:</strong> Engine blocks, brackets, and housings.<br/>
    🔹 <strong>Aerospace:</strong> Structural precision parts and fixtures.<br/>
    🔹 <strong>Mold & Die:</strong> High-precision cavities and core fabrication.<br/>
    🔹 <strong>General Engineering:</strong> Custom prototypes and specialty components.<br/>
    🔹 <strong>Electronics:</strong> Accurate and repeatable cuts for appliance parts.</p>

    <h3>Why Choose i-NAX VMC?</h3>
    <p>✔ Superior build quality and long service life.<br/>
    ✔ CNC automation for maximum production efficiency.<br/>
    ✔ Enhanced machining accuracy and superior surface finish.<br/>
    ✔ Flexible for both batch production and custom jobs.</p>

    <h3>FAQ – i-NAX Vertical Machine Center</h3>
    <div class="faq-box">
      <p><strong>1. What is an i-NAX Vertical Machine Center?</strong><br/>
      It is a CNC machining system with a vertical spindle used for high-precision milling, drilling, and contouring operations.</p>
    </div>
    <div class="faq-box">
      <p><strong>2. Which industries use this machine?</strong><br/>
      Automotive, aerospace, mold and die making, electronics, and general engineering workshops.</p>
    </div>
    <div class="faq-box">
      <p><strong>3. What operations can it perform?</strong><br/>
      Face and profile milling, drilling, boring, tapping, threading, slotting, and complex 3D contouring.</p>
    </div>
    <div class="faq-box">
      <p><strong>4. What materials can be machined?</strong><br/>
      Mild steel, alloy steel, aluminum, cast iron, stainless steel, and engineering plastics.</p>
    </div>
    <div class="faq-box">
      <p><strong>5. Does it have an Automatic Tool Changer (ATC)?</strong><br/>
      Yes, it is equipped with an ATC to enable fast tool changes and reduce production downtime.</p>
    </div>
    <div class="faq-box">
      <p><strong>6. What CNC controllers are available?</strong><br/>
      We offer industry-leading controls such as FANUC, Siemens, or Mitsubishi based on customer requirements.</p>
    </div>
    <div class="faq-box">
      <p><strong>7. Is 4th-axis support available?</strong><br/>
      Yes, the machine can be configured with a 4th-axis rotary table for complex multi-side machining.</p>
    </div>
    <div class="faq-box">
      <p><strong>8. What are the main advantages?</strong><br/>
      High accuracy, rigid structure, reduced cycle times, and excellent surface finishing results.</p>
    </div>
    <div class="faq-box">
      <p><strong>9. Is it suitable for small workshops?</strong><br/>
      Yes, its user-friendly interface makes it ideal for small, medium, and large manufacturing units.</p>
    </div>
    <div class="faq-box">
      <p><strong>10. Do you provide installation and support?</strong><br/>
      Yes, i-NAX offers installation guidance, operator training, and reliable after-sales support.</p>
    </div>
    <div class="faq-box">
      <p><strong>11. How can I get a quote?</strong><br/>
      You can contact our sales team through the website enquiry form or call our support team directly for pricing.</p>
    </div>
  `,
  specs: ['ATC Capacity: 16-24 Tools', 'Spindle: Up to 12,000 RPM'],
  image: '/images/I-NAX Vertical Machining Center.png'
},
    {
  id: 'i-nax-radial-drilling-machine',
  name: 'I-NAX Radial Drilling Machine',
  description: 'Precision & Performance in Every Drilling Task - Engineered for heavy-duty industrial drilling and flexible operation.',
  longDescription: `
    <h3>Overview</h3>
    <p>The i-NAX Radial Drilling Machine is engineered for heavy-duty industrial drilling, offering high precision, rugged durability, and flexible operation for metalworking workshops, fabrication units, and production lines.</p>
    <p>Its robust build and adaptable radial arm allow efficient drilling, reaming, tapping, and counterboring on large and irregular workpieces — making it ideal for steel, cast iron, aluminum, and other materials.</p>

    <h3>Key Features</h3>
    <p>✔ <strong>Heavy-Duty Radial Design:</strong> A heavy vertical column with a movable radial arm lets the spindle reach over large workpieces without constant repositioning.<br/>
    ✔ <strong>Wide Drilling Capacity:</strong> Built to handle a broad range of jobs — from medium-size drilling to large industrial holes.<br/>
    ✔ <strong>Precise Spindle Control:</strong> Multi-speed spindle range with adjustable feed rates for optimal cutting across various materials.<br/>
    ✔ <strong>Flexible Arm Movement:</strong> Radial arm can swivel and extend horizontally, giving excellent reach to hard-to-reach work areas.<br/>
    ✔ <strong>Solid Construction:</strong> Cast iron base and column provide excellent vibration damping and long service life.<br/>
    ✔ <strong>User-Friendly Operation:</strong> Intuitive controls on the head stock reduce setup times and improve efficiency.</p>

    <h3>Technical Specifications (Typical)</h3>
    <table class="spec-table">
      <thead>
        <tr><th>Specification</th><th>Typical Value</th></tr>
      </thead>
      <tbody>
        <tr><td>Drilling Capacity</td><td>Up to 80 mm (industrial)</td></tr>
        <tr><td>Spindle Speed Range</td><td>Multiple speeds (e.g., 16–1250 rpm)</td></tr>
        <tr><td>Spindle Taper</td><td>Morse Taper (e.g., MT6)</td></tr>
        <tr><td>Worktable Size</td><td>Large T-slot table for secure clamping</td></tr>
        <tr><td>Arm Horizontal Travel</td><td>Extensive reach for big workpieces</td></tr>
        <tr><td>Motor Power</td><td>Optimal industrial power rating</td></tr>
        <tr><td>Construction Weight</td><td>Heavy frame for vibration reduction</td></tr>
      </tbody>
    </table>
    <p><small>* Note: Figures are representative and vary by specific model configuration.</small></p>

    <h3>Applications</h3>
    <p>The i-NAX Radial Drilling Machine is ideal for:</p>
    <p>🔹 Industrial and manufacturing drilling operations<br/>
    🔹 Metal fabrication and repair workshops<br/>
    🔹 Component machining for automotive and aerospace<br/>
    🔹 Maintenance and heavy equipment servicing</p>

    <h3>Standard Accessories</h3>
    <p>• Drill chuck & key<br/>
    • T-slot worktable<br/>
    • Safety guards<br/>
    • Tool set and wrenches</p>

    <h3>Frequently Asked Questions</h3>
    <div class="faq-box">
      <p><strong>1. What is a radial drilling machine?</strong><br/>
      It is a versatile industrial tool where the radial arm can swivel and adjust horizontally, allowing the drill head to reach different positions without moving heavy workpieces.</p>
    </div>
    <div class="faq-box">
      <p><strong>2. What materials can it work on?</strong><br/>
      It is suitable for steel, cast iron, aluminum, non-ferrous metals, plastics, and composites.</p>
    </div>
    <div class="faq-box">
      <p><strong>3. What drilling capacity does it offer?</strong><br/>
      Capacity varies by model, but generally handles medium to large diameters (up to 80mm) suitable for heavy industry.</p>
    </div>
    <div class="faq-box">
      <p><strong>4. How do I adjust the speed and feed?</strong><br/>
      The machine features adjustable multi-speed spindle handles on the headstock to optimize performance for different hole sizes.</p>
    </div>
    <div class="faq-box">
      <p><strong>5. Is the radial arm adjustable?</strong><br/>
      Yes, it swivels and moves horizontally along the vertical column for precise positioning.</p>
    </div>
    <div class="faq-box">
      <p><strong>6. Does it come with safety features?</strong><br/>
      Yes, including emergency stops, safety guards, and secured enclosures for moving parts.</p>
    </div>
    <div class="faq-box">
      <p><strong>7. What accessories are typically included?</strong><br/>
      Common accessories include drill chuck and key, T-slot worktable, tool set, wrenches, and safety guards.</p>
    </div>
    <div class="faq-box">
      <p><strong>8. Can I use this machine for tapping operations?</strong><br/>
      Yes. With the appropriate tooling and settings, it can perform tapping and reaming in addition to drilling.</p>
    </div>
    <div class="faq-box">
      <p><strong>9. How do I install and maintain the machine?</strong><br/>
      Installation should be on a leveled concrete floor. Maintenance includes regular lubrication and periodic cleaning as per the manual.</p>
    </div>
    <div class="faq-box">
      <p><strong>10. What is the power requirement?</strong><br/>
      Power requirements depend on the model and motor size, typically requiring industrial 3-phase power.</p>
    </div>
    <div class="faq-box">
      <p><strong>11. Is operator training required?</strong><br/>
      Yes. Trained personnel should operate it to ensure safety and optimal drilling performance.</p>
    </div>
    <div class="faq-box">
      <p><strong>12. Can the machine be customized?</strong><br/>
      Yes. Optional features like work lights, digital readouts (DRO), and coolant systems can be added based on requirements.</p>
    </div>
  `,
  specs: ['Capacity: Up to 80 mm', 'Taper: MT6 Morse Taper'],
  image: '/images/I-NAX Radial Drilling Machine Close-up.png'
},
    {
  id: 'i-nax-milling-machine',
  name: 'I-NAX Milling Machine',
  description: 'Precision. Power. Reliability. Engineered for high-accuracy metal cutting, shaping, and surface finishing.',
  longDescription: `
    <h3>Overview</h3>
    <p><strong>Precision. Power. Reliability.</strong></p>
    <p>The i-NAX Milling Machine is engineered for high-accuracy metal cutting, shaping, slotting, and surface finishing operations. Built with a rigid cast-iron structure and precision-ground components, it delivers consistent performance for tool rooms, fabrication units, workshops, and industrial manufacturing environments.</p>
    <p>Designed to handle both light and heavy milling tasks, the i-NAX Milling Machine ensures excellent surface finish, long machine life, and operator-friendly controls.</p>

    <h3>Key Features</h3>
    <p>✔ <strong>Heavy-Duty Cast Iron Body:</strong> Minimizes vibration and ensures long-term dimensional accuracy.<br/>
    ✔ <strong>High Precision Spindle:</strong> Smooth rotation with excellent load-bearing capacity for accurate machining.<br/>
    ✔ <strong>Wide Working Table:</strong> Supports multiple clamping setups and larger workpieces.<br/>
    ✔ <strong>Geared / Belt-Driven Head Options:</strong> Reliable torque transmission with low maintenance.<br/>
    ✔ <strong>Hardened & Ground Guideways:</strong> Smooth table movement and extended wear resistance.<br/>
    ✔ <strong>Manual / Semi-Automatic Operation:</strong> Easy to operate with precise feed control.<br/>
    ✔ <strong>Low Maintenance Design:</strong> Designed for continuous industrial use with minimal downtime.</p>

    <h3>Applications</h3>
    <p>The i-NAX Milling Machine is suitable for a wide range of operations:</p>
    <p>🔹 Surface milling<br/>
    🔹 Slot and keyway cutting<br/>
    🔹 Gear cutting<br/>
    🔹 Profile and contour milling<br/>
    🔹 Drilling and boring operations<br/>
    🔹 Tool and die making<br/>
    🔹 Job work and batch production</p>

    <h3>Industries Served</h3>
    <p>• Engineering Workshops<br/>
    • Automotive & Auto Components<br/>
    • Tool Rooms<br/>
    • Fabrication Units<br/>
    • General Manufacturing Industries</p>

    <h3>Technical Specifications (Indicative)</h3>
    <table class="spec-table">
      <thead>
        <tr><th>Parameter</th><th>Specification</th></tr>
      </thead>
      <tbody>
        <tr><td>Table Size</td><td>Customizable</td></tr>
        <tr><td>Spindle Speed</td><td>Multiple speed ranges</td></tr>
        <tr><td>Spindle Taper</td><td>ISO / MT options</td></tr>
        <tr><td>Table Travel (X/Y/Z)</td><td>As per model</td></tr>
        <tr><td>Motor Power</td><td>Heavy-duty industrial motor</td></tr>
        <tr><td>Machine Type</td><td>Vertical / Universal (as per requirement)</td></tr>
        <tr><td>Construction</td><td>Rigid cast iron</td></tr>
      </tbody>
    </table>
    <p><small>* Specifications may vary based on model and customer requirements.</small></p>

    <h3>Why Choose i-NAX Milling Machine?</h3>
    <p>✅ High machining accuracy<br/>
    ✅ Robust industrial construction<br/>
    ✅ Smooth and reliable operation<br/>
    ✅ Custom configurations available<br/>
    ✅ Strong after-sales and service support<br/>
    ✅ Cost-effective solution for long-term use</p>

    <h3>Optional Accessories</h3>
    <p>✔ Digital Readout (DRO)<br/>
    ✔ Rotary Table<br/>
    ✔ Milling Vice<br/>
    ✔ Clamping Kit<br/>
    ✔ Coolant System<br/>
    ✔ Power Feed Unit</p>

    <h3>Frequently Asked Questions</h3>
    <div class="faq-box">
      <p><strong>Q1. Is the i-NAX Milling Machine suitable for heavy-duty work?</strong><br/>
      Yes, it is built with a rigid cast-iron structure and hardened guideways, making it suitable for both medium and heavy-duty milling applications.</p>
    </div>

    <div class="faq-box">
      <p><strong>Q2. Can this machine be customized?</strong><br/>
      Yes, table size, spindle options, motor power, and accessories can be customized based on customer requirements.</p>
    </div>

    <div class="faq-box">
      <p><strong>Q3. What type of milling operations can it perform?</strong><br/>
      It can perform surface milling, slotting, drilling, boring, gear cutting, and profile milling operations.</p>
    </div>

    <div class="faq-box">
      <p><strong>Q4. Is operator training required?</strong><br/>
      Basic machine operation knowledge is sufficient. Optional training and documentation can be provided upon installation.</p>
    </div>

    <div class="faq-box">
      <p><strong>Q5. Do you provide installation and service support?</strong><br/>
      Yes, i-NAX provides professional installation guidance and reliable after-sales service support across India.</p>
    </div>
  `,
  specs: ['Construction: Rigid Cast Iron', 'Type: Vertical / Universal'],
  image: '/images/I-NAX Milling Machine in Detail.png'
},
    {
  id: 'i-nax-laser-marking-workstation-design',
  name: 'I-NAX Laser Marking Workstation Design',
  description: 'Advanced industrial laser marking solution for high-precision, permanent engraving on metals, plastics, and more.',
  longDescription: `
    <h3>Product Overview</h3>
    <p>The i-NAX Laser Marking Workstation Machine is an advanced industrial laser marking solution designed for high-precision, permanent marking and engraving on a wide variety of materials. Built for reliability and performance, this workstation combines robust construction with intuitive operation to support manufacturing, traceability, branding and serialization workflows.</p>
    <p>Laser marking technology uses a focused laser beam to etch or alter the surface of the material without physical contact, creating permanent markings such as serial numbers, QR codes, barcodes, logos, text and graphics with exceptional clarity and repeatability.</p>

    <h3>Key Features</h3>
    <p>✔ <strong>High-Performance Laser Marking:</strong> Delivers precise and permanent marks with excellent contrast.<br/>
    ✔ <strong>Industrial Workstation Design:</strong> Sturdy frame and ergonomic layout for continuous production use.<br/>
    ✔ <strong>Versatile Material Compatibility:</strong> Suitable for metals (steel, aluminum, stainless steel), plastics, ceramics and more.<br/>
    ✔ <strong>Touchscreen Control & Software:</strong> User-friendly interface for quick setup and parameter adjustment.<br/>
    ✔ <strong>Class-1 Safety Enclosure (Optional):</strong> Protects operators from laser emissions for safe operation.<br/>
    ✔ <strong>Flexible Marking Options:</strong> Supports variable data, batch coding, QR codes, and 1D/2D barcodes.</p>

    <h3>Technical Specifications</h3>
    <table class="spec-table">
      <thead>
        <tr><th>Specification</th><th>Details</th></tr>
      </thead>
      <tbody>
        <tr><td>Laser Type</td><td>Fiber laser (or CO₂ option)</td></tr>
        <tr><td>Wavelength</td><td>∼1064 nm (Fiber)</td></tr>
        <tr><td>Marking Area</td><td>Variable (e.g., up to ~110 × 110 mm or larger)</td></tr>
        <tr><td>Marking Speed</td><td>High-speed galvo scanning system</td></tr>
        <tr><td>Software</td><td>Integrated control with variable data support</td></tr>
        <tr><td>Interface</td><td>Touchscreen / PC-based</td></tr>
        <tr><td>Power Requirements</td><td>230 V AC (typical)</td></tr>
        <tr><td>Cooling</td><td>Air-cooled</td></tr>
        <tr><td>Safety</td><td>Interlocks, enclosure, emergency stop</td></tr>
      </tbody>
    </table>
    <p><small>* Typical ranges based on industrial models; may vary by laser source.</small></p>

    <h3>Benefits</h3>
    <p>✅ <strong>Permanent & High-Contrast Markings</strong> — Ideal for traceability and part identification.<br/>
    ✅ <strong>Flexible Production Use</strong> — Can be standalone or integrated into automated lines.<br/>
    ✅ <strong>Fast Throughput</strong> — Suitable for batch processing and high industrial demands.<br/>
    ✅ <strong>Safety Certified</strong> — Meets relevant industrial laser safety standards.</p>

    <h3>Common Applications</h3>
    <p>The i-NAX Laser Workstation is widely used for:</p>
    <p>🔹 <strong>Automotive & Aerospace:</strong> Serialized part marking and traceability.<br/>
    🔹 <strong>Electronics:</strong> PCB component marking and identification.<br/>
    🔹 <strong>Medical:</strong> Surgical instrument and device identification.<br/>
    🔹 <strong>Branding:</strong> Logo and graphics engraving on finished goods.<br/>
    🔹 <strong>Tooling:</strong> Asset tracking and tool identification.</p>

    <h3>Why Choose i-NAX Laser Workstation</h3>
    <p>The i-NAX system blends industrial performance with operator convenience — delivering precision marking you can rely on for quality control and production efficiency. Whether you’re marking metal parts, plastics, or complex shapes, this workstation scales to your process needs while minimizing downtime and maintenance.</p>

    <h3>Frequently Asked Questions</h3>
    <div class="faq-box">
      <p><strong>1. What is the i-NAX Laser Marking Workstation?</strong><br/>
      It is an industrial-grade system using laser technology to create permanent, high-precision marks on various materials like metals and plastics.</p>
    </div>

    <div class="faq-box">
      <p><strong>2. What types of materials can it mark?</strong><br/>
      It marks metals (steel, aluminum, stainless steel), plastics, ceramics, and various industrial coatings.</p>
    </div>

    <div class="faq-box">
      <p><strong>3. Which industries use this machine?</strong><br/>
      Commonly used in automotive, aerospace, electronics, medical devices, tooling, and packaging sectors.</p>
    </div>

    <div class="faq-box">
      <p><strong>4. How is laser marking better than traditional methods?</strong><br/>
      It is non-contact (no wear), permanent, low maintenance (no inks), and extremely fast and repeatable.</p>
    </div>

    <div class="faq-box">
      <p><strong>5. Is it safe for operators?</strong><br/>
      Yes, it features interlock doors, emergency stops, and optional Class-1 enclosures to prevent laser exposure.</p>
    </div>

    <div class="faq-box">
      <p><strong>6. What software does it use?</strong><br/>
      It includes an intuitive marking software for layout editing, supporting serialization, batch codes, and dynamic text.</p>
    </div>

    <div class="faq-box">
      <p><strong>7. How fast is the marking process?</strong><br/>
      While it depends on complexity, it is generally high-speed and designed for fast throughput in production lines.</p>
    </div>

    <div class="faq-box">
      <p><strong>8. Can it be integrated into automation?</strong><br/>
      Yes, it can be used standalone or integrated with conveyors and robotic systems for high-volume production.</p>
    </div>

    <div class="faq-box">
      <p><strong>9. What maintenance is required?</strong><br/>
      It is low-maintenance. Only routine cleaning of optics and checking connections are required; no consumables like inks are needed.</p>
    </div>

    <div class="faq-box">
      <p><strong>10. What is the warranty and support?</strong><br/>
      Warranty terms vary. Please contact our sales representative for details on service contracts and technical support.</p>
    </div>
  `,
  specs: ['Laser: Fiber/CO2', 'Marking Area: Up to 110x110mm'],
  image: '/images/I-NAX Laser Marking Workstation Design.png'
},
    {
  id: 'i-nax-industrial-press-brake-machine',
  name: 'i-NAX Industrial Press Brake Machine',
  description: 'Precision Metal Bending Solution - High-performance machine designed for heavy-duty industrial metal forming.',
  longDescription: `
    <h3>Overview</h3>
    <p>The i-NAX Industrial Press Brake Machine is a high-performance metal bending machine designed for heavy-duty industrial applications. A press brake is a mechanical/hydraulic system used to bend sheet metal and plate into predetermined shapes with precision and repeatability.</p>
    <p>Built with a robust frame and advanced control systems, the i-NAX Press Brake delivers consistent bending quality, high productivity, and long-lasting durability — making it ideal for manufacturers, fabricators, and industrial workshops.</p>

    <h3>Key Features</h3>
    <p>✔ <strong>Heavy-Duty Construction:</strong> Rigid welded steel body designed for minimal deflection. Stress-relieved and annealed structure for enhanced life.</p>
    <p>✔ <strong>Powerful Bending Performance:</strong> Available in a range of tonnages to suit light to heavy gauge metal with smooth ram action.</p>
    <p>✔ <strong>Advanced Control Options:</strong> Optional CNC/NC controllers provide programmable bending sequences and repeatable accuracy.</p>
    <p>✔ <strong>Back Gauge Integration:</strong> Optional multi-axis back gauge improves positioning accuracy and reduces setup time.</p>
    <p>✔ <strong>Safety & Productivity:</strong> Includes emergency stops, safety guards, and multiple cycle modes (Inch, Single, Auto).</p>

    <h3>Technical Specifications</h3>
    <table class="spec-table">
      <thead>
        <tr><th>Specification</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>Machine Type</td><td>Industrial Press Brake</td></tr>
        <tr><td>Bending Capacity</td><td>20 T to 400 T (Customizable)</td></tr>
        <tr><td>Bending Length</td><td>1500 mm – 6500 mm</td></tr>
        <tr><td>Control Type</td><td>CNC / NC / Semi-Automatic / Manual</td></tr>
        <tr><td>Motor Power</td><td>e.g., 7.5 kW Siemens Motor</td></tr>
        <tr><td>Frame Material</td><td>Heavy-duty Welded Steel</td></tr>
        <tr><td>Back Gauge</td><td>Optional Motorized / CNC Controlled</td></tr>
        <tr><td>Safety Features</td><td>Emergency Stop / Guards</td></tr>
      </tbody>
    </table>
    <p><small>* Specifications can be tailored to your precise product requirements.</small></p>

    <h3>Common Applications</h3>
    <p>The i-NAX Press Brake Machine is used across a wide spectrum of industries:</p>
    <p>🔹 Automotive component fabrication<br/>
    🔹 Sheet metal fabrication units<br/>
    🔹 Construction and architectural metalwork<br/>
    🔹 Electrical enclosures and panel production<br/>
    🔹 Aerospace parts manufacturing</p>

    <h3>Why Choose i-NAX Press Brake?</h3>
    <p>✅ <strong>Precision Bending:</strong> Consistent results with tight tolerances.<br/>
    ✅ <strong>Flexible Control:</strong> From manual operation to full CNC automation.<br/>
    ✅ <strong>Durable & Reliable:</strong> Built for high-volume industrial production.<br/>
    ✅ <strong>Operator Friendly:</strong> Intuitive controls and advanced safety mechanisms.</p>

    <h3>Available Models & Configurations</h3>
    <p>• <strong>Entry-level NC Press Brake:</strong> Basic numeric control for cost-effective bending.<br/>
    • <strong>CNC Press Brake:</strong> Programmable for complex parts and repeat production.<br/>
    • <strong>High-Tonnage Hydraulic:</strong> For thick materials and heavy-duty applications.</p>

    <h3>Recommended Accessories</h3>
    <p>✔ Back Gauge System (Motorized/DRO)<br/>
    ✔ Automatic Lubrication<br/>
    ✔ Extra tooling sets<br/>
    ✔ CNC multi-axis controls</p>

    <div class="faq-box" style="background: #eff6ff; border-left-color: #1e40af;">
      <p><strong>Add to Your Production Floor</strong><br/>
      Equip your workshop with the i-NAX Press Brake to boost productivity. Contact us for custom configurations.</p>
    </div>

    <h3>FAQs – i-NAX Industrial Press Brake Machine</h3>
    <div class="faq-box">
      <p><strong>1. What is an i-NAX Industrial Press Brake Machine?</strong><br/>
      It is a heavy-duty metal bending machine designed to bend sheet metal and plates into precise shapes such as angles and channels with high accuracy.</p>
    </div>

    <div class="faq-box">
      <p><strong>2. Which industries use i-NAX press brake machines?</strong><br/>
      Widely used in sheet metal fabrication, automotive, electrical panels, construction, and industrial machinery manufacturing.</p>
    </div>

    <div class="faq-box">
      <p><strong>3. Is it suitable for heavy-duty applications?</strong><br/>
      Yes. Built with a rigid welded steel frame and a powerful hydraulic system, it is designed for continuous, heavy-duty industrial operations.</p>
    </div>

    <div class="faq-box">
      <p><strong>4. What control options are available?</strong><br/>
      Available with Manual control, NC (Numeric Control), and CNC (Computer Numerical Control) options.</p>
    </div>

    <div class="faq-box">
      <p><strong>5. What materials can be bent?</strong><br/>
      The machine can bend Mild steel, Stainless steel, Aluminum, and other sheet metals depending on tonnage.</p>
    </div>

    <div class="faq-box">
      <p><strong>6. What is the bending capacity of the machine?</strong><br/>
      Typically ranges from 20 tons to 400 tons. Custom capacities are available on request.</p>
    </div>

    <div class="faq-box">
      <p><strong>7. Does the machine support CNC back gauge systems?</strong><br/>
      Yes. It can be equipped with motorized or CNC-controlled multi-axis back gauges for precise positioning.</p>
    </div>

    <div class="faq-box">
      <p><strong>8. Is operator safety ensured?</strong><br/>
      Yes. Safety features include emergency stop buttons, safety guards, and controlled operating modes for a safe environment.</p>
    </div>
  `,
  specs: ['Bending: 20T to 400T', 'Length: 1.5m to 6.5m'],
  image: '/images/I-NAX Industrial Press Brake Machine.png'
},
    {
  id: 'i-nax-cnc-router-with-controller',
  name: 'i-NAX CNC Router with Controller',
  description: 'Precision CNC Router for Wood, Acrylic, MDF, Plastic & More - High-performance machine for accurate cutting and engraving.',
  longDescription: `
    <h3>Overview</h3>
    <p>The i-NAX CNC Router with Controller is a high-performance CNC machine designed for accurate and smooth cutting, engraving, and shaping across a wide range of materials. Built for modern manufacturing needs, this router delivers consistent results with excellent stability and reliability.</p>

    <h3>Key Features</h3>
    <h4>✅ High Precision Cutting</h4>
    <p>• Advanced CNC control for accurate and repeatable cuts.<br/>
    • High rigidity structure for smooth operation.<br/>
    • Excellent finish quality with minimal vibration.</p>

    <h4>✅ Powerful Controller</h4>
    <p>• User-friendly CNC controller with easy operation.<br/>
    • Supports multiple file formats (G-code compatible).<br/>
    • Smooth motion control for precise cutting.</p>

    <h4>✅ Versatile Material Compatibility</h4>
    <p>Ideal for Wood & Plywood, MDF, Acrylic & Plastic, Foam & Composites, and Aluminum (depending on model).</p>

    <h4>✅ Strong & Durable Build</h4>
    <p>• Heavy-duty frame for stability.<br/>
    • Long-lasting performance with minimal maintenance.<br/>
    • Designed for industrial use.</p>

    <h3>Technical Specifications</h3>
    <table class="spec-table">
      <thead>
        <tr><th>Specification</th><th>Details</th></tr>
      </thead>
      <tbody>
        <tr><td>Working Area</td><td>1300 x 2500 mm (customizable)</td></tr>
        <tr><td>Spindle Power</td><td>2.2 kW / 3.0 kW (optional)</td></tr>
        <tr><td>Controller</td><td>DSP / Mach3 / Offline Controller</td></tr>
        <tr><td>Drive System</td><td>Stepper / Servo (optional)</td></tr>
        <tr><td>Max Speed</td><td>18,000 RPM</td></tr>
        <tr><td>Repeatability</td><td>±0.02 mm</td></tr>
        <tr><td>Power Supply</td><td>220V / 380V (optional)</td></tr>
        <tr><td>Cooling System</td><td>Air / Water Cooling</td></tr>
      </tbody>
    </table>
    <p><small>* Note: Specifications can be customized as per customer requirements.</small></p>

    <h3>Why Choose i-NAX CNC Router?</h3>
    <p>🔹 <strong>Superior Precision:</strong> Engineered for accuracy, ensuring clean edges and detailed finishing.<br/>
    🔹 <strong>Easy to Operate:</strong> User-friendly controller suitable for both beginners and professionals.<br/>
    🔹 <strong>Reliable Performance:</strong> Built with strong mechanical parts to withstand heavy workshop use.<br/>
    🔹 <strong>Customizable:</strong> Custom sizes, spindle power, and controller options available.</p>

    <h3>Applications</h3>
    <p>Perfect for industries such as:</p>
    <p>🔹 Furniture manufacturing<br/>
    🔹 Signboard & Advertising<br/>
    🔹 Cabinet making<br/>
    🔹 Interior decoration<br/>
    🔹 Prototyping & Manufacturing</p>

    <h3>Optional Accessories</h3>
    <p>✔ Dust Collector<br/>
    ✔ Automatic Tool Changer (ATC)<br/>
    ✔ Vacuum Table<br/>
    ✔ Servo Motor Upgrade<br/>
    ✔ Tool Set & Safety Cover</p>

    <h3>Package Includes</h3>
    <p>• i-NAX CNC Router Machine<br/>
    • Controller & Power Cable<br/>
    • Tool Set (as per model)<br/>
    • Installation & User Manual<br/>
    • Warranty Card</p>

    <div class="faq-box" style="background: #f0fdf4; border-left-color: #16a34a;">
      <p><strong>📞 Contact for Quote</strong><br/>
      For pricing, customization, and demo, please contact our expert team.</p>
    </div>

    <h3>FAQs</h3>
    <div class="faq-box">
      <p><strong>1. What is i-NAX CNC Router with Controller?</strong><br/>
      It is a high-performance CNC machine designed for cutting, engraving, and shaping materials like wood, MDF, and acrylic, featuring an integrated easy-to-use controller.</p>
    </div>

    <div class="faq-box">
      <p><strong>2. What materials can it cut?</strong><br/>
      It handles Wood, plywood, MDF, particle board, Acrylic, plastic, foam, composites, and Aluminum (model specific).</p>
    </div>

    <div class="faq-box">
      <p><strong>3. What controller does it use?</strong><br/>
      It supports DSP, Mach3, and Offline Controllers, making it compatible with standard G-code files.</p>
    </div>

    <div class="faq-box">
      <p><strong>4. Can the machine size be customized?</strong><br/>
      Yes, the working area and machine size can be customized according to your production requirements.</p>
    </div>

    <div class="faq-box">
      <p><strong>5. Is the machine suitable for industrial use?</strong><br/>
      Yes, the heavy-duty frame and durable components make it ideal for industrial and workshop environments.</p>
    </div>

    <div class="faq-box">
      <p><strong>6. Do you provide installation and training?</strong><br/>
      Yes, we provide full installation support and basic operator training.</p>
    </div>

    <div class="faq-box">
      <p><strong>7. What is the warranty period?</strong><br/>
      Warranty depends on the specific model and package. Contact us for details.</p>
    </div>

    <div class="faq-box">
      <p><strong>8. Do you offer spare parts?</strong><br/>
      Yes, we provide complete after-sales service including genuine spare parts for the i-NAX series.</p>
    </div>
  `,
  specs: ['Controller: DSP/Mach3', 'Repeatability: ±0.02 mm'],
  image: '/images/I-NAX CNC Router with Controller.png'
},
    {
  id: 'i-nax-cnc-router-precision-machinery',
  name: 'i-NAX CNC Router Precision Machinery',
  description: 'High-Performance Industrial CNC Router designed for industrial-grade precision machining across a wide range of materials.',
  longDescription: `
    <h3>Overview</h3>
    <p><strong>High-Performance Industrial CNC Router</strong></p>
    <p>The i-NAX CNC Router Precision Machine is a heavy-duty, computer-controlled cutting and engraving solution designed for industrial-grade precision machining across a wide range of materials. It combines advanced motion control, rigid structural design, and versatile software integration to deliver consistent, reliable, and high-precision results for woodworking, signage, prototyping, and manufacturing applications.</p>
    <p>CNC routers automate complex cutting, milling, and engraving operations by interpreting CAD/CAM files into precise tool paths.</p>

    <h3>Key Features & Capabilities</h3>
    <p>✅ <strong>Industrial-Strength Build</strong><br/>
    • Heavy welded steel frame and rigid gantry for maximum stability and reduced vibration.<br/>
    • High-precision linear guide rails and ball screw (Z-axis) or rack-and-pinion drives (X/Y) for smooth motion.</p>

    <p>✅ <strong>Precision Motion Control</strong><br/>
    • Advanced motion systems deliver repeatability and positioning accuracy within ±0.01–0.05 mm.<br/>
    • CNC control system compatible with G-code, supporting standard CAD/CAM workflows.</p>

    <p>✅ <strong>Versatile Spindle Options</strong><br/>
    • High-speed spindles capable of reaching up to ~24,000 RPM for clean, accurate cuts.<br/>
    • Optional air-cooled or water-cooled spindle configurations to match production needs.</p>

    <p>✅ <strong>Large & Flexible Working Area</strong><br/>
    • Ideal for large format workpieces with customizable bed sizes (e.g., 1300 × 2500 mm and larger).<br/>
    • Optional vacuum or T-slot table configurations to secure materials firmly.</p>

    <p>✅ <strong>Software & Controller Support</strong><br/>
    • Integrates with popular CAD/CAM software — such as ArtCAM, Type3, Aspire, Ucancam.<br/>
    • Control options include DSP controller, NCStudio, Mach3, etc.</p>

    <h3>Applications & Use Cases</h3>
    <p>The i-NAX CNC Router Precision Machine is built for diverse industry applications:</p>
    <p>🔹 <strong>Woodworking & Furniture:</strong> Doors, cabinetry, custom panels, routing, and joinery.<br/>
    🔹 <strong>Signage & Advertising:</strong> Precise cutting/engraving of acrylic, PVC, foam, composite boards.<br/>
    🔹 <strong>Prototyping & Models:</strong> Rapid prototyping of parts from wood, plastic, and non-ferrous metals.<br/>
    🔹 <strong>Architectural Components:</strong> Intricate molding, panels, trim, and 3D relief work.<br/>
    🔹 <strong>Light Metal Machining:</strong> Works efficiently with soft metals like aluminum and brass.</p>

    <h3>Typical Specifications (Example)</h3>
    <table class="spec-table">
      <thead>
        <tr><th>Parameter</th><th>Details</th></tr>
      </thead>
      <tbody>
        <tr><td>🔧 Working Area</td><td>~1300 × 2500 × 200–300 mm</td></tr>
        <tr><td>⚙️ Spindle Speed</td><td>0 – 24,000 RPM</td></tr>
        <tr><td>🛠️ Transmission</td><td>Rack & pinion (X/Y), Ball screw (Z)</td></tr>
        <tr><td>📍 Positioning Accuracy</td><td>±0.01 mm (typical)</td></tr>
        <tr><td>💻 Control System</td><td>G-code compatible; DSP/NCStudio</td></tr>
        <tr><td>🪑 Table Type</td><td>T-slot or vacuum bed (optional)</td></tr>
        <tr><td>🔌 Power Requirements</td><td>220 V / 380 V three-phase</td></tr>
      </tbody>
    </table>
    <p><small>* Actual specifications vary by configuration and model variant.</small></p>

    <h3>Why Choose i-NAX CNC Router?</h3>
    <p>✔ <strong>Precision & Repeatability</strong> — Engineered for consistent, high-quality output.<br/>
    ✔ <strong>Robust & Durable Construction</strong> — Designed to withstand heavy industrial use.<br/>
    ✔ <strong>Software Flexibility</strong> — Seamless integration with major CAD/CAM tools.<br/>
    ✔ <strong>Versatile Material Support</strong> — From soft woods to acrylics and light metals.</p>

    <h3>FAQ</h3>
    <div class="faq-box">
      <p><strong>1. What is the i-NAX CNC Router Precision Machine?</strong><br/>
      The i-NAX CNC Router is an industrial-grade CNC routing machine designed for precise cutting, carving, and engraving across various materials.</p>
    </div>

    <div class="faq-box">
      <p><strong>2. What materials can it work with?</strong><br/>
      It can process wood, MDF, plywood, acrylic, PVC, foam, composites, and light metals such as aluminum (with proper tooling).</p>
    </div>

    <div class="faq-box">
      <p><strong>3. What is the working area size?</strong><br/>
      The working area is customizable. Typical sizes include 1300×2500 mm or larger depending on requirements.</p>
    </div>

    <div class="faq-box">
      <p><strong>4. What software does it support?</strong><br/>
      It is compatible with standard CAD/CAM software like ArtCAM, Type3, Aspire, Ucancam, and supports G-code.</p>
    </div>

    <div class="faq-box">
      <p><strong>5. What is the spindle speed?</strong><br/>
      It supports high-speed spindles up to 24,000 RPM, depending on the model and configuration.</p>
    </div>

    <div class="faq-box">
      <p><strong>6. What are the main benefits?</strong><br/>
      High accuracy, sturdy construction, smooth motion control, flexible software integration, and suitability for mass production.</p>
    </div>

    <div class="faq-box">
      <p><strong>7. Do you provide installation and training?</strong><br/>
      Yes, we provide installation, commissioning, and operator training to help you start production quickly.</p>
    </div>

    <div class="faq-box">
      <p><strong>8. What is the power requirement?</strong><br/>
      Power requirements typically range between 220V or 380V (3-phase) depending on the configuration.</p>
    </div>
  `,
  specs: ['Accuracy: ±0.01 mm', 'Spindle: Up to 24,000 RPM'],
  image: '/images/I-NAX CNC Router Precision Machinery.png'
},
    {
  id: 'i-nax-cnc-router-machine-setup',
  name: 'i-NAX CNC Router Machine',
  description: 'Precision CNC Router for Wood, MDF, Acrylic, and Composites - High-performance cutting and engraving.',
  longDescription: `
    <h3>Overview</h3>
    <p><strong>Precision CNC Router for Wood, MDF, Acrylic, and Composites</strong></p>
    <p>The i-NAX CNC Router Machine is a high-performance CNC router designed for precision cutting, engraving, and shaping of wood, MDF, acrylic, PVC, aluminum, and composite materials. Built for modern manufacturing, this machine is perfect for furniture, sign boards, interior decor, and industrial applications.</p>

    <h3>Key Features</h3>
    <p>✔ High Precision & Accuracy<br/>
    ✔ Rigid Machine Structure for Stability<br/>
    ✔ High-Speed Spindle for Fast Cutting<br/>
    ✔ Easy-to-Use Control System<br/>
    ✔ Low Noise & Smooth Operation<br/>
    ✔ Durable Linear Guides & Ball Screws<br/>
    ✔ Automatic Tool Change (Optional)<br/>
    ✔ Dust Collection & Safety Features</p>

    <h3>Applications</h3>
    <p>The i-NAX CNC Router is widely used in:</p>
    <p>🔹 Furniture Manufacturing<br/>
    🔹 Kitchen Cabinet & Wardrobe Cutting<br/>
    🔹 Sign Board & Advertising Industry<br/>
    🔹 Interior Decoration Panels<br/>
    🔹 Acrylic & Plastic Cutting<br/>
    🔹 3D Carving & Engraving<br/>
    🔹 Model Making & Prototyping<br/>
    🔹 Composite Material Cutting</p>

    <h3>Technical Specifications (Standard Model)</h3>
    <table class="spec-table">
      <thead>
        <tr><th>Parameter</th><th>Specification</th></tr>
      </thead>
      <tbody>
        <tr><td>Working Area</td><td>1300 x 2500 mm / 1500 x 3000 mm (Customizable)</td></tr>
        <tr><td>Spindle Power</td><td>3.0 kW / 4.5 kW / 6.0 kW</td></tr>
        <tr><td>Spindle Speed</td><td>0–24000 RPM</td></tr>
        <tr><td>Drive System</td><td>Servo Motor / Stepper Motor</td></tr>
        <tr><td>Control System</td><td>DSP / Mach3 / NC Studio</td></tr>
        <tr><td>Machine Body</td><td>Heavy-duty Welded Steel Structure</td></tr>
        <tr><td>Linear Guides</td><td>HIWIN / PMI</td></tr>
        <tr><td>Ball Screw</td><td>Taiwan HIWIN / TBI</td></tr>
        <tr><td>Positioning Accuracy</td><td>±0.05 mm</td></tr>
        <tr><td>Repeatability</td><td>±0.03 mm</td></tr>
        <tr><td>Power Supply</td><td>3 Phase, 380V (Customizable)</td></tr>
        <tr><td>Cooling System</td><td>Water Cooling / Air Cooling</td></tr>
        <tr><td>Dust Collection</td><td>Optional</td></tr>
      </tbody>
    </table>

    <h3>Benefits of i-NAX CNC Router</h3>
    <p>✅ High Accuracy & Smooth Finish<br/>
    ✅ Faster Production with Automation<br/>
    ✅ Low Maintenance & Long Life<br/>
    ✅ Easy Operation for Beginners & Experts<br/>
    ✅ Versatile for Multiple Materials<br/>
    ✅ High Productivity & Consistency</p>

    <h3>Why Choose i-NAX CNC Router?</h3>
    <p>i-NAX CNC Router Machines are engineered for reliable performance, precision, and durability. With a strong machine frame, advanced drive systems, and powerful spindle options, i-NAX is built to handle heavy-duty industrial production as well as fine artistic carving.</p>

    <h3>Optional Accessories</h3>
    <p>✔ Automatic Tool Changer (ATC)<br/>
    ✔ Laser Engraving Module<br/>
    ✔ Vacuum Table<br/>
    ✔ Automatic Dust Collector<br/>
    ✔ 4th Axis Rotary Attachment<br/>
    ✔ Online Remote Support</p>

    <div class="faq-box" style="background: #fff7ed; border-left-color: #f97316;">
      <p><strong>📌 Ready to upgrade your production?</strong><br/>
      Contact us today for a demo and price quote.</p>
    </div>

    <h3>FAQ Section</h3>
    <div class="faq-box">
      <p><strong>1. What materials can the i-NAX CNC Router handle?</strong><br/>
      The i-NAX CNC Router is capable of cutting and engraving a wide range of materials, including wood, MDF, plywood, acrylic, PVC, foam, composites, and light aluminum.</p>
    </div>
    <div class="faq-box">
      <p><strong>2. What is the machine’s working area?</strong><br/>
      The working area can be tailored to your production needs. Standard options include 1300 × 2500 mm, 1500 × 3000 mm, and 2000 × 3000 mm.</p>
    </div>
    <div class="faq-box">
      <p><strong>3. Which control systems are compatible?</strong><br/>
      The machine supports DSP, Mach3, and NC Studio control systems, allowing you to select the one that best suits your workflow.</p>
    </div>
    <div class="faq-box">
      <p><strong>4. What is the spindle power and speed?</strong><br/>
      Spindle power options are 3.0 kW, 4.5 kW, and 6.0 kW, with speeds up to 24,000 RPM depending on the model.</p>
    </div>
    <div class="faq-box">
      <p><strong>5. Is the machine suitable for industrial production?</strong><br/>
      Yes, i-NAX CNC Router is designed for industrial manufacturing, offering high accuracy, stability, and long-term performance.</p>
    </div>
    <div class="faq-box">
      <p><strong>6. Do you provide installation and training?</strong><br/>
      Yes, we provide installation, commissioning, and operator training for smooth and efficient machine operation.</p>
    </div>
    <div class="faq-box">
      <p><strong>7. Can the machine be customized?</strong><br/>
      Yes, the machine can be customized in working size, spindle power, control system, and accessories based on your production needs.</p>
    </div>
    <div class="faq-box">
      <p><strong>8. What is the warranty and after-sales support?</strong><br/>
      We offer 1-year warranty along with reliable after-sales support, spare parts availability, and service support.</p>
    </div>
    <div class="faq-box">
      <p><strong>9. Do you offer any accessories?</strong><br/>
      Yes, optional accessories include Automatic Tool Changer (ATC), Vacuum Table, 4th Axis Rotary, Laser Module, and Dust Collector.</p>
    </div>
    <div class="faq-box">
      <p><strong>10. How can I get a quote or demo?</strong><br/>
      You can contact us through our website Contact Us page, call us, or email for a free demo, site visit, and price quotation.</p>
    </div>
  `,
  specs: ['Area: 1300x2500 mm (Customizable)', 'Spindle: 3.0 - 6.0 kW'],
  image: '/images/I-NAX CNC Router Machine Setup.png'
},
    {
  id: 'i-nax-cnc-milling-machine-showcase',
  name: 'i-NAX CNC Milling Machine',
  description: 'Precision Machining for the Modern Manufacturer - High precision, exceptional surface finish, and repeatable performance.',
  longDescription: `
    <h3>Overview</h3>
    <p><strong>Precision Machining for the Modern Manufacturer</strong></p>
    <p>The i-NAX CNC Milling Machine is a state-of-the-art computer-controlled machining centre engineered to deliver high precision, exceptional surface finish, and repeatable performance for a wide range of industrial and precision manufacturing applications.</p>
    <p>Built on advanced CNC technology and rigid mechanical design, the i-NAX is ideal for challenging production environments — from prototype development to full-scale manufacturing of metal, composites, and engineered plastics.</p>

    <h3>Why Choose the i-NAX CNC Milling Machine?</h3>
    <p>🔹 <strong>Automated Precision Manufacturing:</strong> Through Computer Numerical Control (CNC), the i-NAX executes complex milling programs with minimal human intervention, ensuring high accuracy across production runs.</p>
    <p>🔹 <strong>Versatile Machining Capabilities:</strong> Built to process a variety of materials—metals like aluminium, steel, brass, and titanium, as well as plastics and composites.</p>
    <p>🔹 <strong>Multi-Axis Control:</strong> Offers configurations from 3-axis up to 5-axis and beyond, enabling advanced tool paths for complex geometries while reducing setups.</p>
    <p>🔹 <strong>CAM & CAD Integration:</strong> Compatible with standard CAD/CAM software, the i-NAX reads G-code to execute precise tool paths, streamlining workflow efficiency.</p>

    <h3>Key Features</h3>
    <p>✔ <strong>Computer Numerical Control (CNC)</strong> for reliable automation and precision.<br/>
    ✔ <strong>Rigid Mechanical Structure</strong> for stability and vibration damping, ensuring quality surface finishes.<br/>
    ✔ <strong>Multi-Axis Machining Options</strong> (3, 4, or 5 axes) to support complex parts without repositioning.<br/>
    ✔ <strong>High-Performance Spindle System</strong> capable of wide RPM ranges to suit different materials.<br/>
    ✔ <strong>Advanced Tool Changer System</strong> for automated tool swaps, improving throughput.<br/>
    ✔ <strong>User-Friendly CNC Interface</strong> with support for standard industry software.</p>

    <h3>Typical Applications</h3>
    <p>The i-NAX CNC Milling Machines excel across industries where precision matters:</p>
    <p>🔹 <strong>Automotive:</strong> Engine components, structural brackets, precision housings.<br/>
    🔹 <strong>Aerospace:</strong> Complex airframe parts, turbine components, precision tooling.<br/>
    🔹 <strong>Medical:</strong> Surgical instrument parts, implants, prosthetics.<br/>
    🔹 <strong>Tool & Die:</strong> Moulds, fixtures, high-tolerance tooling.<br/>
    🔹 <strong>Electronics:</strong> Precision enclosures, connectors, heat sinks.</p>

    <h3>How CNC Milling Works</h3>
    <p>CNC milling is a subtractive machining process where a rotating cutting tool removes material from a workpiece to create the desired shape. Starting from a CAD design, the path is translated into machine-readable G-code that guides the tool’s movement along multiple axes.</p>

    

    <h3>Benefits of i-NAX CNC Milling Machine</h3>
    <p>✅ <strong>High Precision & Repeatability</strong> — Essential for tight tolerances.<br/>
    ✅ <strong>Increased Productivity</strong> — Faster setups and automated operation.<br/>
    ✅ <strong>Reduced Operator Dependency</strong> — CNC automation minimizes manual intervention.<br/>
    ✅ <strong>Flexible for Multiple Materials</strong> — From metals to plastics and composites.</p>

    <h3>Ideal For</h3>
    <p>Manufacturers, precision engineering firms, product developers, toolmakers, and high-volume production facilities aiming for consistent part quality and operational efficiency.</p>

    <h3>FAQ Section</h3>
    <div class="faq-box">
      <p><strong>Q1. What is the i-NAX CNC Milling Machine?</strong><br/>
      A: The i-NAX CNC Milling Machine is a computer-controlled machining center designed for precise material removal using CNC technology to produce complex components.</p>
    </div>

    <div class="faq-box">
      <p><strong>Q2. What materials can i-NAX CNC Milling Machine work on?</strong><br/>
      A: i-NAX can machine a wide range of materials including aluminium, steel, brass, titanium, plastics, and composites.</p>
    </div>

    <div class="faq-box">
      <p><strong>Q3. Which industries use i-NAX CNC Milling Machine?</strong><br/>
      A: It is widely used in automotive, aerospace, electronics, medical, tool & die, and general industrial manufacturing.</p>
    </div>

    <div class="faq-box">
      <p><strong>Q4. What are the advantages of using i-NAX CNC Milling Machine?</strong><br/>
      A: High precision, faster production, less human error, flexible machining, and better surface finish.</p>
    </div>

    <div class="faq-box">
      <p><strong>Q5. Does i-NAX support multi-axis machining?</strong><br/>
      A: Yes. i-NAX supports multi-axis machining (3-axis, 4-axis, or 5-axis) depending on the model configuration.</p>
    </div>

    <div class="faq-box">
      <p><strong>Q6. Can i-NAX CNC Milling Machine integrate with CAD/CAM software?</strong><br/>
      A: Yes. It is compatible with standard CAD/CAM systems and can execute programs through G-code.</p>
    </div>

    <div class="faq-box">
      <p><strong>Q7. Is the i-NAX CNC Milling Machine suitable for mass production?</strong><br/>
      A: Yes. Its automation and repeatability make it ideal for both prototype development and large-scale production.</p>
    </div>

    <div class="faq-box">
      <p><strong>Q8. How is the maintenance of i-NAX CNC Milling Machine?</strong><br/>
      A: Regular maintenance includes cleaning, lubrication, tool inspection, coolant monitoring, and periodic calibration. Our service team provides full support.</p>
    </div>

    <div class="faq-box">
      <p><strong>Q9. Can i-NAX CNC Milling Machine be customized?</strong><br/>
      A: Yes. We offer customized configurations based on your application needs, material requirements, and production goals.</p>
    </div>
  `,
  specs: ['Axis Control: 3, 4, or 5 Axis', 'Materials: Metals, Plastics, Composites'],
  image: '/images/I-NAX CNC Milling Machine Showcase.png'
},
    {
  id: 'i-kraft-cnc-router-system',
  name: 'i-KRAFT™ CNC Router System Machine',
  description: 'High-performance CNC routing solution engineered for precision manufacturing applications.',
  longDescription: `
    <h3>Overview</h3>
    <p>The i-KRAFT™ CNC Router System Machine is a high-performance CNC routing solution engineered for precision manufacturing applications. Designed with a rigid frame, advanced CNC control, and high-speed spindle, i-KRAFT™ ensures accurate cutting, smooth finishing, and long-term reliability.</p>
    <p>Ideal for furniture manufacturing, signage, woodworking, and plastic processing industries, the i-KRAFT™ CNC Router offers customizable working sizes, powerful spindle options, and stable linear motion systems to meet diverse production needs.</p>
    <p>Manufactured and supported by Mech Chem Engineering Services, the machine delivers dependable performance with strong after-sales support across India.</p>

    <h3>Key Features</h3>
    <p>🔹 Heavy-duty, vibration-free machine structure<br/>
    🔹 High-speed precision spindle<br/>
    🔹 Accurate linear guideway & ball screw system<br/>
    🔹 User-friendly CNC controller<br/>
    🔹 Smooth and repeatable cutting performance<br/>
    🔹 Custom machine sizes available</p>

    <h3>Applications</h3>
    <p>🔹 Furniture & Modular Kitchen Manufacturing<br/>
    🔹 Wood Carving & Panel Processing<br/>
    🔹 Signage & Advertising Industry<br/>
    🔹 Acrylic, PVC & Plastic Cutting<br/>
    🔹 ACP Sheet Routing<br/>
    🔹 Prototyping & Pattern Making</p>

    <h3>Technical Specifications</h3>
    <table class="spec-table">
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Working Area</td><td>Customizable</td></tr>
        <tr><td>Spindle Power</td><td>3.5 kW – 9 kW (Optional)</td></tr>
        <tr><td>Controller</td><td>DSP / NC Studio / Syntec</td></tr>
        <tr><td>Drive System</td><td>Servo / Stepper</td></tr>
        <tr><td>Structure</td><td>Heavy-duty MS Fabricated</td></tr>
        <tr><td>Accuracy</td><td>High Precision & Repeatability</td></tr>
        <tr><td>Power Supply</td><td>Single / Three Phase</td></tr>
      </tbody>
    </table>
    <p><small>* Specifications may vary based on configuration</small></p>

    <h3>Why Choose i-KRAFT™?</h3>
    <p>✔ Built for Indian industrial conditions<br/>
    ✔ Low maintenance & high productivity<br/>
    ✔ Custom-built solutions available<br/>
    ✔ Trusted engineering support<br/>
    ✔ Backed by Mech Chem Engineering Services</p>

    <div class="faq-box" style="background: #e0f2fe; border-left-color: #0369a1;">
      <p><strong>Looking for a reliable CNC Router solution?</strong><br/>
      📞 Contact us today for pricing, demos, and custom configurations.</p>
    </div>

    <h3>Brand Trust</h3>
    <p>i-KRAFT™ CNC Router Machine by Mech Chem Engineering Services offers precision routing, heavy-duty build & reliable CNC performance.</p>

    <h3>FAQ for i-KRAFT™ CNC Router System</h3>
    
    <div class="faq-box">
      <p><strong>1. What materials can the i-KRAFT CNC Router cut?</strong><br/>
      The i-KRAFT CNC Router can cut and engrave a wide range of materials including wood, MDF, plywood, acrylic, PVC, foam, and soft metals like aluminium (depending on spindle and tooling).</p>
    </div>

    <div class="faq-box">
      <p><strong>2. What is the working area of the machines?</strong><br/>
      The machine’s working area can be customized to suit your production needs, with multiple table sizes available to fit various industry requirements.</p>
    </div>

    <div class="faq-box">
      <p><strong>3. What spindle power options are available?</strong><br/>
      Spindle power options range from 3.5 kW to 9 kW (depending on your application). We can suggest the best spindle based on your material and cutting depth requirements.</p>
    </div>

    <div class="faq-box">
      <p><strong>4. Is the machine suitable for industrial production?</strong><br/>
      Yes, the i-KRAFT CNC Router is built with a heavy-duty frame and precision motion system, making it suitable for continuous industrial production.</p>
    </div>

    <div class="faq-box">
      <p><strong>5. Do you provide installation and training?</strong><br/>
      Yes. We provide complete installation, commissioning, and operator training for every machine purchased.</p>
    </div>

    <div class="faq-box">
      <p><strong>6. Which CNC controller is used in the machine?</strong><br/>
      The machine supports DSP / NC Studio / Syntec controllers depending on your preference and requirements.</p>
    </div>

    <div class="faq-box">
      <p><strong>7. Can the machine be customized?</strong><br/>
      Yes. We offer custom configurations including table size, spindle power, controller type, and optional accessories based on your production needs.</p>
    </div>

    <div class="faq-box">
      <p><strong>8. Do you provide spare parts and service support?</strong><br/>
      Yes. Mech Chem Engineering Services provides after-sales support, spare parts, and maintenance assistance across India.</p>
    </div>

    <div class="faq-box">
      <p><strong>9. What is the power supply requirement?</strong><br/>
      The machine can operate on single-phase or three-phase power supply, depending on the model and configuration.</p>
    </div>

    <div class="faq-box">
      <p><strong>10. How can I get pricing and quotation?</strong><br/>
      You can contact us via phone or email, or fill the inquiry form on the product page. We will provide a detailed quote based on your required machine configuration.</p>
    </div>
  `,
  specs: ['Spindle: 3.5 kW – 9 kW', 'Accuracy: High Precision'],
  image: '/images/I-KRAFT CNC Router System.png'
},
    {
        id: 'i-kraft-5-axis-cnc-router--control',
        name: 'I-KRAFT 5-Axis CNC Router & Control',
        description: 'High-precision multi-directional machining for complex components.',
        longDescription: `
        <h3>Overview</h3>
        <p>The i-KRAFT 5-Axis CNC Router and Control Machine is engineered for high-precision, multi-directional machining of complex components. Designed for modern manufacturing environments, it enables simultaneous movement across five axes, delivering superior accuracy, smoother finishes, and reduced setup time.</p>
        <p>Built with a rigid machine structure, advanced CNC control system, and high-performance spindle options, i-KRAFT ensures reliable operation for demanding applications. It is ideal for industries requiring intricate cutting, contouring, drilling, and engraving with consistent repeatability.</p>
        <p>With intelligent motion control, user-friendly interface, and robust safety features, the i-KRAFT 5-Axis CNC Router maximizes productivity while minimizing downtime—making it a powerful solution for precision manufacturing.</p>

        <h3>Key Applications</h3>
        <p>The i-KRAFT 5-Axis CNC Router excels in:</p>
        <p>🔹 Aerospace & defense components<br/>
        🔹 Automotive prototypes & molds<br/>
        🔹 Furniture & wood processing<br/>
        🔹 Die, mold & pattern making<br/>
        🔹 Composite, plastic & aluminum machining</p>

        <h3>Key Features</h3>
        <p>✔ <strong>True 5-Axis Simultaneous Machining</strong><br/>Enables complex geometry machining with higher precision and fewer setups.</p>
        <p>✔ <strong>Heavy-Duty Rigid Machine Structure</strong><br/>Designed for vibration-free operation and long-term dimensional stability.</p>
        <p>✔ <strong>Advanced CNC Control System</strong><br/>Smooth interpolation, high-speed processing, and user-friendly interface.</p>
        <p>✔ <strong>High-Performance Spindle Options</strong><br/>Suitable for high-speed cutting and continuous industrial operation.</p>
        <p>✔ <strong>Precision Linear Guideways & Ball Screws</strong><br/>Ensures accurate positioning, smooth movement, and excellent repeatability.</p>
        <p>✔ <strong>Rotary & Tilting Axis Configuration</strong><br/>Allows multi-angle machining for intricate parts and contours.</p>
        <p>✔ <strong>Efficient Tool Management</strong><br/>Supports automatic tool change (ATC) for improved productivity.</p>
        <p>✔ <strong>Enhanced Safety & Reliability</strong><br/>Integrated limit switches, overload protection, and emergency stop systems.</p>

        <h3>Technical Specifications (Indicative – Customizable)</h3>
        <table class="spec-table">
        <thead>
            <tr><th>Parameter</th><th>Specification</th></tr>
        </thead>
        <tbody>
            <tr><td>Machine Type</td><td>5 Axis CNC Router Machine</td></tr>
            <tr><td>Working Area (X × Y × Z)</td><td>As per customer requirement</td></tr>
            <tr><td>Axis Configuration</td><td>X, Y, Z + Rotary (A) + Tilting (C)</td></tr>
            <tr><td>Table Type</td><td>T-Slot / Vacuum Table</td></tr>
            <tr><td>Spindle Power</td><td>6 kW – 15 kW (Optional)</td></tr>
            <tr><td>Spindle Speed</td><td>Up to 24,000 RPM</td></tr>
            <tr><td>Control System</td><td>Advanced CNC Controller</td></tr>
            <tr><td>Drive System</td><td>Servo Motors with Precision Ball Screws</td></tr>
            <tr><td>Guideways</td><td>Heavy-Duty Linear Guideways</td></tr>
            <tr><td>Tool Changer</td><td>Automatic Tool Changer (Optional)</td></tr>
            <tr><td>Positioning Accuracy</td><td>±0.02 mm</td></tr>
            <tr><td>Repeatability</td><td>±0.01 mm</td></tr>
            <tr><td>Power Supply</td><td>415V / 3 Phase / 50 Hz</td></tr>
            <tr><td>Software Compatibility</td><td>Standard CAD/CAM Software</td></tr>
        </tbody>
        </table>

        <h3>Frequently Asked Questions (FAQ)</h3>
        <div class="faq-box">
        <p><strong>Q1. What is a 5-Axis CNC Router machine?</strong><br/>A 5-Axis CNC Router allows machining from five different directions in a single setup, enabling complex shapes, high accuracy, and reduced production time.</p>
        </div>
        <div class="faq-box">
        <p><strong>Q2. What materials can the i-KRAFT 5-Axis CNC Router machine?</strong><br/>It can machine wood, MDF, plastic, composites, aluminum, and other non-ferrous materials depending on tooling and configuration.</p>
        </div>
        <div class="faq-box">
        <p><strong>Q3. Which industries use the i-KRAFT 5-Axis CNC Router?</strong><br/>Common industries include aerospace, automotive, furniture manufacturing, mold & die, and industrial prototyping.</p>
        </div>
        <div class="faq-box">
        <p><strong>Q4. What type of CNC control system is used?</strong><br/>The machine is equipped with an advanced CNC control system designed for smooth motion control, accuracy, and user-friendly operation.</p>
        </div>
        <div class="faq-box">
        <p><strong>Q5. Is customization available for this machine?</strong><br/>Yes, the i-KRAFT 5-Axis CNC Router can be customized based on work size, spindle power, control system, and application requirements.</p>
        </div>
        <div class="faq-box">
        <p><strong>Q6. Does Mech Chem Engineering Services provide installation and support?</strong><br/>Yes, Mech Chem Engineering Services offers professional installation, training, and after-sales support for i-KRAFT CNC machines.</p>
        </div>
    `,
        specs: ['Axes: 5-Axis Simultaneous', 'Spindle: Up to 24,000 RPM'],
        image: '/images/I-KRAFT 5-Axis CNC Router & Control.png'
    },
    {
        id: 'i-kraft-3d-statue-maker-machine',
        name: 'i-KRAFT™ 3D Statue Maker Machine',
        description: 'Precision CNC Sculpting for Art, Architecture & Custom Creations.',
        longDescription: `
    <h3>Overview</h3>
    <p><strong>Precision CNC Sculpting for Art, Architecture & Custom Creations</strong></p>
    <p>The i-KRAFT™ 3D Statue Maker Machine is a high-performance CNC solution designed for accurate, smooth, and detailed 3D carving. i-KRAFT™ is designed for professionals seeking precision and reliability, allowing the creation of statues, idols, sculptures, and intricate 3D forms with exceptional finish and repeatability. Whether working with wood, stone, foam, or soft metals, i-KRAFT™ delivers consistent results for artistic, architectural, and industrial applications.</p>

    <h3>Key Features</h3>
    <p>✔ Advanced 3D CNC Technology for high-precision sculpting<br/>
    ✔ Heavy-Duty Machine Structure for vibration-free performance<br/>
    ✔ High-Accuracy Ball Screws & Linear Guides<br/>
    ✔ Powerful Spindle Motor for deep and detailed carving<br/>
    ✔ Smooth Surface Finish with fine detailing capability<br/>
    ✔ Compatible with Popular CAD/CAM Software<br/>
    ✔ User-Friendly CNC Controller for easy operation<br/>
    ✔ Designed for Continuous Industrial Use</p>

    <h3>Materials Supported</h3>
    <p>🔹 Wood & MDF<br/>
    🔹 Marble & Soft Stone<br/>
    🔹 POP (Plaster of Paris)<br/>
    🔹 Foam & Thermocol<br/>
    🔹 Acrylic<br/>
    🔹 Non-Ferrous Metals (Aluminum, Brass – optional configuration)</p>

    <h3>Applications</h3>
    <p>🔹 3D Statues & Sculptures<br/>
    🔹 Temple Idols & Religious Figures<br/>
    🔹 Architectural Decorative Elements<br/>
    🔹 Artistic & Custom Carvings<br/>
    🔹 Signage & 3D Logos<br/>
    🔹 Prototype Models & Design Concepts</p>

    <h3>Why Choose i-KRAFT™?</h3>
    <p>✅ High Precision & Repeatability<br/>
    ✅ Robust Industrial Build Quality<br/>
    ✅ Customizable Machine Sizes & Specifications<br/>
    ✅ Low Maintenance & Long Service Life<br/>
    ✅ Backed by Mech Chem Engineering Services’ Expertise</p>

    <h3>Optional Customizations</h3>
    <p>• Multi-Axis (4th Axis / Rotary Attachment)<br/>
    • Automatic Tool Changer (ATC)<br/>
    • Higher Power Spindle Options<br/>
    • Dust Collection System<br/>
    • Custom Working Area Sizes</p>

    <h3>Technical Specifications (Indicative)</h3>
    <table class="spec-table">
      <thead>
        <tr><th>Parameter</th><th>Specification</th></tr>
      </thead>
      <tbody>
        <tr><td>Working Area</td><td>Customizable</td></tr>
        <tr><td>Spindle Power</td><td>As per application</td></tr>
        <tr><td>Axis Control</td><td>3 / 4 Axis</td></tr>
        <tr><td>Positioning Accuracy</td><td>High Precision</td></tr>
        <tr><td>Controller</td><td>Industrial CNC Controller</td></tr>
        <tr><td>Power Supply</td><td>3 Phase</td></tr>
      </tbody>
    </table>
    <p><small>(Specifications can be customized based on customer requirements)</small></p>

    <h3>Brand Trust</h3>
    <p>i-KRAFT™ is a premium machine under the I-NAX™ brand, engineered and supported by Mech Chem Engineering Services, delivering reliable industrial machinery solutions since 2012.</p>

    <h3>Frequently Asked Questions (FAQ)</h3>
    <div class="faq-box">
      <p><strong>1. What is the i-KRAFT™ 3D Statue Maker Machine used for?</strong><br/>
      The i-KRAFT™ 3D Statue Maker Machine is used for precision CNC carving of 3D statues, idols, sculptures, decorative panels, and artistic designs. It is suitable for industrial, commercial, and professional carving applications.</p>
    </div>
    <div class="faq-box">
      <p><strong>2. Which materials can be processed on the i-KRAFT™ machine?</strong><br/>
      The machine supports a wide range of materials including wood, MDF, marble, soft stone, POP (Plaster of Paris), foam, thermocol, acrylic, and non-ferrous metals with optional configuration.</p>
    </div>
    <div class="faq-box">
      <p><strong>3. Is the i-KRAFT™ machine suitable for idol and religious statue making?</strong><br/>
      Yes. i-KRAFT™ is widely used for temple idols, religious statues, and detailed sculptural work, offering smooth finishes and accurate detailing required for such applications.</p>
    </div>
    <div class="faq-box">
      <p><strong>4. Does the machine support 4th axis or rotary carving?</strong><br/>
      Yes. The i-KRAFT™ 3D Statue Maker Machine can be equipped with a 4th axis / rotary attachment for complex cylindrical and multi-side 3D carving.</p>
    </div>
    <div class="faq-box">
      <p><strong>5. What CNC software is compatible with this machine?</strong><br/>
      i-KRAFT™ is compatible with most industry-standard CAD/CAM software used for 3D design and carving. This allows easy file preparation and smooth machine operation.</p>
    </div>
    <div class="faq-box">
      <p><strong>6. Can the machine size be customized?</strong><br/>
      Yes. The working area and machine specifications are customizable based on customer requirements, application type, and material size.</p>
    </div>
    <div class="faq-box">
      <p><strong>7. What type of industries can use this machine?</strong><br/>
      The machine is ideal for: Sculpture and statue manufacturers, Temple and religious artwork workshops, Architectural decoration manufacturers, Signage and branding companies, Art studios and prototype developers.</p>
    </div>
    <div class="faq-box">
      <p><strong>8. Is operator training provided with the machine?</strong><br/>
      Yes. Basic operator training and machine operation guidance are provided to ensure smooth installation and efficient usage.</p>
    </div>
    <div class="faq-box">
      <p><strong>9. What kind of maintenance is required?</strong><br/>
      i-KRAFT™ machines are designed for low maintenance. Regular cleaning, lubrication, and basic preventive checks ensure long-term reliable performance.</p>
    </div>
    <div class="faq-box">
      <p><strong>10. Who provides service and technical support?</strong><br/>
      Service and technical support are provided by Mech Chem Engineering Services, ensuring reliable after-sales assistance and expert guidance.</p>
    </div>
    <div class="faq-box">
      <p><strong>11. Is this machine made in India?</strong><br/>
      Yes. The i-KRAFT™ 3D Statue Maker Machine is engineered and supported in India, designed for Indian operating conditions and customer needs.</p>
    </div>
    <div class="faq-box">
      <p><strong>12. How can I get price details or a quotation?</strong><br/>
      You can request pricing by contacting us through the enquiry form, phone, or email. Pricing depends on machine size, axis configuration, and optional features.</p>
    </div>
  `,
        specs: ['Axis: 3 / 4 Axis', 'Materials: Wood, Stone, POP, Foam'],
        image: '/images/I-KRAFT 3D Statue Maker Machine.png'
    },
    {
  id: 'i-nax-metal-lathe-machine',
  name: 'I-NAX Metal Lathe',
  description: 'Precision Machining Machine Tool - High-performance lathe for precision turning, threading, and shaping of metal components.',
  longDescription: `
    <h3>Overview</h3>
    <p>The i-NAX Metal Lathe is a high-performance machine tool designed for precision turning, facing, threading, drilling, and shaping of metal components. Built for durability and accuracy, this lathe delivers reliable results in industrial, workshop, and tool room environments.</p>
    
    <h3>What is a Metal Lathe?</h3>
    <p>A metal lathe is a machine tool that rotates a workpiece against a cutting tool to remove material with precision. It’s used to produce cylindrical, conical, and complex profiles in metal parts, from prototypes to production runs.</p>

    <h3>Key Features & Benefits</h3>
    <p>🔹 <strong>Heavy-Duty Construction:</strong> Robust cast-iron bed and frame for long-term stability and reduced vibration. Features hardened and ground guide ways for smooth movement.<br/>
    🔹 <strong>High Precision Machining:</strong> Engineered to maintain tight tolerances and consistent finishes on turned components.<br/>
    🔹 <strong>Versatile Operations:</strong> Supports core metalworking processes including Turning, Facing, Threading, Boring, and Drilling.<br/>
    🔹 <strong>User-Focused Design:</strong> Adjustable carriage and tailstock for versatile setups. Includes standard chuck and tool post.<br/>
    🔹 <strong>Reliable & Low-Maintenance:</strong> Designed for continuous operation with minimal upkeep, increasing overall productivity.</p>

    <h3>Typical Applications</h3>
    <p>The i-NAX Metal Lathe is ideal for machining:</p>
    <p>• Shafts, pins, and fasteners<br/>
    • Bushings and sleeves<br/>
    • Custom turned parts<br/>
    • Prototype and batch production work<br/>
    • Automotive and industrial components</p>

    <h3>Why Choose i-NAX Metal Lathe?</h3>
    <p>✅ <strong>Precision First:</strong> Low run-out and improved surface finish.<br/>
    ✅ <strong>Built for Performance:</strong> Rigid construction extends tool life.<br/>
    ✅ <strong>Versatile Use:</strong> Supports a variety of part sizes and machining tasks.<br/>
    ✅ <strong>Easy Operation:</strong> Ergonomic layout with optional digital/CNC controls.</p>

    <h3>Ideal For</h3>
    <p>🔹 Machine shops & fabrication plants<br/>
    🔹 Production and prototype machining<br/>
    🔹 Maintenance & repairs<br/>
    🔹 Educational & training workshops</p>

    <h3>Frequently Asked Questions</h3>
    <div class="faq-box">
      <p><strong>1. What is an i-NAX Metal Lathe used for?</strong><br/>
      It is used for precision machining operations such as turning, facing, threading, boring, and drilling to produce cylindrical and custom-shaped metal parts.</p>
    </div>

    <div class="faq-box">
      <p><strong>2. What materials can be machined?</strong><br/>
      It can machine a wide range of metals including Mild steel, Stainless steel, Cast iron, Aluminum, Brass, and copper alloys.</p>
    </div>

    <div class="faq-box">
      <p><strong>3. Is it suitable for industrial use?</strong><br/>
      Yes, the rigid cast-iron structure and precision components make it suitable for continuous industrial, workshop, and tool-room operations.</p>
    </div>

    <div class="faq-box">
      <p><strong>4. Does it support threading operations?</strong><br/>
      Yes, the machine supports both internal and external threading with consistent pitch accuracy.</p>
    </div>

    <div class="faq-box">
      <p><strong>5. Can it be used for small-batch or prototype work?</strong><br/>
      Absolutely. Its flexibility and ease of setup make it well-suited for prototype development and repair jobs.</p>
    </div>

    <div class="faq-box">
      <p><strong>6. Is it easy for beginners to operate?</strong><br/>
      Yes, it features an ergonomic layout and simple controls, making it accessible for both experienced machinists and trained beginners.</p>
    </div>

    <div class="faq-box">
      <p><strong>7. What optional accessories are available?</strong><br/>
      Options include Digital Readout (DRO), different chuck sizes, steady/follow rests, and coolant systems.</p>
    </div>

    <div class="faq-box">
      <p><strong>8. What maintenance is required?</strong><br/>
      Routine maintenance includes regular lubrication, cleaning of guideways, and periodic alignment inspections.</p>
    </div>

    <div class="faq-box">
      <p><strong>9. Can it be customized?</strong><br/>
      Yes, it can be configured with different specifications and optional features based on customer requirements.</p>
    </div>

    <div class="faq-box">
      <p><strong>10. Where is it commonly used?</strong><br/>
      In manufacturing industries, automotive workshops, tool rooms, fabrication units, and educational institutes.</p>
    </div>
  `,
  specs: ['Material: Cast Iron Bed', 'Operations: Turning, Threading, Boring'],
  image: '/images/I-NAX Metal Lathe in Detail.png'
}
];