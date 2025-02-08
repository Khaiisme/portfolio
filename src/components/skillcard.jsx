import Prototypes from "prop-types";
function SkillCard({ imgSrc, label, desc, classes }) {
  return (
    <div
      className={
        "flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group " +
        "sm:w-auto sm:h-auto sm:p-2 w-16 h-16 p-3" + // Smaller container for mobile screens
        classes
      }
    >
      {/* Figure */}
      <div>
        <figure className="bg-zinc-700/50 rounded-lg overflow-hidden w-10 h-10 p-2 group-hover:bg-zinc-900 sm:w-12 sm:h-12">
          <img src={imgSrc} width={32} height={32} alt={label} />
        </figure>
      </div>

      {/* Label */}
      <h3 className="hidden sm:block">{label}</h3>
    </div>
  );
}

export default SkillCard;

SkillCard.propTypes = {
  imgSrc: Prototypes.string.isRequired,
  label: Prototypes.string.isRequired,
  desc: Prototypes.string.isRequired,
  classes: Prototypes.string,
};
