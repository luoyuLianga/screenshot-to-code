import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "../ui/select";

const MODEL_SELECTION: string[] = ["qwen-vl-v1", "qwen-vl-chat-v1", "qwen2-vl-7b-instruct", "qwen2-vl-2b-instruct"]

interface Props {
  modelName: string | undefined;
  setModel: (config: string) => void;
  label?: string;
  shouldDisableUpdates?: boolean;
}

function OutputSettingsSection({
  modelName,
  setModel,
  label = "ModelName:",
  shouldDisableUpdates = false,
}: Props) {
  return (
    <div className="flex flex-col gap-y-2 justify-between text-sm">
      <div className="grid grid-cols-3 items-center gap-4">
        <span>{label}</span>
        <Select
          value={modelName}
          onValueChange={(value: string) => setModel(value)}
          disabled={shouldDisableUpdates}
        >
          <SelectTrigger className="col-span-2" id="output-settings-js">
            {modelName}
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {MODEL_SELECTION.map((modelName) => (
                <SelectItem key={modelName} value={modelName}>
                  {modelName}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default OutputSettingsSection;
